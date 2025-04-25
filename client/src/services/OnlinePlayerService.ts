import { EventEmitter } from 'events';
import SYSTEM_CONFIG from '../core/config/SYSTEM_CONFIG';
import { RoomModule } from '../network/RoomModule';
import { Common, OnlinePlayer, match } from '../proto/combined';
import { UserManager } from '../user/UserManager';

// Protocol numbers from proto files
export enum MatchProtocol {
    REQ_JOIN_MATCH = 3001,
    RES_JOIN_MATCH = 3002,
    REQ_CANCEL_MATCH = 3003,
    RES_CANCEL_MATCH = 3004,
    NOTIFY_MATCH_SUCCESS = 3005
}

export enum OnlinePlayerProtocol {
    REQ_ONLINE_PLAYERS = 1,
    RES_ONLINE_PLAYERS = 2,
    REQ_UPDATE_QUESTIONS = 3,
    RES_UPDATE_QUESTIONS = 4,
    REQ_SEND_LOG = 5,
    RES_SEND_LOG = 6,
    REQ_RECEIVE_LOG = 7,
    RES_RECEIVE_LOG = 8,
    NOTIFY_RECEIVE_LOG = 9,
    REQ_EVAL_CODE = 10,
    RES_EVAL_CODE = 11,
    NOTIFY_EVAL_CODE = 12
}

// Data interfaces
export interface PlayerInfo {
    playerId: string;
    nickname: string;
    avatar: string;
    gender?: string;
}

export interface MatchInfo {
    matchId: string;
    roomId: string;
    players: PlayerInfo[];
}

export class OnlinePlayerService {
    private static instance: OnlinePlayerService;
    private roomModule: RoomModule | null = null;
    private eventEmitter: EventEmitter;
    private currentMatchId: string | null = null;
    private matchmaking: boolean = false;
    private onlinePlayerList: Common.IPlayerInfo[] = [];
    private connected: boolean = false;
    private enableLogging: boolean = true; // 是否启用日志记录

    // 防重入锁
    private connectingInProgress: boolean = false;
    private matchmakingInProgress: boolean = false;
    private cancelMatchInProgress: boolean = false;
    private pendingOperations: Map<string, boolean> = new Map();

    private constructor() {
        this.eventEmitter = new EventEmitter();
    }

    public static getInstance(): OnlinePlayerService {
        if (!OnlinePlayerService.instance) {
            OnlinePlayerService.instance = new OnlinePlayerService();
        }
        return OnlinePlayerService.instance;
    }

    /**
     * 启用或禁用包日志记录
     * @param enable 是否启用日志
     */
    public setLoggingEnabled(enable: boolean): void {
        this.enableLogging = enable;
    }

    /**
     * 检查操作是否正在进行中
     * @param operationKey 操作的唯一标识符
     * @returns 如果操作正在进行则返回true，否则返回false
     */
    private isOperationInProgress(operationKey: string): boolean {
        return this.pendingOperations.get(operationKey) === true;
    }

    /**
     * 设置操作状态
     * @param operationKey 操作的唯一标识符
     * @param inProgress 是否正在进行中
     */
    private setOperationStatus(operationKey: string, inProgress: boolean): void {
        if (inProgress) {
            this.pendingOperations.set(operationKey, true);
        } else {
            this.pendingOperations.delete(operationKey);
        }
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
                console.group(`🚀 [Client] 发送包体 CMD:${commandId}`);
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
                    console.group(`📥 [Client] 接收响应 CMD:${commandId}`);
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
                // OnlinePlayer协议
                case OnlinePlayerProtocol.REQ_ONLINE_PLAYERS:
                    console.log("包体类型: 请求在线玩家列表");
                    console.log("数据内容:", OnlinePlayer.ReqOnlinePlayers.decode(data));
                    break;
                case OnlinePlayerProtocol.RES_ONLINE_PLAYERS:
                    console.log("包体类型: 在线玩家列表响应");
                    console.log("数据内容:", OnlinePlayer.ResOnlinePlayers.decode(data));
                    break;
                case OnlinePlayerProtocol.REQ_SEND_LOG:
                    console.log("包体类型: 发送日志请求");
                    console.log("数据内容:", OnlinePlayer.ReqSendLog.decode(data));
                    break;
                case OnlinePlayerProtocol.RES_SEND_LOG:
                    console.log("包体类型: 发送日志响应");
                    console.log("数据内容:", OnlinePlayer.ResSendLog.decode(data));
                    break;
                case OnlinePlayerProtocol.REQ_RECEIVE_LOG:
                    console.log("包体类型: 接收日志请求");
                    console.log("数据内容:", OnlinePlayer.ReqReceiveLog.decode(data));
                    break;
                case OnlinePlayerProtocol.RES_RECEIVE_LOG:
                    console.log("包体类型: 接收日志响应");
                    console.log("数据内容:", OnlinePlayer.ResReceiveLog.decode(data));
                    break;
                case OnlinePlayerProtocol.NOTIFY_RECEIVE_LOG:
                    console.log("包体类型: 日志接收通知");
                    console.log("数据内容:", OnlinePlayer.NotifyReceiveLog.decode(data));
                    break;
                case OnlinePlayerProtocol.REQ_EVAL_CODE:
                    console.log("包体类型: 代码评估请求");
                    console.log("数据内容:", OnlinePlayer.ReqEvalCode.decode(data));
                    break;
                case OnlinePlayerProtocol.RES_EVAL_CODE:
                    console.log("包体类型: 代码评估响应");
                    console.log("数据内容:", OnlinePlayer.ResEvalCode.decode(data));
                    break;
                case OnlinePlayerProtocol.NOTIFY_EVAL_CODE:
                    console.log("包体类型: 代码评估通知");
                    console.log("数据内容:", OnlinePlayer.NotifyEvalCode.decode(data));
                    break;

                // MatchProtocol协议
                case MatchProtocol.REQ_JOIN_MATCH:
                    console.log("包体类型: 加入匹配请求");
                    console.log("数据内容:", match.ReqJoinMatch.decode(data));
                    break;
                case MatchProtocol.RES_JOIN_MATCH:
                    console.log("包体类型: 加入匹配响应");
                    console.log("数据内容:", match.ResJoinMatch.decode(data));
                    break;
                case MatchProtocol.REQ_CANCEL_MATCH:
                    console.log("包体类型: 取消匹配请求");
                    console.log("数据内容:", match.ReqCancelMatch.decode(data));
                    break;
                case MatchProtocol.RES_CANCEL_MATCH:
                    console.log("包体类型: 取消匹配响应");
                    console.log("数据内容:", match.ResCancelMatch.decode(data));
                    break;
                case MatchProtocol.NOTIFY_MATCH_SUCCESS:
                    console.log("包体类型: 匹配成功通知");
                    console.log("数据内容:", match.NotifyMatchSuccess.decode(data));
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
     * Connect to the game server
     * @param url Server URL
     * @param roomId Room ID to join
     * @param forced Force reconnection even if already connected
     * @returns Promise resolving to connection success (true) or failure (false)
     */
    public async connect(url: string = SYSTEM_CONFIG.SERVER.DEFAULT_URL, roomId: string = SYSTEM_CONFIG.GAME.DEFAULT_ROOM, forced: boolean = false): Promise<boolean> {
        // 防重入检查
        const operationKey = `connect:${url}:${roomId}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('Connect operation already in progress, ignoring duplicate request');
            return false;
        }

        if (this.connected && !forced) {
            return true;
        }

        try {
            this.setOperationStatus(operationKey, true);

            // Initialize RoomModule if not already done
            if (!this.roomModule) {
                this.roomModule = new RoomModule();
            }

            const success = await this.roomModule.join(url, roomId, forced);
            if (success) {
                this.connected = true;
                this.setupEventListeners();

                // 保存最后连接的URL和房间ID，以便于重连使用
                localStorage.setItem('last_server_url', url);
                localStorage.setItem('last_room_id', roomId);

                // Emit connection status change event
                this.eventEmitter.emit('connection_status', true);
            }
            return success;
        } catch (error) {
            console.error('Failed to connect to server:', error);
            this.connected = false;
            // Emit connection status change event
            this.eventEmitter.emit('connection_status', false);
            return false;
        } finally {
            this.setOperationStatus(operationKey, false);
        }
    }

    /**
     * Check if connected to the server
     * @returns true if connected, false otherwise
     */
    public isConnected(): boolean {
        return this.connected;
    }

    /**
     * Disconnect from the server
     */
    public disconnect(): void {
        if (this.roomModule) {
            this.roomModule.disconnect();
        }
        const wasConnected = this.connected;
        this.connected = false;
        this.currentMatchId = null;
        this.matchmaking = false;
        // 清除所有锁
        this.pendingOperations.clear();

        // Only emit if there was a change in connection status
        if (wasConnected) {
            this.eventEmitter.emit('connection_status', false);
        }
    }

    /**
     * Get the current room ID
     * @returns string or empty string if not connected
     */
    public getRoomId(): string {
        return this.roomModule?.getRoomId() || '';
    }

    private setupEventListeners(): void {
        if (!this.roomModule) {
            console.error('Cannot setup event listeners: RoomModule is not initialized');
            return;
        }

        // Add notification recording wrapper
        const addLoggingNotificationCallback = (commandId: number, handler: (data: any) => void) => {
            this.roomModule!.addNotificationCallback(commandId, (data: any) => {
                if (this.enableLogging) {
                    try {
                        console.group(`📥 [Client] 接收通知 CMD:${commandId}`);
                        console.log("原始数据:", Array.from(data).map(b => (b as number).toString(16).padStart(2, '0')).join(''));
                        this.logPacketByCommandId(commandId, data, "接收");
                        console.groupEnd();
                    } catch (error) {
                        console.error('Error logging notification packet:', error);
                    }
                }
                handler(data);
            });
        };

        // Listen for match success notifications
        addLoggingNotificationCallback(MatchProtocol.NOTIFY_MATCH_SUCCESS, (data) => {
            try {
                // Decode the notification using Protocol Buffers
                const matchSuccess = match.NotifyMatchSuccess.decode(data);
                this.currentMatchId = null;
                this.matchmaking = false;

                // Create a match info object from the proto message
                const matchInfo: MatchInfo = {
                    matchId: matchSuccess.matchId,
                    roomId: matchSuccess.roomId,
                    players: matchSuccess.players?.map(player => ({
                        playerId: player.playerId || '',
                        nickname: player.nickname || '',
                        avatar: player.avatar || '',
                        gender: player.gender || undefined
                    })) || []
                };

                this.eventEmitter.emit('matchSuccess', matchInfo);
            } catch (error) {
                console.error('Error processing match success notification:', error);
            }
        });

        // Listen for log notifications
        addLoggingNotificationCallback(OnlinePlayerProtocol.NOTIFY_RECEIVE_LOG, (data) => {
            try {
                const logInfo = OnlinePlayer.NotifyReceiveLog.decode(data);
                this.eventEmitter.emit('logReceived', logInfo.playerId, logInfo.log);
            } catch (error) {
                console.error('Error processing log notification:', error);
            }
        });

        // Listen for code evaluation notifications
        addLoggingNotificationCallback(OnlinePlayerProtocol.NOTIFY_EVAL_CODE, (data) => {
            try {
                const evalCode = OnlinePlayer.NotifyEvalCode.decode(data);
                this.eventEmitter.emit('codeEvaluation', evalCode.code, evalCode.result);
            } catch (error) {
                console.error('Error processing code evaluation notification:', error);
            }
        });

        // Connect to UserManager to sync player info
        const userManager = UserManager.getInstance();
        userManager.onUserInfoUpdated(this.handleUserInfoUpdated.bind(this));

        // Initial player info sync
        this.handleUserInfoUpdated(userManager.getUserInfo());
    }

    /**
     * Handle user information updates from UserManager
     * @param userInfo Updated user information
     */
    private handleUserInfoUpdated(userInfo: any): void {
        // Convert UserManager's UserInfo to PlayerInfo format
        const playerInfo: Common.IPlayerInfo = {
            playerId: userInfo.userId,
            nickname: userInfo.nickname,
            avatar: userInfo.avatar ? userInfo.avatar.toString() : "1",
            gender: userInfo.gender === 'male' ? "1" : userInfo.gender === 'female' ? "2" : "0"
        };

        // Emit player_info_updated event
        this.eventEmitter.emit('player_info_updated', playerInfo);
    }

    /**
     * Get current player information
     * @returns Current player information
     */
    public getPlayerInfo(): Common.IPlayerInfo {
        const userManager = UserManager.getInstance();
        const userInfo = userManager.getUserInfo();

        return {
            playerId: userInfo.userId,
            nickname: userInfo.nickname,
            avatar: userInfo.avatar ? userInfo.avatar.toString() : "1",
            gender: userInfo.gender === 'male' ? "1" : userInfo.gender === 'female' ? "2" : "0"
        };
    }

    /**
     * Update player information
     * @param info Updated player information
     */
    public updatePlayerInfo(info: Common.IPlayerInfo): void {
        const userManager = UserManager.getInstance();

        // Update user manager with new values
        if (info.nickname) {
            userManager.setNickname(info.nickname);
        }

        if (info.avatar !== undefined && info.avatar !== null) {
            // Avatar is already a string in Common.IPlayerInfo
            userManager.setAvatar(info.avatar);
        }

        if (info.gender !== undefined && info.gender !== null) {
            // Convert gender string to UserManager format
            let genderStr = 'unknown';
            if (info.gender === "1") {
                genderStr = 'male';
            } else if (info.gender === "2") {
                genderStr = 'female';
            }
            userManager.setGender(genderStr);
        }

        // UserManager will emit userInfoUpdated event, which we listen to in setupEventListeners
    }

    // Online Players Methods
    public getOnlinePlayers(count: number = 10, force: boolean = false): Promise<Common.IPlayerInfo[]> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        // 防重入检查
        const operationKey = `getOnlinePlayers:${count}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('GetOnlinePlayers operation already in progress, returning cached list');
            return Promise.resolve(this.onlinePlayerList);
        }

        if (!force && this.onlinePlayerList.length > 0) {
            return Promise.resolve(this.onlinePlayerList);
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);

            // Create and encode request using Protocol Buffers
            const reqOnlinePlayers = OnlinePlayer.ReqOnlinePlayers.create({
                playerCount: count
            });

            const encodedRequest = OnlinePlayer.ReqOnlinePlayers.encode(reqOnlinePlayers).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                OnlinePlayerProtocol.REQ_ONLINE_PLAYERS,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resOnlinePlayers = OnlinePlayer.ResOnlinePlayers.decode(response.data);
                        this.onlinePlayerList = resOnlinePlayers.players || [];
                        resolve(this.onlinePlayerList);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    // Match-making Methods
    public joinMatch(gameMode: string = 'standard'): Promise<string> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        if (this.matchmaking) {
            return Promise.reject(new Error('Already in matchmaking queue'));
        }

        // 防重入检查
        const operationKey = `joinMatch:${gameMode}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('JoinMatch operation already in progress, ignoring duplicate request');
            return Promise.reject(new Error('Join match operation already in progress'));
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);
            const userManager = UserManager.getInstance();

            // Create and encode request using Protocol Buffers
            const reqJoinMatch = match.ReqJoinMatch.create({
                userId: userManager.getUserId(),
                rank: 0,  // Default rank to 0
                gameMode: gameMode
            });

            const encodedRequest = match.ReqJoinMatch.encode(reqJoinMatch).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                MatchProtocol.REQ_JOIN_MATCH,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resJoinMatch = match.ResJoinMatch.decode(response.data);
                        if (resJoinMatch.success) {
                            this.currentMatchId = resJoinMatch.matchId || '';
                            this.matchmaking = true;
                            resolve(this.currentMatchId);
                        } else {
                            reject(new Error(resJoinMatch.message || 'Failed to join match'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    public cancelMatch(): Promise<boolean> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        if (!this.matchmaking || !this.currentMatchId) {
            return Promise.reject(new Error('Not in matchmaking queue'));
        }

        // 防重入检查
        const operationKey = `cancelMatch:${this.currentMatchId}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('CancelMatch operation already in progress, ignoring duplicate request');
            return Promise.reject(new Error('Cancel match operation already in progress'));
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);

            // Create and encode request using Protocol Buffers
            const reqCancelMatch = match.ReqCancelMatch.create({
                matchId: this.currentMatchId
            });

            const encodedRequest = match.ReqCancelMatch.encode(reqCancelMatch).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                MatchProtocol.REQ_CANCEL_MATCH,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resCancelMatch = match.ResCancelMatch.decode(response.data);
                        if (resCancelMatch.success) {
                            this.currentMatchId = null;
                            this.matchmaking = false;
                            resolve(true);
                        } else {
                            reject(new Error(resCancelMatch.message || 'Failed to cancel match'));
                        }
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    public isMatchmaking(): boolean {
        return this.matchmaking;
    }

    // Log Methods
    public sendLog(log: string): Promise<boolean> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        // 防重入检查
        const operationKey = `sendLog:${Date.now()}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('SendLog operation already in progress, ignoring duplicate request');
            return Promise.reject(new Error('Send log operation already in progress'));
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);

            // Create and encode request using Protocol Buffers
            const reqSendLog = OnlinePlayer.ReqSendLog.create({
                log: log
            });

            const encodedRequest = OnlinePlayer.ReqSendLog.encode(reqSendLog).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                OnlinePlayerProtocol.REQ_SEND_LOG,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resSendLog = OnlinePlayer.ResSendLog.decode(response.data);
                        resolve(resSendLog.success || false);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    public receiveLogsFrom(playerId: string): Promise<boolean> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        // 防重入检查
        const operationKey = `receiveLogsFrom:${playerId}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('ReceiveLogsFrom operation already in progress, ignoring duplicate request');
            return Promise.reject(new Error('Receive logs operation already in progress'));
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);

            // Create and encode request using Protocol Buffers
            const reqReceiveLog = OnlinePlayer.ReqReceiveLog.create({
                playerId: playerId
            });

            const encodedRequest = OnlinePlayer.ReqReceiveLog.encode(reqReceiveLog).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                OnlinePlayerProtocol.REQ_RECEIVE_LOG,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resReceiveLog = OnlinePlayer.ResReceiveLog.decode(response.data);
                        resolve(resReceiveLog.success || false);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    // Code Evaluation Methods
    public sendCodeForEvaluation(playerId: string, code: string): Promise<boolean> {
        if (!this.roomModule || !this.connected) {
            return Promise.reject(new Error('Not connected to server'));
        }

        // 防重入检查
        const operationKey = `sendCodeForEvaluation:${playerId}:${Date.now()}`;
        if (this.isOperationInProgress(operationKey)) {
            console.log('SendCodeForEvaluation operation already in progress, ignoring duplicate request');
            return Promise.reject(new Error('Send code evaluation operation already in progress'));
        }

        return new Promise((resolve, reject) => {
            this.setOperationStatus(operationKey, true);

            // Create and encode request using Protocol Buffers
            const reqEvalCode = OnlinePlayer.ReqEvalCode.create({
                playerId: playerId,
                code: code
            });

            const encodedRequest = OnlinePlayer.ReqEvalCode.encode(reqEvalCode).finish() as unknown as Uint8Array;

            this.sendMessageWithLogging(
                OnlinePlayerProtocol.REQ_EVAL_CODE,
                encodedRequest,
                (response) => {
                    this.setOperationStatus(operationKey, false);

                    if (response.error) {
                        reject(new Error(response.error));
                        return;
                    }

                    try {
                        // Decode response using Protocol Buffers
                        const resEvalCode = OnlinePlayer.ResEvalCode.decode(response.data);
                        resolve(resEvalCode.success || false);
                    } catch (error) {
                        reject(error);
                    }
                }
            );
        });
    }

    // Event Listeners
    public onMatchSuccess(callback: (matchInfo: MatchInfo) => void): void {
        this.eventEmitter.on('matchSuccess', callback);
    }

    public offMatchSuccess(callback: (matchInfo: MatchInfo) => void): void {
        this.eventEmitter.off('matchSuccess', callback);
    }

    public onLogReceived(callback: (playerId: string, log: string) => void): void {
        this.eventEmitter.on('logReceived', callback);
    }

    public offLogReceived(callback: (playerId: string, log: string) => void): void {
        this.eventEmitter.off('logReceived', callback);
    }

    public onCodeEvaluation(callback: (code: string, result?: string) => void): void {
        this.eventEmitter.on('codeEvaluation', callback);
    }

    public offCodeEvaluation(callback: (code: string, result?: string) => void): void {
        this.eventEmitter.off('codeEvaluation', callback);
    }

    /**
     * Add a connection status listener
     * @param callback Function to call when connection status changes
     */
    public addConnectionListener(callback: (connected: boolean) => void): void {
        this.eventEmitter.on('connection_status', callback);
        // Immediately call with current connection status
        callback(this.connected);
    }

    /**
     * Remove a connection status listener
     * @param callback Function to remove from listeners
     */
    public removeConnectionListener(callback: (connected: boolean) => void): void {
        this.eventEmitter.off('connection_status', callback);
    }

    /**
     * Add a general event listener
     * @param event Event name to listen for
     * @param callback Function to call when event occurs
     */
    public addEventListener<T>(event: string, callback: (data: T) => void): void {
        this.eventEmitter.on(event, callback);
    }

    /**
     * Remove a general event listener
     * @param event Event name to stop listening for
     * @param callback Function to remove from listeners
     */
    public removeEventListener<T>(event: string, callback: (data: T) => void): void {
        this.eventEmitter.off(event, callback);
    }
} 