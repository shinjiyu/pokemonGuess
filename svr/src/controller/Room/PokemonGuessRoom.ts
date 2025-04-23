import { Client } from "@colyseus/core";
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { pokemonGuess, proto } from "../../proto/combined";
import { BaseRoomForIM } from "./BaseRoomForIM";



// 宝可梦属性
interface PokemonAttributes {
    id: string;
    name: string;
    types: string[];
    power: number;
    speed: number;
    attack: number;
    defense: number;
    generation: number;
    shape: string;
    evolution: string;
    catchRate: number;
    abilities: string[];
    eggs: string[];
    labels: string[];
    stage: number;
    color: string;
}

// 游戏状态
interface GameState {
    settings: pokemonGuess.IGameSettings;
    state: pokemonGuess.GameState;
    startTimestamp: number;
    answerPokemon: PokemonAttributes | null;
    players: Map<string, pokemonGuess.IPlayerInfo>;
    playerDetails: Map<string, pokemonGuess.IPlayerDetailInfo>;
    hostId: string | null;
}

export class PokemonGuessRoom extends BaseRoomForIM {
    maxClients = 100;
    autoDispose = true;

    // 自己的命令处理映射表
    private myCommandHandlers: Map<number, (client: Client, seqId: number, data: any) => void> = new Map();

    // 游戏状态
    private gameState: GameState;

    // 宝可梦数据
    private pokemonData: Map<string, PokemonAttributes> = new Map();
    private pokemonNames: string[] = [];

    // 倒计时定时器
    private gameTimerId: NodeJS.Timeout | null = null;

    // 重写发送方法，用于记录完整包体
    public sendPacket(client: Client, commandId: number, sequenceId: number, data: Uint8Array) {
        // 打印发送的包体内容
        try {
            console.group(`🚀 [PokemonGuessRoom] 发送包体 CMD:${commandId} SEQ:${sequenceId}`);
            console.log("原始数据:", Buffer.from(data).toString('hex'));

            // 根据不同命令ID解析对应的数据
            if (this.decodeAndLogPacket(commandId, data, "发送")) {
                // 解析成功
            } else {
                console.log("数据内容: [无法解析的二进制数据]");
            }
            console.groupEnd();
        } catch (error) {
            console.error(`[PokemonGuessRoom] 打印发送包体出错:`, error);
        }

        // 调用父类方法发送数据
        super.sendPacket(client, commandId, sequenceId, data);
    }

    // 重写初始化方法，添加消息拦截
    public override initProto() {
        // 注册消息处理
        this.onMessage("RoomRequest", (client, message) => {
            const decodedMessage = proto.RoomRequest.decode(message);

            const commandId = decodedMessage.commandId;
            const commandData = decodedMessage.data;
            const seqId = decodedMessage.sequenceId;

            // 打印接收的包体内容
            try {
                console.group(`📥 [PokemonGuessRoom] 接收包体 CMD:${commandId} SEQ:${seqId}`);
                console.log("原始数据:", Buffer.from(commandData).toString('hex'));

                // 根据不同命令ID解析对应的数据
                if (this.decodeAndLogPacket(commandId, commandData, "接收")) {
                    // 解析成功
                } else {
                    console.log("数据内容: [无法解析的二进制数据]");
                }
                console.groupEnd();
            } catch (error) {
                console.error(`[PokemonGuessRoom] 打印接收包体出错:`, error);
            }

            // 查找并调用对应的命令处理函数
            const handler = this.myCommandHandlers.get(commandId);
            if (handler) {
                handler(client, seqId, commandData);
            } else {
                console.warn(`[PokemonGuessRoom] 未找到命令处理函数: ${commandId}`);
            }
        });
    }

    // 重写注册命令处理函数方法
    public override registerCommandHandler(commandId: number, handler: (client: Client, seqId: number, data: any) => void) {
        this.myCommandHandlers.set(commandId, handler);
    }

    // 根据命令ID解析对应的数据结构并打印
    private decodeAndLogPacket(commandId: number, data: Uint8Array, direction: string): boolean {
        try {
            // 根据命令ID解析相应的protobuf消息
            switch (commandId) {
                // 游戏设置相关
                case pokemonGuess.ProtocolNumber.REQ_UPDATE_GAME_SETTINGS:
                    console.log("包体类型: 更新游戏设置请求");
                    console.log("数据内容:", pokemonGuess.ReqUpdateGameSettings.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.RES_UPDATE_GAME_SETTINGS:
                    console.log("包体类型: 更新游戏设置响应");
                    console.log("数据内容:", pokemonGuess.ResUpdateGameSettings.decode(data));
                    return true;

                // 游戏流程相关
                case pokemonGuess.ProtocolNumber.REQ_START_GAME:
                    console.log("包体类型: 开始游戏请求");
                    console.log("数据内容:", pokemonGuess.ReqStartGame.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.RES_START_GAME:
                    console.log("包体类型: 开始游戏响应");
                    console.log("数据内容:", pokemonGuess.ResStartGame.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.REQ_END_GAME:
                    console.log("包体类型: 结束游戏请求");
                    console.log("数据内容:", pokemonGuess.ReqEndGame.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.RES_END_GAME:
                    console.log("包体类型: 结束游戏响应");
                    console.log("数据内容:", pokemonGuess.ResEndGame.decode(data));
                    return true;

                // 猜测相关
                case pokemonGuess.ProtocolNumber.REQ_SUBMIT_GUESS:
                    console.log("包体类型: 提交猜测请求");
                    console.log("数据内容:", pokemonGuess.ReqSubmitGuess.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS:
                    console.log("包体类型: 提交猜测响应");
                    console.log("数据内容:", pokemonGuess.ResSubmitGuess.decode(data));
                    return true;

                // 通知相关
                case pokemonGuess.ProtocolNumber.NOTIFY_GAME_STATE:
                    console.log("包体类型: 游戏状态通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameState.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.NOTIFY_GAME_STARTED:
                    console.log("包体类型: 游戏开始通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameStarted.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.NOTIFY_GAME_ENDED:
                    console.log("包体类型: 游戏结束通知");
                    console.log("数据内容:", pokemonGuess.NotifyGameEnded.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.NOTIFY_SETTINGS_CHANGED:
                    console.log("包体类型: 设置更改通知");
                    console.log("数据内容:", pokemonGuess.NotifySettingsChanged.decode(data));
                    return true;

                case pokemonGuess.ProtocolNumber.NOTIFY_PLAYER_DETAIL:
                    console.log("包体类型: 玩家详情通知");
                    console.log("数据内容:", pokemonGuess.NotifyPlayerDetail.decode(data));
                    return true;

                default:
                    console.log(`包体类型: 未知命令ID ${commandId}`);
                    return false;
            }
        } catch (error) {
            console.error(`解析包体失败:`, error);
            return false;
        }
    }

    constructor() {
        super();
        // 初始化游戏状态
        this.gameState = {
            settings: {
                maxAttempts: 8,
                pokemonRange: "1-151",
                firstCorrectEnds: false,
                timeLimitSeconds: 300
            },
            state: pokemonGuess.GameState.WAITING,
            startTimestamp: 0,
            answerPokemon: null,
            players: new Map(),
            playerDetails: new Map(),
            hostId: null
        };

        // 加载宝可梦数据
        this.loadPokemonData();
    }

    // 加载宝可梦数据
    private loadPokemonData() {
        try {
            // 加载宝可梦名称
            const namesPath = path.resolve(__dirname, '../../../data/names.json');
            this.pokemonNames = JSON.parse(fs.readFileSync(namesPath, 'utf8'));

            console.log(`[PokemonGuessRoom] 加载了 ${this.pokemonNames.length} 个宝可梦`);

            // 为简化示例，这里只创建基本属性，实际项目中应该从数据库或JSON文件加载完整数据
            this.pokemonNames.forEach((name, index) => {
                const id = (index + 1).toString();
                const fakePokemon: PokemonAttributes = {
                    id: id,
                    name: name,
                    types: ["普通"], // 简化，实际应从数据源获取
                    power: Math.floor(Math.random() * 100) + 50,
                    speed: Math.floor(Math.random() * 100) + 30,
                    attack: Math.floor(Math.random() * 100) + 40,
                    defense: Math.floor(Math.random() * 100) + 40,
                    generation: Math.floor(index / 150) + 1,
                    shape: ["圆形", "人形", "四足", "鸟形", "鱼形"][Math.floor(Math.random() * 5)],
                    evolution: ["单阶", "二阶", "三阶"][Math.floor(Math.random() * 3)],
                    catchRate: Math.floor(Math.random() * 200) + 10,
                    abilities: ["特性1", "特性2"],
                    eggs: ["蛋组1", "蛋组2"],
                    labels: ["标签1", "标签2"],
                    stage: Math.floor(Math.random() * 3) + 1,
                    color: ["红", "蓝", "绿", "黄", "紫", "棕", "黑", "白"][Math.floor(Math.random() * 8)]
                };
                this.pokemonData.set(id, fakePokemon);
            });
        } catch (error) {
            console.error("[PokemonGuessRoom] 加载宝可梦数据失败:", error);
        }
    }

    onCreate(options: { roomId: string }) {
        console.log(`[PokemonGuessRoom] 创建房间，ID: ${options.roomId}`);
        if (options.roomId) {
            this.roomId = options.roomId;
        }
        this.initProto();

        // 注册协议处理函数
        this.registerCommandHandler(pokemonGuess.ProtocolNumber.REQ_UPDATE_GAME_SETTINGS, this.handleReqUpdateGameSettings.bind(this));
        this.registerCommandHandler(pokemonGuess.ProtocolNumber.REQ_START_GAME, this.handleReqStartGame.bind(this));
        this.registerCommandHandler(pokemonGuess.ProtocolNumber.REQ_END_GAME, this.handleReqEndGame.bind(this));
        this.registerCommandHandler(pokemonGuess.ProtocolNumber.REQ_SUBMIT_GUESS, this.handleReqSubmitGuess.bind(this));

        console.log(`[PokemonGuessRoom] 房间 ${options.roomId} 创建成功`);
    }

    onDispose() {
        console.log(`[PokemonGuessRoom] 房间已销毁`);
        // 清理游戏计时器
        if (this.gameTimerId) {
            clearInterval(this.gameTimerId);
            this.gameTimerId = null;
        }
    }

    onJoinCallback(client: Client, options: any) {
        console.log(`[PokemonGuessRoom] 客户端 ${client.sessionId} 加入，选项: ${JSON.stringify(options)}`);

        // 获取用户ID
        const userId = this.getUserIdFromSession(client);
        if (!userId) {
            console.warn(`[PokemonGuessRoom] 添加玩家失败: userId未定义`);
            return;
        }

        // 创建玩家信息
        const playerInfo: pokemonGuess.IPlayerInfo = {
            playerId: userId,
            nickname: options.nickname || "玩家" + userId.substring(0, 4),
            avatarUrl: options.avatar || "",
            isHost: this.gameState.players.size === 0, // 第一个加入的玩家成为房主
            status: pokemonGuess.PlayerStatus.ACTIVE,
            attemptsUsed: 0,
            lastActivityTime: Date.now(),
            guessHistory: []
        };

        // 创建玩家详细信息
        const playerDetailInfo: pokemonGuess.IPlayerDetailInfo = {
            ...playerInfo,
            guessDetails: []
        };

        // 保存玩家信息
        this.gameState.players.set(userId, playerInfo);
        this.gameState.playerDetails.set(userId, playerDetailInfo);

        // 如果是第一个玩家，设为房主
        if (playerInfo.isHost) {
            this.gameState.hostId = userId;
        }

        // 发送游戏状态同步通知
        this.broadcastGameState(1, userId);

        // 发送玩家详情通知给玩家本人
        this.sendPlayerDetail(client, userId);
    }

    onLeave(client: Client, consented: boolean) {
        const userId = this.getUserIdFromSession(client);
        console.log(`[PokemonGuessRoom] 客户端 ${client.sessionId} 离开，consented: ${consented}`);

        if (!userId) return;

        // 更新玩家状态为断开连接
        const playerInfo = this.gameState.players.get(userId);
        if (playerInfo) {
            playerInfo.status = pokemonGuess.PlayerStatus.DISCONNECTED;

            // 游戏进行中，添加断开连接的猜测记录
            if (this.gameState.state === pokemonGuess.GameState.IN_PROGRESS) {
                const guessResult: pokemonGuess.IGuessResultSummary = {
                    attemptNumber: (playerInfo.attemptsUsed || 0) + 1,
                    status: pokemonGuess.GuessResultStatus.GUESS_DISCONNECTED,
                    timestamp: Date.now()
                };
                if (!playerInfo.guessHistory) {
                    playerInfo.guessHistory = [];
                }
                playerInfo.guessHistory.push(guessResult);
            }
        }

        // 检查是否需要重新分配房主
        if (userId === this.gameState.hostId) {
            this.reassignHost();
        }

        // 广播游戏状态更新
        this.broadcastGameState(2, userId);

        // 如果游戏正在进行且所有玩家都离开/断开连接，结束游戏
        if (this.gameState.state === pokemonGuess.GameState.IN_PROGRESS && this.allPlayersDisconnected()) {
            this.endGame();
        }

        // 清理用户ID映射
        this.removeSessionToUserId(client);
    }

    // 重新分配房主
    private reassignHost() {
        // 寻找第一个非断开连接的玩家作为新房主
        for (const [id, player] of this.gameState.players.entries()) {
            if (player.status !== pokemonGuess.PlayerStatus.DISCONNECTED) {
                player.isHost = true;
                this.gameState.hostId = id;
                return;
            }
        }

        // 如果没有可用玩家，设置房主为null
        this.gameState.hostId = null;
    }

    // 检查是否所有玩家都断开连接
    private allPlayersDisconnected(): boolean {
        let activePlayerCount = 0;
        for (const player of this.gameState.players.values()) {
            if (player.status !== pokemonGuess.PlayerStatus.DISCONNECTED) {
                activePlayerCount++;
            }
        }
        return activePlayerCount === 0;
    }

    // 发送游戏状态同步通知给所有客户端
    private broadcastGameState(updatedReason: number, updatedPlayerId: string | null = null) {
        // 创建通知消息
        const notifyGameState = pokemonGuess.NotifyGameState.encode({
            state: this.gameState.state,
            players: Array.from(this.gameState.players.values()),
            settings: this.gameState.settings,
            startTimestamp: this.gameState.startTimestamp,
            remainingTimeSeconds: this.getRemainingTime(),
            hostId: this.gameState.hostId || "",
            updatedReason: updatedReason,
            updatedPlayerId: updatedPlayerId || ""
        }).finish();

        // 广播消息给所有客户端
        this.broadcastPacket(pokemonGuess.ProtocolNumber.NOTIFY_GAME_STATE, 0, notifyGameState);
    }

    // 发送玩家详情通知给指定玩家
    private sendPlayerDetail(client: Client, playerId: string) {
        const playerDetail = this.gameState.playerDetails.get(playerId);
        if (!playerDetail) return;

        const notifyPlayerDetail = pokemonGuess.NotifyPlayerDetail.encode({
            playerDetail: playerDetail
        }).finish();

        this.sendPacket(client, pokemonGuess.ProtocolNumber.NOTIFY_PLAYER_DETAIL, 0, notifyPlayerDetail);
    }

    // 计算游戏剩余时间
    private getRemainingTime(): number {
        if (this.gameState.state !== pokemonGuess.GameState.IN_PROGRESS || this.gameState.settings.timeLimitSeconds === 0) {
            return 0;
        }

        const elapsed = Math.floor((Date.now() - this.gameState.startTimestamp) / 1000);
        const remaining = (this.gameState.settings.timeLimitSeconds || 0) - elapsed;
        return Math.max(0, remaining);
    }

    // 处理更新游戏设置请求
    private handleReqUpdateGameSettings(client: Client, seqId: number, data: any) {
        const userId = this.getUserIdFromSession(client);
        if (!userId) return;

        const reqUpdateGameSettings = pokemonGuess.ReqUpdateGameSettings.decode(data);
        console.log(`[PokemonGuessRoom] 玩家 ${userId} 请求更新游戏设置: ${JSON.stringify(reqUpdateGameSettings.settings)}`);

        // 检查是否为房主
        if (userId !== this.gameState.hostId) {
            const responseData = pokemonGuess.ResUpdateGameSettings.encode({
                success: false,
                errorMessage: "只有房主可以修改游戏设置",
                settings: this.gameState.settings
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_UPDATE_GAME_SETTINGS, seqId, responseData);
            return;
        }

        // 检查游戏是否已开始
        if (this.gameState.state === pokemonGuess.GameState.IN_PROGRESS) {
            const responseData = pokemonGuess.ResUpdateGameSettings.encode({
                success: false,
                errorMessage: "游戏进行中无法修改设置",
                settings: this.gameState.settings
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_UPDATE_GAME_SETTINGS, seqId, responseData);
            return;
        }

        // 验证并更新设置
        const newSettings = reqUpdateGameSettings.settings || {
            maxAttempts: 8,
            pokemonRange: "1-151",
            firstCorrectEnds: false,
            timeLimitSeconds: 300
        };

        // 验证最大猜测次数
        if (newSettings.maxAttempts !== undefined && newSettings.maxAttempts !== null) {
            if (newSettings.maxAttempts < 3 || newSettings.maxAttempts > 20) {
                newSettings.maxAttempts = Math.max(3, Math.min(20, newSettings.maxAttempts));
            }
        }

        // 验证时间限制
        if (newSettings.timeLimitSeconds !== undefined && newSettings.timeLimitSeconds !== null) {
            if (newSettings.timeLimitSeconds < 0) {
                newSettings.timeLimitSeconds = 0; // 0表示无限制
            } else if (newSettings.timeLimitSeconds > 0 && newSettings.timeLimitSeconds < 60) {
                newSettings.timeLimitSeconds = 60; // 最少60秒
            } else if (newSettings.timeLimitSeconds > 3600) {
                newSettings.timeLimitSeconds = 3600; // 最多1小时
            }
        }

        // 更新设置
        this.gameState.settings = newSettings;

        // 发送更新成功响应
        const responseData = pokemonGuess.ResUpdateGameSettings.encode({
            success: true,
            errorMessage: "",
            settings: this.gameState.settings
        }).finish();

        this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_UPDATE_GAME_SETTINGS, seqId, responseData);

        // 广播设置变更通知
        const notifySettingsChanged = pokemonGuess.NotifySettingsChanged.encode({
            settings: this.gameState.settings,
            changedById: userId
        }).finish();

        this.broadcastPacket(pokemonGuess.ProtocolNumber.NOTIFY_SETTINGS_CHANGED, 0, notifySettingsChanged);
    }

    // 处理开始游戏请求
    private handleReqStartGame(client: Client, seqId: number, data: any) {
        const userId = this.getUserIdFromSession(client);
        if (!userId) return;

        const reqStartGame = pokemonGuess.ReqStartGame.decode(data);
        console.log(`[PokemonGuessRoom] 玩家 ${userId} 请求开始游戏`);

        // 检查是否为房主
        if (userId !== this.gameState.hostId) {
            const responseData = pokemonGuess.ResStartGame.encode({
                success: false,
                errorMessage: "只有房主可以开始游戏",
                settings: this.gameState.settings,
                startTimestamp: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_START_GAME, seqId, responseData);
            return;
        }

        // 检查游戏是否已在进行中
        if (this.gameState.state === pokemonGuess.GameState.IN_PROGRESS) {
            const responseData = pokemonGuess.ResStartGame.encode({
                success: false,
                errorMessage: "游戏已经开始",
                settings: this.gameState.settings,
                startTimestamp: this.gameState.startTimestamp
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_START_GAME, seqId, responseData);
            return;
        }

        // 检查玩家数量
        let activePlayers = 0;
        for (const player of this.gameState.players.values()) {
            if (player.status !== pokemonGuess.PlayerStatus.DISCONNECTED) {
                activePlayers++;
            }
        }

        if (activePlayers < 1) {
            const responseData = pokemonGuess.ResStartGame.encode({
                success: false,
                errorMessage: "至少需要1名玩家才能开始游戏",
                settings: this.gameState.settings,
                startTimestamp: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_START_GAME, seqId, responseData);
            return;
        }

        // 如果请求包含新设置，先更新设置
        if (reqStartGame.settings) {
            console.log(`[PokemonGuessRoom] 更新游戏设置: ${JSON.stringify(reqStartGame.settings)}`);
            this.gameState.settings = reqStartGame.settings;
            console.log(`[PokemonGuessRoom] 游戏设置已更新为: ${JSON.stringify(this.gameState.settings)}`);
        } else {
            console.log(`[PokemonGuessRoom] 没有提供新的游戏设置，使用现有设置`);
        }

        // 开始游戏
        this.startGame();

        // 发送开始游戏成功响应
        const responseData = pokemonGuess.ResStartGame.encode({
            success: true,
            errorMessage: "",
            settings: this.gameState.settings,
            startTimestamp: 0
        }).finish();

        this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_START_GAME, seqId, responseData);
    }

    // 处理猜测请求
    private async handleReqSubmitGuess(client: Client, seqId: number, data: any) {
        const userId = this.getUserIdFromSession(client);
        if (!userId) return;

        const reqSubmitGuess = pokemonGuess.ReqSubmitGuess.decode(data);
        console.log(`[PokemonGuessRoom] 玩家 ${userId} 提交猜测: ${reqSubmitGuess.pokemonName}`);

        // 检查游戏状态
        if (this.gameState.state !== pokemonGuess.GameState.IN_PROGRESS) {
            const responseData = pokemonGuess.ResSubmitGuess.encode({
                success: false,
                errorMessage: "游戏尚未开始",
                attemptsRemaining: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);
            return;
        }

        // 获取玩家信息
        const playerInfo = this.gameState.players.get(userId);
        const playerDetailInfo = this.gameState.playerDetails.get(userId);

        if (!playerInfo || !playerDetailInfo) {
            const responseData = pokemonGuess.ResSubmitGuess.encode({
                success: false,
                errorMessage: "玩家信息不存在",
                attemptsRemaining: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);
            return;
        }

        // 检查玩家状态
        if (playerInfo.status !== pokemonGuess.PlayerStatus.ACTIVE) {
            const responseData = pokemonGuess.ResSubmitGuess.encode({
                success: false,
                errorMessage: "您已经完成游戏",
                attemptsRemaining: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);
            return;
        }

        // 检查剩余次数
        const maxAttempts = this.gameState.settings.maxAttempts || 8;
        const attemptsUsed = playerInfo.attemptsUsed || 0;
        if (attemptsUsed >= maxAttempts) {
            const responseData = pokemonGuess.ResSubmitGuess.encode({
                success: false,
                errorMessage: "已达到最大猜测次数",
                attemptsRemaining: 0
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);
            return;
        }

        // 处理猜测
        const pokemonName = reqSubmitGuess.pokemonName.trim();
        const attemptNumber = (playerInfo.attemptsUsed || 0) + 1;
        const timestamp = Date.now();

        // 查找对应的宝可梦
        let guessedPokemon: PokemonAttributes | null = null;
        for (const pokemon of this.pokemonData.values()) {
            if (pokemon.name === pokemonName) {
                guessedPokemon = pokemon;
                break;
            }
        }

        if (!guessedPokemon) {
            const responseData = pokemonGuess.ResSubmitGuess.encode({
                success: false,
                errorMessage: "宝可梦不存在",
                attemptsRemaining: maxAttempts - attemptsUsed
            }).finish();

            this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);
            return;
        }

        // 检查是否猜对
        const answerPokemon = this.gameState.answerPokemon!;
        const isCorrect = guessedPokemon.id === answerPokemon.id;

        // 创建猜测详情
        let guessDetail: pokemonGuess.IPlayerGuessDetail;

        try {
            // 始终使用远端API获取比较结果
            guessDetail = await this.getRemoteGuessDetail(answerPokemon.id, guessedPokemon.name, attemptNumber, timestamp, isCorrect);
        } catch (error) {
            console.error(`[PokemonGuessRoom] 获取猜测详情失败，使用本地计算: ${error}`);
            // 如果远端API调用失败，降级使用本地计算
            guessDetail = this.createLocalGuessDetail(guessedPokemon, answerPokemon, attemptNumber, timestamp, isCorrect);
        }

        console.log(`[PokemonGuessRoom] 猜测详情: ${JSON.stringify(guessDetail)}`);

        // 创建猜测结果摘要（给其他玩家看）
        const guessSummary: pokemonGuess.IGuessResultSummary = {
            attemptNumber: attemptNumber,
            status: guessDetail.status,
            timestamp: timestamp
        };

        // 更新玩家信息
        playerInfo.attemptsUsed = attemptNumber;
        playerInfo.lastActivityTime = timestamp;
        if (!playerInfo.guessHistory) {
            playerInfo.guessHistory = [];
        }
        playerInfo.guessHistory.push(guessSummary);

        playerDetailInfo.attemptsUsed = attemptNumber;
        playerDetailInfo.lastActivityTime = timestamp;
        if (!playerDetailInfo.guessDetails) {
            playerDetailInfo.guessDetails = [];
        }
        playerDetailInfo.guessDetails.push(guessDetail);

        // 如果猜对了，更新玩家状态
        if (isCorrect) {
            playerInfo.status = pokemonGuess.PlayerStatus.FOUND_ANSWER;
            playerDetailInfo.status = pokemonGuess.PlayerStatus.FOUND_ANSWER;

            // 检查是否设置了首位答对即结束
            if (this.gameState.settings.firstCorrectEnds) {
                // 标记游戏为即将结束
                this.scheduleGameEnd();
            }
        }
        // 如果用完了所有尝试次数，更新状态
        else if (attemptNumber >= maxAttempts) {
            playerInfo.status = pokemonGuess.PlayerStatus.OUT_OF_ATTEMPTS;
            playerDetailInfo.status = pokemonGuess.PlayerStatus.OUT_OF_ATTEMPTS;
        }

        // 发送猜测结果响应
        const responseData = pokemonGuess.ResSubmitGuess.encode({
            success: true,
            errorMessage: "",
            guessDetail: guessDetail,
            attemptsRemaining: maxAttempts - attemptNumber
        }).finish();

        this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_SUBMIT_GUESS, seqId, responseData);

        // 广播游戏状态更新
        this.broadcastGameState(5, userId);

        // 发送玩家详细信息更新（仅给玩家本人）
        this.sendPlayerDetail(client, userId);

        // 检查游戏是否已结束（所有玩家都完成了）
        this.checkGameEnd();
    }

    // 使用本地数据创建猜测详情
    private createLocalGuessDetail(
        guessedPokemon: PokemonAttributes,
        answerPokemon: PokemonAttributes,
        attemptNumber: number,
        timestamp: number,
        isCorrect: boolean
    ): pokemonGuess.IPlayerGuessDetail {
        return {
            attemptNumber: attemptNumber,
            pokemonName: guessedPokemon.name,
            status: isCorrect ? pokemonGuess.GuessResultStatus.GUESS_CORRECT : pokemonGuess.GuessResultStatus.GUESS_WRONG,
            timestamp: timestamp,

            // 创建属性比较结果
            type: this.compareAttributes(guessedPokemon.types, answerPokemon.types),
            power: this.compareNumericAttribute(guessedPokemon.power, answerPokemon.power),
            speed: this.compareNumericAttribute(guessedPokemon.speed, answerPokemon.speed),
            attack: this.compareNumericAttribute(guessedPokemon.attack, answerPokemon.attack),
            defense: this.compareNumericAttribute(guessedPokemon.defense, answerPokemon.defense),
            generation: this.compareNumericAttribute(guessedPokemon.generation, answerPokemon.generation),
            shape: this.compareStringAttribute(guessedPokemon.shape, answerPokemon.shape),
            evolution: this.compareStringAttribute(guessedPokemon.evolution, answerPokemon.evolution),
            catchRate: this.compareNumericAttribute(guessedPokemon.catchRate, answerPokemon.catchRate),
            abilities: this.compareAttributes(guessedPokemon.abilities, answerPokemon.abilities),
            eggs: this.compareAttributes(guessedPokemon.eggs, answerPokemon.eggs),
            labels: this.compareAttributes(guessedPokemon.labels, answerPokemon.labels),
            stage: this.compareNumericAttribute(guessedPokemon.stage, answerPokemon.stage),
            color: guessedPokemon.color
        };
    }
    // 从远端API获取猜测详情
    private async getRemoteGuessDetail(
        answerId: string,
        guessName: string,
        attemptNumber: number,
        timestamp: number,
        isCorrect: boolean
    ): Promise<pokemonGuess.IPlayerGuessDetail> {
        try {
            // 构建API URL
            const apiUrl = `http://1.14.255.210:9000/guess?answer=${parseInt(answerId) - 1}&guess=${encodeURIComponent(guessName)}`;
            console.log(`[PokemonGuessRoom] 调用远端API: ${apiUrl}`);
            console.log(`[PokemonGuessRoom] 参数详情 - 答案ID: ${answerId}, 猜测名称: ${guessName}, 尝试次数: ${attemptNumber}, 是否正确: ${isCorrect}`);

            // 发起HTTP请求
            console.log(`[PokemonGuessRoom] 开始发送HTTP请求...`);
            const response = await axios.get(apiUrl);
            console.log(`[PokemonGuessRoom] HTTP请求成功，状态码: ${response.status}`);
            const apiData = response.data;

            console.log(`[PokemonGuessRoom] 远端API返回数据:`, JSON.stringify(apiData, null, 2));

            // 构造返回结果
            const result: pokemonGuess.IPlayerGuessDetail = {
                attemptNumber: attemptNumber,
                pokemonName: guessName,
                status: isCorrect ? pokemonGuess.GuessResultStatus.GUESS_CORRECT : pokemonGuess.GuessResultStatus.GUESS_WRONG,
                timestamp: timestamp
            };
            console.log(`[PokemonGuessRoom] 创建基础结果对象，状态: ${result.status}`);

            // 处理API返回的比较结果 (根据实际API返回格式调整)
            if (apiData) {
                console.log(`[PokemonGuessRoom] 开始处理API返回数据...`);

                // 处理类型属性
                if (apiData.type && Array.isArray(apiData.type)) {
                    result.type = apiData.type.map((item: any) => ({
                        key: item.key || "",
                        value: item.value || "False",
                        distance: "far"
                    }));
                    if (result.type) {
                        console.log(`[PokemonGuessRoom] 设置type属性: ${result.type.length}个元素`);
                    }
                }

                // 处理能力值属性
                if (apiData.pow) {
                    result.power = {
                        key: apiData.pow.key?.toString() || "",
                        value: apiData.pow.value || "low",
                        distance: apiData.pow.dis || "far"
                    };
                    if (result.power) {
                        console.log(`[PokemonGuessRoom] 设置power属性: ${result.power.key}, ${result.power.value}, ${result.power.distance}`);
                    }
                }

                // 处理速度属性
                if (apiData.speed) {
                    result.speed = {
                        key: apiData.speed.key?.toString() || "",
                        value: apiData.speed.value || "low",
                        distance: apiData.speed.dis || "far"
                    };
                    if (result.speed) {
                        console.log(`[PokemonGuessRoom] 设置speed属性: ${result.speed.key}, ${result.speed.value}, ${result.speed.distance}`);
                    }
                }

                // 处理攻击属性
                if (apiData.attack) {
                    result.attack = {
                        key: apiData.attack.key?.toString() || "",
                        value: apiData.attack.value || "False",
                        distance: "far"
                    };
                    if (result.attack) {
                        console.log(`[PokemonGuessRoom] 设置attack属性: ${result.attack.key}, ${result.attack.value}, ${result.attack.distance}`);
                    }
                }

                // 处理防御属性
                if (apiData.defense) {
                    result.defense = {
                        key: apiData.defense.key?.toString() || "",
                        value: apiData.defense.value || "False",
                        distance: "far"
                    };
                    if (result.defense) {
                        console.log(`[PokemonGuessRoom] 设置defense属性: ${result.defense.key}, ${result.defense.value}, ${result.defense.distance}`);
                    }
                }

                // 处理世代属性
                if (apiData.gen) {
                    result.generation = {
                        key: apiData.gen.key?.toString() || "",
                        value: apiData.gen.value || "high",
                        distance: apiData.gen.dis || "near"
                    };
                    if (result.generation) {
                        console.log(`[PokemonGuessRoom] 设置generation属性: ${result.generation.key}, ${result.generation.value}, ${result.generation.distance}`);
                    }
                }

                // 处理形态属性
                if (apiData.shape) {
                    result.shape = {
                        key: apiData.shape.key?.toString() || "",
                        value: apiData.shape.value || "False",
                        distance: "far"
                    };
                    if (result.shape) {
                        console.log(`[PokemonGuessRoom] 设置shape属性: ${result.shape.key}, ${result.shape.value}, ${result.shape.distance}`);
                    }
                }

                // 处理进化属性
                if (apiData.evo) {
                    result.evolution = {
                        key: apiData.evo.key?.toString() || "",
                        value: apiData.evo.value || "equiv",
                        distance: "far"
                    };
                    if (result.evolution) {
                        console.log(`[PokemonGuessRoom] 设置evolution属性: ${result.evolution.key}, ${result.evolution.value}, ${result.evolution.distance}`);
                    }
                }

                // 处理捕获率属性
                if (apiData.catrate) {
                    result.catchRate = {
                        key: apiData.catrate.key?.toString() || "",
                        value: apiData.catrate.value || "equiv",
                        distance: "far"
                    };
                    if (result.catchRate) {
                        console.log(`[PokemonGuessRoom] 设置catchRate属性: ${result.catchRate.key}, ${result.catchRate.value}, ${result.catchRate.distance}`);
                    }
                }

                // 处理特性属性
                if (apiData.ability && Array.isArray(apiData.ability)) {
                    result.abilities = apiData.ability.map((item: any) => ({
                        key: item.key || "",
                        value: item.value || "False",
                        distance: "far"
                    }));
                    if (result.abilities) {
                        console.log(`[PokemonGuessRoom] 设置abilities属性: ${result.abilities.length}个元素`);
                    }
                }

                // 处理蛋组属性
                if (apiData.egg && Array.isArray(apiData.egg)) {
                    result.eggs = apiData.egg.map((item: any) => ({
                        key: item.key || "",
                        value: item.value || "False",
                        distance: "far"
                    }));
                    if (result.eggs) {
                        console.log(`[PokemonGuessRoom] 设置eggs属性: ${result.eggs.length}个元素`);
                    }
                }

                // 处理标签属性
                if (apiData.label && Array.isArray(apiData.label)) {
                    result.labels = apiData.label.map((item: any) => ({
                        key: item.key || "",
                        value: item.value || "False",
                        distance: "far"
                    }));
                    if (result.labels) {
                        console.log(`[PokemonGuessRoom] 设置labels属性: ${result.labels.length}个元素`);
                    }
                }

                // 处理进化阶段属性
                if (apiData.stage) {
                    result.stage = {
                        key: apiData.stage.key?.toString() || "",
                        value: apiData.stage.value || "False",
                        distance: "far"
                    };
                    if (result.stage) {
                        console.log(`[PokemonGuessRoom] 设置stage属性: ${result.stage.key}, ${result.stage.value}, ${result.stage.distance}`);
                    }
                }

                // 处理颜色属性
                if (apiData.col) {
                    result.color = apiData.col.key?.toString() || "";
                    console.log(`[PokemonGuessRoom] 设置color属性: ${result.color}`);
                }
            } else {
                console.log(`[PokemonGuessRoom] API返回数据为空`);
            }

            console.log(`[PokemonGuessRoom] 最终生成的猜测详情:`, JSON.stringify(result, (key, value) =>
                key === 'toJSON' ? undefined : value, 2));
            return result;
        } catch (error: unknown) {
            console.error(`[PokemonGuessRoom] 远端API调用失败:`, error);
            if (error instanceof Error) {
                console.error(`[PokemonGuessRoom] 错误详情: ${error.message}`);
            }
            if (typeof error === 'object' && error !== null && 'response' in error) {
                const axiosError = error as { response?: { status?: number, data?: unknown } };
                if (axiosError.response) {
                    console.error(`[PokemonGuessRoom] 响应状态: ${axiosError.response.status}`);
                    console.error(`[PokemonGuessRoom] 响应数据: ${JSON.stringify(axiosError.response.data)}`);
                }
            }
            throw error; // 抛出错误给上层处理
        }
    }

    // 开始游戏
    private startGame() {
        console.log("[PokemonGuessRoom] 开始游戏");

        // 重置所有玩家状态
        for (const player of this.gameState.players.values()) {
            player.status = pokemonGuess.PlayerStatus.ACTIVE;
            player.attemptsUsed = 0;
            player.guessHistory = [];
        }

        for (const playerDetail of this.gameState.playerDetails.values()) {
            playerDetail.status = pokemonGuess.PlayerStatus.ACTIVE;
            playerDetail.attemptsUsed = 0;
            playerDetail.guessDetails = [];
        }

        // 选择答案
        this.selectRandomAnswer();

        // 更新游戏状态
        this.gameState.state = pokemonGuess.GameState.IN_PROGRESS;
        this.gameState.startTimestamp = Date.now();

        // 如果设置了时间限制，创建定时器
        if (this.gameState.settings.timeLimitSeconds && this.gameState.settings.timeLimitSeconds > 0) {
            this.startGameTimer();
        }

        // 创建游戏开始通知
        const notifyGameStarted = pokemonGuess.NotifyGameStarted.encode({
            settings: this.gameState.settings,
            startTimestamp: this.gameState.startTimestamp,
            players: Array.from(this.gameState.players.values())
        }).finish();

        // 广播游戏开始通知
        this.broadcastPacket(pokemonGuess.ProtocolNumber.NOTIFY_GAME_STARTED, 0, notifyGameStarted);

        // 广播游戏状态同步
        this.broadcastGameState(0);
    }

    // 结束游戏
    private endGame() {
        console.log("[PokemonGuessRoom] 结束游戏");

        // 清理游戏计时器
        if (this.gameTimerId) {
            clearTimeout(this.gameTimerId);
            this.gameTimerId = null;
        }

        // 计算玩家排名
        const rankings = this.calculateRankings();

        // 更新游戏状态
        this.gameState.state = pokemonGuess.GameState.ENDED;

        // 创建游戏结束通知
        const notifyGameEnded = pokemonGuess.NotifyGameEnded.encode({
            answerId: this.gameState.answerPokemon?.id || "",
            answerName: this.gameState.answerPokemon?.name || "",
            rankings: rankings,
            nextState: pokemonGuess.GameState.WAITING
        }).finish();

        // 广播游戏结束通知
        this.broadcastPacket(pokemonGuess.ProtocolNumber.NOTIFY_GAME_ENDED, 0, notifyGameEnded);

        // 延迟重置游戏状态
        setTimeout(() => {
            this.resetGameState();
            // 广播游戏状态同步
            this.broadcastGameState(0);
        }, 5000);
    }

    // 选择随机答案
    private selectRandomAnswer() {
        // 解析宝可梦范围
        const range = this.parsePokemonRange(this.gameState.settings.pokemonRange || "1-151");

        // 从范围内随机选择一个宝可梦作为答案
        const validPokemonIds = Array.from(this.pokemonData.keys())
            .filter(id => {
                const numId = parseInt(id);
                return numId >= range.min && numId <= range.max;
            });

        if (validPokemonIds.length === 0) {
            // 如果范围无效，从所有宝可梦中选择
            const allPokemonIds = Array.from(this.pokemonData.keys());
            const randomId = allPokemonIds[Math.floor(Math.random() * allPokemonIds.length)];
            this.gameState.answerPokemon = this.pokemonData.get(randomId) || null;
        } else {
            // 从有效范围内随机选择
            const randomId = validPokemonIds[Math.floor(Math.random() * validPokemonIds.length)];
            this.gameState.answerPokemon = this.pokemonData.get(randomId) || null;
        }

        console.log(`[PokemonGuessRoom] 选择的答案: ${this.gameState.answerPokemon?.name} (ID: ${this.gameState.answerPokemon?.id})`);
    }

    // 解析宝可梦范围设置
    private parsePokemonRange(rangeStr: string): { min: number, max: number } {
        const defaultRange = { min: 1, max: this.pokemonData.size };

        if (!rangeStr || rangeStr === "all") {
            return defaultRange;
        }

        // 解析"gen1", "gen2"等
        if (rangeStr.startsWith("gen")) {
            const gen = parseInt(rangeStr.substring(3));
            if (isNaN(gen) || gen < 1 || gen > 9) {
                return defaultRange;
            }

            // 简单映射世代到ID范围
            const genRanges: { [key: number]: { min: number, max: number } } = {
                1: { min: 1, max: 151 },
                2: { min: 152, max: 251 },
                3: { min: 252, max: 386 },
                4: { min: 387, max: 493 },
                5: { min: 494, max: 649 },
                6: { min: 650, max: 721 },
                7: { min: 722, max: 809 },
                8: { min: 810, max: 898 },
                9: { min: 899, max: 1010 }
            };

            return genRanges[gen] || defaultRange;
        }

        // 解析数字范围 "1-151"
        const parts = rangeStr.split("-");
        if (parts.length === 2) {
            const min = parseInt(parts[0]);
            const max = parseInt(parts[1]);

            if (!isNaN(min) && !isNaN(max) && min > 0 && max >= min && max <= this.pokemonData.size) {
                return { min, max };
            }
        }

        return defaultRange;
    }

    // 启动游戏计时器
    private startGameTimer() {
        // 清理现有定时器
        if (this.gameTimerId) {
            clearTimeout(this.gameTimerId);
        }

        // 设置新定时器
        const timeLimit = (this.gameState.settings.timeLimitSeconds || 0) * 1000;
        this.gameTimerId = setTimeout(() => {
            console.log("[PokemonGuessRoom] 游戏时间到，自动结束游戏");
            this.endGame();
        }, timeLimit);
    }

    // 计划游戏结束
    private scheduleGameEnd() {
        // 5秒后结束游戏
        setTimeout(() => {
            this.endGame();
        }, 5000);
    }

    // 检查游戏是否应该结束
    private checkGameEnd() {
        // 游戏必须在进行中
        if (this.gameState.state !== pokemonGuess.GameState.IN_PROGRESS) {
            return;
        }

        let allFinished = true;
        let hasPlayer = false;

        // 检查所有玩家状态
        for (const player of this.gameState.players.values()) {
            // 跳过断开连接的玩家
            if (player.status === pokemonGuess.PlayerStatus.DISCONNECTED) {
                continue;
            }

            hasPlayer = true;

            // 如果有任何玩家仍在激活状态，游戏继续
            if (player.status === pokemonGuess.PlayerStatus.ACTIVE) {
                allFinished = false;
                break;
            }
        }

        // 如果所有玩家都完成了，或者没有活跃玩家，结束游戏
        if ((allFinished && hasPlayer) || !hasPlayer) {
            this.endGame();
        }
    }

    // 重置游戏状态
    private resetGameState() {
        this.gameState.state = pokemonGuess.GameState.WAITING;
        this.gameState.startTimestamp = 0;
        this.gameState.answerPokemon = null;

        // 重置玩家状态
        for (const player of this.gameState.players.values()) {
            // 只重置非断开连接的玩家
            if (player.status !== pokemonGuess.PlayerStatus.DISCONNECTED) {
                player.status = pokemonGuess.PlayerStatus.ACTIVE;
                player.attemptsUsed = 0;
                player.guessHistory = [];
            }
        }

        for (const playerDetail of this.gameState.playerDetails.values()) {
            // 只重置非断开连接的玩家
            if (playerDetail.status !== pokemonGuess.PlayerStatus.DISCONNECTED) {
                playerDetail.status = pokemonGuess.PlayerStatus.ACTIVE;
                playerDetail.attemptsUsed = 0;
                playerDetail.guessDetails = [];
            }
        }
    }

    // 计算玩家排名
    private calculateRankings(): pokemonGuess.IPlayerRank[] {
        const rankings: pokemonGuess.IPlayerRank[] = [];

        // 收集所有非断开连接的玩家
        for (const [playerId, player] of this.gameState.players.entries()) {
            if (player.status === pokemonGuess.PlayerStatus.DISCONNECTED) {
                continue;
            }

            // 计算时间（秒）
            let timeUsed = 0;
            if (player.status === pokemonGuess.PlayerStatus.FOUND_ANSWER && player.guessHistory && player.guessHistory.length > 0) {
                const lastGuess = player.guessHistory[player.guessHistory.length - 1];
                if (lastGuess.timestamp !== undefined && lastGuess.timestamp !== null) {
                    // 确保timestamp被当作数字处理
                    timeUsed = Math.floor((Number(lastGuess.timestamp) - this.gameState.startTimestamp) / 1000);
                }
            } else {
                timeUsed = Math.floor((Date.now() - this.gameState.startTimestamp) / 1000);
            }

            // 计算得分
            let score = 0;
            if (player.status === pokemonGuess.PlayerStatus.FOUND_ANSWER) {
                // 答对的玩家得分 = 10000 - 尝试次数*1000 - 用时（秒）
                score = 10000 - ((player.attemptsUsed || 0) * 1000) - timeUsed;
            } else if (player.status === pokemonGuess.PlayerStatus.OUT_OF_ATTEMPTS) {
                // 用完次数的玩家得分 = 1000 - 用时（秒）
                score = 1000 - timeUsed;
            } else if (player.status === pokemonGuess.PlayerStatus.GAVE_UP) {
                // 放弃的玩家得分 = 500 - 用时（秒）
                score = 500 - timeUsed;
            }
            score = Math.max(0, score); // 确保得分不为负

            rankings.push({
                playerId: playerId,
                nickname: player.nickname || "",
                attemptsUsed: player.attemptsUsed || 0,
                timeUsedSeconds: timeUsed,
                finalStatus: player.status || pokemonGuess.PlayerStatus.ACTIVE,
                score: score,
                rank: 0
            });
        }

        // 按得分排序，确保score不是null或undefined
        rankings.sort((a, b) => {
            const scoreA = a.score || 0;
            const scoreB = b.score || 0;
            return scoreB - scoreA;
        });

        // 分配排名
        for (let i = 0; i < rankings.length; i++) {
            rankings[i].rank = i + 1;
        }

        return rankings;
    }

    // 比较属性并生成比较结果
    private compareAttributes(guessed: string[], answer: string[]): pokemonGuess.AttributeComparison[] {
        const result: pokemonGuess.AttributeComparison[] = [];

        // 检查每个猜测的属性
        for (const attr of guessed) {
            const isCorrect = answer.includes(attr);
            result.push({
                key: attr,
                value: isCorrect ? "True" : "False",
                distance: isCorrect ? "exact" : "far",
                toJSON: function () { return { key: this.key, value: this.value, distance: this.distance }; }
            });
        }

        return result;
    }

    // 比较数值属性并生成比较结果
    private compareNumericAttribute(guessed: number, answer: number): pokemonGuess.AttributeComparison {
        let distance = "far";

        // 计算差异百分比
        const diff = Math.abs(guessed - answer) / Math.max(answer, 1) * 100;

        if (guessed === answer) {
            distance = "exact";
        } else if (diff <= 20) {
            distance = "close";
        }

        return {
            key: guessed.toString(),
            value: guessed === answer ? "True" : "False",
            distance: distance,
            toJSON: function () { return { key: this.key, value: this.value, distance: this.distance }; }
        };
    }

    // 比较字符串属性并生成比较结果
    private compareStringAttribute(guessed: string, answer: string): pokemonGuess.AttributeComparison {
        return {
            key: guessed,
            value: guessed === answer ? "True" : "False",
            distance: guessed === answer ? "exact" : "far",
            toJSON: function () { return { key: this.key, value: this.value, distance: this.distance }; }
        };
    }

    // 处理结束游戏请求
    private handleReqEndGame(client: Client, seqId: number, data: any) {
        const userId = this.getUserIdFromSession(client);
        if (!userId) return;

        const reqEndGame = pokemonGuess.ReqEndGame.decode(data);
        console.log(`[PokemonGuessRoom] 玩家 ${userId} 请求结束游戏，是否放弃: ${reqEndGame.isGivingUp}`);

        // 如果是房主直接结束游戏
        const isHost = userId === this.gameState.hostId;

        // 如果是放弃且游戏正在进行中
        if (reqEndGame.isGivingUp && this.gameState.state === pokemonGuess.GameState.IN_PROGRESS) {
            // 更新玩家状态为放弃
            const playerInfo = this.gameState.players.get(userId);
            const playerDetailInfo = this.gameState.playerDetails.get(userId);

            if (playerInfo && playerDetailInfo) {
                playerInfo.status = pokemonGuess.PlayerStatus.GAVE_UP;
                playerDetailInfo.status = pokemonGuess.PlayerStatus.GAVE_UP;

                // 添加放弃记录
                const guessSummary: pokemonGuess.IGuessResultSummary = {
                    attemptNumber: (playerInfo.attemptsUsed || 0) + 1,
                    status: pokemonGuess.GuessResultStatus.GUESS_GAVE_UP,
                    timestamp: Date.now()
                };

                if (!playerInfo.guessHistory) {
                    playerInfo.guessHistory = [];
                }
                playerInfo.guessHistory.push(guessSummary);

                if (!playerDetailInfo.guessDetails) {
                    playerDetailInfo.guessDetails = [];
                }
                playerDetailInfo.guessDetails.push({
                    attemptNumber: (playerInfo.attemptsUsed || 0) + 1,
                    pokemonName: "放弃",
                    status: pokemonGuess.GuessResultStatus.GUESS_GAVE_UP,
                    timestamp: Date.now()
                });

                // 广播游戏状态更新
                this.broadcastGameState(3, userId);

                // 发送玩家详细信息更新（仅给玩家本人）
                this.sendPlayerDetail(client, userId);

                // 检查游戏是否已结束
                this.checkGameEnd();
            }
        }
        // 如果是房主请求结束游戏
        else if (isHost) {
            this.endGame();
        }

        // 发送结束游戏响应
        const responseData = pokemonGuess.ResEndGame.encode({
            success: true,
            errorMessage: ""
        }).finish();

        this.sendPacket(client, pokemonGuess.ProtocolNumber.RES_END_GAME, seqId, responseData);
    }
} 