import { EventEmitter } from 'events';
import { RoomModule } from '../network/RoomModule';
import { pokemonGuess } from '../proto/combined';

// 协议枚举，从proto文件中导入
export enum PokemonGuessProtocol {
    // 游戏设置相关
    REQ_UPDATE_GAME_SETTINGS = 4001,
    RES_UPDATE_GAME_SETTINGS = 4002,

    // 游戏控制相关
    REQ_START_GAME = 4010,
    RES_START_GAME = 4011,
    REQ_END_GAME = 4012,
    RES_END_GAME = 4013,

    // 游戏操作相关
    REQ_SUBMIT_GUESS = 4020,
    RES_SUBMIT_GUESS = 4021,

    // 数据源切换相关
    REQ_TOGGLE_DATA_SOURCE = 4025,
    RES_TOGGLE_DATA_SOURCE = 4026,

    // 通知相关
    NOTIFY_GAME_STATE = 4030,
    NOTIFY_GAME_STARTED = 4031,
    NOTIFY_GAME_ENDED = 4032,
    NOTIFY_SETTINGS_CHANGED = 4033,
    NOTIFY_PLAYER_DETAIL = 4034,
    NOTIFY_DATA_SOURCE_CHANGED = 4035
}

// 为了满足缺少的类型，添加这些接口
declare module '../proto/combined' {
    namespace pokemonGuess {
        interface NotifyDataSourceChanged {
            useLocalData?: boolean;
            changedById?: string;
        }

        namespace NotifyDataSourceChanged {
            function decode(data: Uint8Array): NotifyDataSourceChanged;
        }

        interface ReqToggleDataSource {
            useLocalData: boolean;
        }

        namespace ReqToggleDataSource {
            function create(params: { useLocalData: boolean }): ReqToggleDataSource;
            function encode(message: ReqToggleDataSource): { finish(): Uint8Array };
        }

        interface ResToggleDataSource {
            success?: boolean;
            useLocalData?: boolean;
            errorMessage?: string;
        }

        namespace ResToggleDataSource {
            function decode(data: Uint8Array): ResToggleDataSource;
        }
    }
}

// 数据接口
export interface GameSettings {
    maxAttempts: number;
    pokemonRange: string;
    firstCorrectEnds: boolean;
    timeLimitSeconds: number;
}

export interface PlayerGuessDetail {
    attemptNumber: number;
    pokemonName: string;
    status: number;
    timestamp: number;
    type?: pokemonGuess.IAttributeComparison[];
    power?: pokemonGuess.IAttributeComparison | undefined;
    speed?: pokemonGuess.IAttributeComparison | undefined;
    attack?: pokemonGuess.IAttributeComparison | undefined;
    defense?: pokemonGuess.IAttributeComparison | undefined;
    generation?: pokemonGuess.IAttributeComparison | undefined;
    shape?: pokemonGuess.IAttributeComparison | undefined;
    evolution?: pokemonGuess.IAttributeComparison | undefined;
    catchRate?: pokemonGuess.IAttributeComparison | undefined;
    abilities?: pokemonGuess.IAttributeComparison[];
    eggs?: pokemonGuess.IAttributeComparison[];
    labels?: pokemonGuess.IAttributeComparison[];
    stage?: pokemonGuess.IAttributeComparison | undefined;
    color?: string | undefined;
}

export interface GuessResultSummary {
    attemptNumber: number;
    status: number;
    timestamp: number;
}

export interface PlayerInfo {
    playerId: string;
    nickname: string;
    avatarUrl: string;
    isHost: boolean;
    status: number;
    attemptsUsed: number;
    lastActivityTime: number;
    guessHistory: GuessResultSummary[];
}

export interface GameState {
    state: number;
    players: PlayerInfo[];
    settings: GameSettings;
    startTimestamp: number;
    remainingTimeSeconds: number;
    hostId: string;
    updatedReason: number;
    updatedPlayerId: string;
}

export interface PlayerRank {
    playerId: string;
    nickname: string;
    attemptsUsed: number;
    timeUsedSeconds: number;
    finalStatus: number;
    score: number;
    rank: number;
}

export class PokemonGuessService {
    private static instance: PokemonGuessService;
    private roomModule: RoomModule | null = null;
    private eventEmitter: EventEmitter;
    private connected: boolean = false;
    private enableLogging: boolean = true; // 是否启用日志记录

    // 游戏状态
    private gameState: GameState | null = null;
    private playerDetail: pokemonGuess.IPlayerDetailInfo | null = null;
    private isGameHost: boolean = false;

    private constructor() {
        this.eventEmitter = new EventEmitter();
    }

    public static getInstance(): PokemonGuessService {
        if (!PokemonGuessService.instance) {
            PokemonGuessService.instance = new PokemonGuessService();
        }
        return PokemonGuessService.instance;
    }

    /**
     * 启用或禁用包日志记录
     * @param enable 是否启用日志
     */
    public setLoggingEnabled(enable: boolean): void {
        this.enableLogging = enable;
    }

    /**
     * 封装RoomModule的sendMessage方法，增加日志记录
     */
    private sendMessageWithLogging(commandId: number, data: Uint8Array, callback?: (response: any) => void): void {
        if (!this.roomModule) {
            console.error('Cannot send message: RoomModule is not initialized');
            return;
        }

        // 记录发送的包体内容
        if (this.enableLogging) {
            try {
                console.group(`🚀 [Client][PokemonGuess] 发送包体 CMD:${commandId}`);
                console.log("原始数据:", Array.from(data).map(b => (b as number).toString(16).padStart(2, '0')).join(''));
                this.logPacketByCommandId(commandId, data, "发送");
                console.groupEnd();
            } catch (error) {
                console.error('Error logging outgoing packet:', error);
            }
        }

        // 封装回调函数，记录响应内容
        const wrappedCallback = callback ? (response: any) => {
            if (this.enableLogging && !response.error) {
                try {
                    console.group(`📥 [Client][PokemonGuess] 接收响应 CMD:${commandId}`);
                    console.log("原始数据:", Array.from(response.data as Uint8Array).map(b => (b as number).toString(16).padStart(2, '0')).join(''));
                    this.logPacketByCommandId(commandId + 1, response.data, "接收"); // 响应ID通常是请求ID+1
                    console.groupEnd();
                } catch (error) {
                    console.error('Error logging incoming packet:', error);
                }
            }
            callback(response);
        } : undefined;

        // 发送消息
        this.roomModule.sendMessage(commandId, data, wrappedCallback);
    }

    /**
     * 根据命令ID记录不同类型的包体内容
     */
    private logPacketByCommandId(commandId: number, data: Uint8Array, direction: string): void {
        try {
            switch (commandId) {
                // 游戏设置相关
                case PokemonGuessProtocol.REQ_UPDATE_GAME_SETTINGS:
                    console.log("包体类型: 更新游戏设置请求");
                    console.log("数据内容:", pokemonGuess.ReqUpdateGameSettings.decode(data));
                    break;
                case PokemonGuessProtocol.RES_UPDATE_GAME_SETTINGS:
                    console.log("包体类型: 更新游戏设置响应");
                    console.log("数据内容:", pokemonGuess.ResUpdateGameSettings.decode(data));
                    break;

                // 游戏控制相关
                case PokemonGuessProtocol.REQ_START_GAME:
                    console.log("包体类型: 开始游戏请求");
                    console.log("数据内容:", pokemonGuess.ReqStartGame.decode(data));
                    break;
                case PokemonGuessProtocol.RES_START_GAME:
                    console.log("包体类型: 开始游戏响应");
                    console.log("数据内容:", pokemonGuess.ResStartGame.decode(data));
                    break;
                case PokemonGuessProtocol.REQ_END_GAME:
                    console.log("包体类型: 结束游戏请求");
                    console.log("数据内容:", pokemonGuess.ReqEndGame.decode(data));
                    break;
                case PokemonGuessProtocol.RES_END_GAME:
                    console.log("包体类型: 结束游戏响应");
                    console.log("数据内容:", pokemonGuess.ResEndGame.decode(data));
                    break;

                // 游戏操作相关
                case PokemonGuessProtocol.REQ_SUBMIT_GUESS:
                    console.log("包体类型: 提交猜测请求");
                    console.log("数据内容:", pokemonGuess.ReqSubmitGuess.decode(data));
                    break;
                case PokemonGuessProtocol.RES_SUBMIT_GUESS:
                    console.log("包体类型: 提交猜测响应");
                    console.log("数据内容:", pokemonGuess.ResSubmitGuess.decode(data));
                    break;

                // 数据源切换相关
                case PokemonGuessProtocol.REQ_TOGGLE_DATA_SOURCE:
                    console.log("包体类型: 切换数据源请求");
                    console.log("数据内容: { useLocalData: [使用二进制数据无法显示] }");
                    break;
                case PokemonGuessProtocol.RES_TOGGLE_DATA_SOURCE:
                    console.log("包体类型: 切换数据源响应");
                    console.log("数据内容:", pokemonGuess.ResToggleDataSource.decode(data));
                    break;

                // 通知相关
                case PokemonGuessProtocol.NOTIFY_GAME_STATE:
                    console.log("包体类型: 游戏状态通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameState.decode(data));
                    break;
                case PokemonGuessProtocol.NOTIFY_GAME_STARTED:
                    console.log("包体类型: 游戏开始通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameStarted.decode(data));
                    break;
                case PokemonGuessProtocol.NOTIFY_GAME_ENDED:
                    console.log("包体类型: 游戏结束通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameEnded.decode(data));
                    break;
                case PokemonGuessProtocol.NOTIFY_SETTINGS_CHANGED:
                    console.log("包体类型: 设置变更通知");
                    console.log("数据内容:", pokemonGuess.NotifySettingsChanged.decode(data));
                    break;
                case PokemonGuessProtocol.NOTIFY_PLAYER_DETAIL:
                    console.log("包体类型: 玩家详情通知");
                    console.log("数据内容:", pokemonGuess.NotifyPlayerDetail.decode(data));
                    break;
                case PokemonGuessProtocol.NOTIFY_DATA_SOURCE_CHANGED:
                    console.log("包体类型: 数据源变更通知");
                    console.log("数据内容:", pokemonGuess.NotifyDataSourceChanged.decode(data));
                    break;
                default:
                    console.log(`包体类型: 未知命令ID ${commandId}`);
                    console.log("数据内容: [无法解析的二进制数据]");
            }
        } catch (error) {
            console.error(`解析包体失败:`, error);
        }
    }

    /**
     * 连接到游戏服务器
     * @param url 服务器URL
     * @param roomId 房间ID，如果是加入现有房间
     * @param options 额外选项
     * @returns Promise resolving to connection success (true) or failure (false)
     */
    public async connect(url: string, roomId: string = "", options: any = {}): Promise<boolean> {
        // 初始化RoomModule
        if (!this.roomModule) {
            this.roomModule = new RoomModule();
        }

        try {
            let success = false;

            if (roomId) {
                // 加入现有房间
                success = await this.roomModule.join(url, roomId, options);
            } else {
                // 创建新房间
                success = await this.roomModule.create(url, "PokemonGuessRoom", options);
            }

            if (success) {
                this.connected = true;
                this.setupEventListeners();
            }
            return success;
        } catch (error) {
            console.error('Failed to connect to PokemonGuess server:', error);
            this.connected = false;
            return false;
        }
    }

    /**
     * 创建或加入游戏房间
     * @param url 服务器URL
     * @param options 额外选项
     * @returns Promise resolving to connection success (true) or failure (false)
     */
    public async joinOrCreate(url: string, options: any = {}): Promise<boolean> {
        // 初始化RoomModule
        if (!this.roomModule) {
            this.roomModule = new RoomModule();
        }

        try {
            const success = await this.roomModule.joinOrCreate(url, "PokemonGuessRoom", options);

            if (success) {
                this.connected = true;
                this.setupEventListeners();
            }
            return success;
        } catch (error) {
            console.error('Failed to join or create PokemonGuess room:', error);
            this.connected = false;
            return false;
        }
    }

    /**
     * 检查是否已连接到服务器
     * @returns true if connected, false otherwise
     */
    public isConnected(): boolean {
        return this.connected;
    }

    /**
     * 获取当前房间ID
     * @returns 房间ID或空字符串
     */
    public getRoomId(): string {
        return this.roomModule?.getRoomId() || "";
    }

    /**
     * 断开与服务器的连接
     */
    public disconnect(): void {
        if (this.roomModule) {
            this.roomModule.disconnect();
        }
        this.connected = false;
        this.gameState = null;
        this.playerDetail = null;
    }

    /**
     * 设置事件监听器
     */
    private setupEventListeners(): void {
        if (!this.roomModule) {
            console.error('Cannot setup event listeners: RoomModule is not initialized');
            return;
        }

        // 添加通知记录包装器
        const addLoggingNotificationCallback = (commandId: number, handler: (data: any) => void) => {
            this.roomModule!.addNotificationCallback(commandId, (data: any) => {
                if (this.enableLogging) {
                    try {
                        console.group(`📥 [Client][PokemonGuess] 接收通知 CMD:${commandId}`);
                        console.log("原始数据:", Array.from(data as Uint8Array).map(b => (b as number).toString(16).padStart(2, '0')).join(''));
                        this.logPacketByCommandId(commandId, data, "接收");
                        console.groupEnd();
                    } catch (error) {
                        console.error('Error logging notification packet:', error);
                    }
                }
                handler(data);
            });
        };

        // 监听玩家详情更新
        addLoggingNotificationCallback(PokemonGuessProtocol.NOTIFY_PLAYER_DETAIL, (data) => {
            try {
                const playerDetail = pokemonGuess.NotifyPlayerDetail.decode(data);
                this.playerDetail = playerDetail.playerDetail || null;

                // 添加详细日志 - 1
                console.log("🔍 [房主状态检查] 收到玩家详情更新:", this.playerDetail);

                // 更新是否为房主状态
                if (this.playerDetail && this.playerDetail.isHost) {
                    console.log(`🔍 [房主状态检查] 设置为房主! playerDetail.isHost = ${this.playerDetail.isHost}, 玩家ID = ${this.playerDetail.playerId || "未知"}`);
                    this.isGameHost = true;
                    console.log(`🔍 [房主状态检查] 房主状态更新完成: isGameHost = ${this.isGameHost}`);
                } else {
                    console.log(`🔍 [房主状态检查] 不是房主或数据为空: playerDetail = ${this.playerDetail ? JSON.stringify({
                        playerId: this.playerDetail.playerId,
                        isHost: this.playerDetail.isHost
                    }) : "null"}`);
                }

                this.eventEmitter.emit('playerDetailUpdated', this.playerDetail);
            } catch (error) {
                console.error('Error processing player detail notification:', error);
            }
        });

        // 监听游戏状态更新
        addLoggingNotificationCallback(PokemonGuessProtocol.NOTIFY_GAME_STATE, (data) => {
            try {
                const gameState = pokemonGuess.NotifyGameState.decode(data);
                this.gameState = {
                    state: gameState.state || 0,
                    players: gameState.players?.map(p => this.convertPlayerInfo(p)) || [],
                    settings: this.convertGameSettings(gameState.settings || undefined),
                    startTimestamp: Number(gameState.startTimestamp || 0),
                    remainingTimeSeconds: Number(gameState.remainingTimeSeconds || 0),
                    hostId: gameState.hostId || "",
                    updatedReason: gameState.updatedReason || 0,
                    updatedPlayerId: gameState.updatedPlayerId || ""
                };

                // 添加详细日志 - 2
                const playerId = this.getPlayerId();
                console.log(`🔍 [房主状态检查] 游戏状态更新: 当前玩家ID = ${playerId}, 房主ID = ${this.gameState.hostId}`);

                // 更新是否为房主
                const isHostFromGameState = this.gameState.players.some(p =>
                    p.playerId === playerId && p.isHost);

                console.log(`🔍 [房主状态检查] 游戏状态中的房主检查: 是否为房主 = ${isHostFromGameState}`);
                this.isGameHost = isHostFromGameState;
                console.log(`🔍 [房主状态检查] 房主状态更新完成: isGameHost = ${this.isGameHost}`);

                this.eventEmitter.emit('gameStateUpdated', this.gameState);
            } catch (error) {
                console.error('Error processing game state notification:', error);
            }
        });

        // 监听游戏开始
        addLoggingNotificationCallback(PokemonGuessProtocol.NOTIFY_GAME_STARTED, (data) => {
            try {
                const gameStarted = pokemonGuess.NotifyGameStarted.decode(data);
                const startInfo = {
                    settings: this.convertGameSettings(gameStarted.settings || undefined),
                    startTimestamp: Number(gameStarted.startTimestamp || 0),
                    players: gameStarted.players?.map(p => this.convertPlayerInfo(p)) || []
                };
                this.eventEmitter.emit('gameStarted', startInfo);
            } catch (error) {
                console.error('Error processing game started notification:', error);
            }
        });

        // 监听游戏结束
        addLoggingNotificationCallback(PokemonGuessProtocol.NOTIFY_GAME_ENDED, (data) => {
            try {
                const gameEnded = pokemonGuess.NotifyGameEnded.decode(data);
                const endInfo = {
                    answerId: gameEnded.answerId || "",
                    answerName: gameEnded.answerName || "",
                    rankings: gameEnded.rankings?.map(r => this.convertPlayerRank(r)) || [],
                    nextState: gameEnded.nextState || 0
                };
                this.eventEmitter.emit('gameEnded', endInfo);
            } catch (error) {
                console.error('Error processing game ended notification:', error);
            }
        });

        // 监听设置变更
        addLoggingNotificationCallback(PokemonGuessProtocol.NOTIFY_SETTINGS_CHANGED, (data) => {
            try {
                const settingsChanged = pokemonGuess.NotifySettingsChanged.decode(data);
                const settings = this.convertGameSettings(settingsChanged.settings || undefined);
                const changedById = settingsChanged.changedById || "";
                this.eventEmitter.emit('settingsChanged', settings, changedById);
            } catch (error) {
                console.error('Error processing settings changed notification:', error);
            }
        });
    }

    // 辅助方法：转换PlayerInfo对象
    private convertPlayerInfo(player: pokemonGuess.IPlayerInfo): PlayerInfo {
        return {
            playerId: player.playerId || "",
            nickname: player.nickname || "",
            avatarUrl: player.avatarUrl || "",
            isHost: player.isHost || false,
            status: player.status || 0,
            attemptsUsed: player.attemptsUsed || 0,
            lastActivityTime: Number(player.lastActivityTime || 0),
            guessHistory: player.guessHistory?.map(g => ({
                attemptNumber: g.attemptNumber || 0,
                status: g.status || 0,
                timestamp: Number(g.timestamp || 0)
            })) || []
        };
    }

    // 辅助方法：转换GameSettings对象
    private convertGameSettings(settings?: pokemonGuess.IGameSettings | null): GameSettings {
        return {
            maxAttempts: settings?.maxAttempts || 8,
            pokemonRange: settings?.pokemonRange || "1-151",
            firstCorrectEnds: settings?.firstCorrectEnds || false,
            timeLimitSeconds: settings?.timeLimitSeconds || 300
        };
    }

    // 辅助方法：转换PlayerRank对象
    private convertPlayerRank(rank: pokemonGuess.IPlayerRank): PlayerRank {
        return {
            playerId: rank.playerId || "",
            nickname: rank.nickname || "",
            attemptsUsed: rank.attemptsUsed || 0,
            timeUsedSeconds: rank.timeUsedSeconds || 0,
            finalStatus: rank.finalStatus || 0,
            score: rank.score || 0,
            rank: rank.rank || 0
        };
    }

    /**
     * 更新游戏设置
     * @param settings 新的游戏设置
     * @returns Promise resolving to settings update success (true) or failure (false)
     */
    public updateGameSettings(settings: GameSettings): Promise<GameSettings> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        return new Promise((resolve, reject) => {
            // 创建并编码请求
            const reqUpdateSettings = pokemonGuess.ReqUpdateGameSettings.create({
                settings: settings
            });

            const encodedRequest = pokemonGuess.ReqUpdateGameSettings.encode(reqUpdateSettings).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                PokemonGuessProtocol.REQ_UPDATE_GAME_SETTINGS,
                encodedRequest,
                (response) => {
                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // 解码响应
                        const resUpdateSettings = pokemonGuess.ResUpdateGameSettings.decode(response.data);
                        if (resUpdateSettings.success) {
                            resolve(this.convertGameSettings(resUpdateSettings.settings || undefined));
                        } else {
                            reject(new Error(resUpdateSettings.errorMessage || 'Failed to update settings'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    /**
     * 开始游戏
     * @param settings 可选的游戏设置，如果提供则在开始游戏时应用
     * @returns Promise resolving to game start success (true) or failure (false)
     */
    public startGame(settings?: GameSettings): Promise<{ success: boolean, settings: GameSettings, startTimestamp: number }> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        return new Promise((resolve, reject) => {
            // 创建并编码请求
            const reqStartGame = pokemonGuess.ReqStartGame.create({
                settings: settings
            });

            const encodedRequest = pokemonGuess.ReqStartGame.encode(reqStartGame).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                PokemonGuessProtocol.REQ_START_GAME,
                encodedRequest,
                (response) => {
                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // 解码响应
                        const resStartGame = pokemonGuess.ResStartGame.decode(response.data);
                        if (resStartGame.success) {
                            resolve({
                                success: true,
                                settings: this.convertGameSettings(resStartGame.settings || undefined),
                                startTimestamp: Number(resStartGame.startTimestamp || 0)
                            });
                        } else {
                            reject(new Error(resStartGame.errorMessage || 'Failed to start game'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    /**
     * 结束游戏或放弃当前游戏
     * @param isGivingUp 是否为放弃游戏
     * @returns Promise resolving to game end success (true) or failure (false)
     */
    public endGame(isGivingUp: boolean = false): Promise<boolean> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        return new Promise((resolve, reject) => {
            // 创建并编码请求
            const reqEndGame = pokemonGuess.ReqEndGame.create({
                isGivingUp: isGivingUp
            });

            const encodedRequest = pokemonGuess.ReqEndGame.encode(reqEndGame).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                PokemonGuessProtocol.REQ_END_GAME,
                encodedRequest,
                (response) => {
                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // 解码响应
                        const resEndGame = pokemonGuess.ResEndGame.decode(response.data);
                        resolve(resEndGame.success || false);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    /**
     * 提交宝可梦猜测
     * @param pokemonName 宝可梦名称
     * @param attemptNumber 猜测次数编号
     * @returns Promise resolving to guess submission result
     */
    public submitGuess(pokemonName: string, attemptNumber: number): Promise<{
        success: boolean,
        guessDetail?: PlayerGuessDetail,
        attemptsRemaining: number
    }> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        return new Promise((resolve, reject) => {
            // 创建并编码请求
            const reqSubmitGuess = pokemonGuess.ReqSubmitGuess.create({
                pokemonName: pokemonName,
                attemptNumber: attemptNumber
            });

            const encodedRequest = pokemonGuess.ReqSubmitGuess.encode(reqSubmitGuess).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                PokemonGuessProtocol.REQ_SUBMIT_GUESS,
                encodedRequest,
                (response) => {
                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // 解码响应
                        const resSubmitGuess = pokemonGuess.ResSubmitGuess.decode(response.data);
                        if (resSubmitGuess.success) {
                            const detail = resSubmitGuess.guessDetail;
                            resolve({
                                success: true,
                                guessDetail: detail ? {
                                    attemptNumber: detail.attemptNumber || 0,
                                    pokemonName: detail.pokemonName || "",
                                    status: detail.status || 0,
                                    timestamp: Number(detail.timestamp || 0),
                                    type: detail.type || [],
                                    power: detail.power || undefined,
                                    speed: detail.speed || undefined,
                                    attack: detail.attack || undefined,
                                    defense: detail.defense || undefined,
                                    generation: detail.generation || undefined,
                                    shape: detail.shape || undefined,
                                    evolution: detail.evolution || undefined,
                                    catchRate: detail.catchRate || undefined,
                                    abilities: detail.abilities || [],
                                    eggs: detail.eggs || [],
                                    labels: detail.labels || [],
                                    stage: detail.stage || undefined,
                                    color: detail.color || undefined
                                } : undefined,
                                attemptsRemaining: resSubmitGuess.attemptsRemaining || 0
                            });
                        } else {
                            reject(new Error(resSubmitGuess.errorMessage || 'Failed to submit guess'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    // 辅助方法：获取当前玩家ID
    private getPlayerId(): string {
        // 简化处理，假设在playerDetail中有，或从gameState中找到自己的玩家信息
        if (this.playerDetail?.playerId) {
            return this.playerDetail.playerId;
        }

        // 如果没有playerDetail，可能还需要其他方式获取玩家ID
        return "";
    }

    /**
     * 获取当前游戏状态
     * @returns 当前游戏状态或null
     */
    public getGameState(): GameState | null {
        return this.gameState;
    }

    /**
     * 获取当前玩家详细信息
     * @returns 当前玩家详细信息或null
     */
    public getPlayerDetail(): pokemonGuess.IPlayerDetailInfo | null {
        return this.playerDetail;
    }

    /**
     * 检查当前玩家是否为房主
     * @returns true if current player is host, false otherwise
     */
    public isHost(): boolean {
        return this.isGameHost;
    }

    // 事件监听器方法
    public onGameStateUpdated(callback: (gameState: GameState) => void): void {
        this.eventEmitter.on('gameStateUpdated', callback);
    }

    public offGameStateUpdated(callback: (gameState: GameState) => void): void {
        this.eventEmitter.off('gameStateUpdated', callback);
    }

    public onPlayerDetailUpdated(callback: (playerDetail: pokemonGuess.IPlayerDetailInfo) => void): void {
        this.eventEmitter.on('playerDetailUpdated', callback);
    }

    public offPlayerDetailUpdated(callback: (playerDetail: pokemonGuess.IPlayerDetailInfo) => void): void {
        this.eventEmitter.off('playerDetailUpdated', callback);
    }

    public onGameStarted(callback: (startInfo: any) => void): void {
        this.eventEmitter.on('gameStarted', callback);
    }

    public offGameStarted(callback: (startInfo: any) => void): void {
        this.eventEmitter.off('gameStarted', callback);
    }

    public onGameEnded(callback: (endInfo: any) => void): void {
        this.eventEmitter.on('gameEnded', callback);
    }

    public offGameEnded(callback: (endInfo: any) => void): void {
        this.eventEmitter.off('gameEnded', callback);
    }

    public onSettingsChanged(callback: (settings: GameSettings, changedById: string) => void): void {
        this.eventEmitter.on('settingsChanged', callback);
    }

    public offSettingsChanged(callback: (settings: GameSettings, changedById: string) => void): void {
        this.eventEmitter.off('settingsChanged', callback);
    }
} 