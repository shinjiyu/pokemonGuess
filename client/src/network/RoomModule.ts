import * as Colyseus from "colyseus.js";
import { proto } from "../proto/combined";
import { UserManager } from "../user/UserManager";

/**
 * 日志服务 - 用于记录网络通信内容
 */
export class NetworkLogger {
    private static instance: NetworkLogger;
    private enabled: boolean = true;
    private logLevel: 'debug' | 'info' | 'error' = 'debug';

    private constructor() { }

    public static getInstance(): NetworkLogger {
        if (!NetworkLogger.instance) {
            NetworkLogger.instance = new NetworkLogger();
        }
        return NetworkLogger.instance;
    }

    public setEnabled(enabled: boolean): void {
        this.enabled = enabled;
    }

    public setLogLevel(level: 'debug' | 'info' | 'error'): void {
        this.logLevel = level;
    }

    public debug(message: string, data?: any): void {
        if (this.enabled && (this.logLevel === 'debug')) {
            console.debug(`[Network Debug] ${message}`, data || '');
        }
    }

    public info(message: string, data?: any): void {
        if (this.enabled && (this.logLevel === 'debug' || this.logLevel === 'info')) {
            console.info(`[Network Info] ${message}`, data || '');
        }
    }

    public error(message: string, error?: any): void {
        if (this.enabled) {
            console.error(`[Network Error] ${message}`, error || '');
        }
    }

    public logRequest(commandId: number, sequenceId: number, data: any): void {
        if (this.enabled) {
            console.group(`📤 发送请求 [CMD: ${commandId}, SEQ: ${sequenceId}]`);
            console.info('时间:', new Date().toISOString());
            console.info('命令ID:', commandId);
            console.info('序列号:', sequenceId);
            try {
                console.info('数据:', this.tryParse(data));
            } catch (e) {
                console.info('数据: [二进制数据]');
            }
            console.groupEnd();
        }
    }

    public logResponse(commandId: number, sequenceId: number, data: any, error?: string): void {
        if (this.enabled) {
            console.group(`📥 接收响应 [CMD: ${commandId}, SEQ: ${sequenceId}]${error ? ' ❌' : ' ✅'}`);
            console.info('时间:', new Date().toISOString());
            console.info('命令ID:', commandId);
            console.info('序列号:', sequenceId);
            if (error) {
                console.error('错误:', error);
            }
            try {
                console.info('数据:', this.tryParse(data));
            } catch (e) {
                console.info('数据: [二进制数据]');
            }
            console.groupEnd();
        }
    }

    public logNotification(commandId: number, data: any): void {
        if (this.enabled) {
            console.group(`🔔 接收通知 [CMD: ${commandId}]`);
            console.info('时间:', new Date().toISOString());
            console.info('命令ID:', commandId);
            try {
                console.info('数据:', this.tryParse(data));
            } catch (e) {
                console.info('数据: [二进制数据]');
            }
            console.groupEnd();
        }
    }

    public logConnection(action: 'connect' | 'disconnect' | 'reconnect', url: string, roomId?: string, roomType?: string, success?: boolean): void {
        if (this.enabled) {
            const emoji = success === false ? '❌' : (success === true ? '✅' : '🔄');
            console.group(`${emoji} ${this.getConnectionActionText(action)} [${url}]`);
            console.info('时间:', new Date().toISOString());
            console.info('服务器:', url);
            if (roomId) console.info('房间ID:', roomId);
            if (roomType) console.info('房间类型:', roomType);
            if (success !== undefined) console.info('结果:', success ? '成功' : '失败');
            console.groupEnd();
        }
    }

    private getConnectionActionText(action: 'connect' | 'disconnect' | 'reconnect'): string {
        switch (action) {
            case 'connect': return '连接服务器';
            case 'disconnect': return '断开连接';
            case 'reconnect': return '重新连接';
        }
    }

    private tryParse(data: any): any {
        if (data instanceof Uint8Array) {
            // 尝试解析常见的protobuf消息
            try {
                // 简单显示二进制数据的前20个字节(如果有)
                const preview = data.length > 0
                    ? Array.from(data.slice(0, Math.min(20, data.length)))
                        .map(b => b.toString(16).padStart(2, '0'))
                        .join(' ')
                    : '';
                return `[二进制数据, 长度: ${data.length}字节, 预览: ${preview}...]`;
            } catch (e) {
                return `[二进制数据, 长度: ${data.length}字节]`;
            }
        }
        return data;
    }
}

/**
 * Colyseus客户端单例管理器
 */
export class ClientManager {
    private static instance: ClientManager;
    private client: Colyseus.Client | null = null;
    private serverUrl: string = "";

    private constructor() { }

    public static getInstance(): ClientManager {
        if (!ClientManager.instance) {
            ClientManager.instance = new ClientManager();
        }
        return ClientManager.instance;
    }

    public getClient(url: string): Colyseus.Client {
        // 如果URL变了或客户端不存在，则创建新客户端
        if (this.serverUrl !== url || !this.client) {
            const logger = NetworkLogger.getInstance();
            logger.info(`创建新客户端连接: ${url}`);
            this.client = new Colyseus.Client(`wss://${url}`);
            this.serverUrl = url;
        }
        return this.client;
    }
}

enum RoomState {
    CONNECTING,
    CONNECTED,
    DISCONNECTED,
    RECONNECTING
}

export class RoomModule {
    private room: Colyseus.Room | null = null;
    private state: RoomState;
    private roomType: string = "";

    private sequenceId: number = 1;
    private callbacks: Map<number, (response: any) => void> = new Map();
    private timeoutDuration: number = 5000; // Timeout duration in milliseconds

    private notificationCallbacks: Map<number, (notification: Uint8Array) => void> = new Map();
    private logger: NetworkLogger;

    constructor() {
        this.state = RoomState.DISCONNECTED;
        this.logger = NetworkLogger.getInstance();
    }

    /**
     * 加入现有房间
     * @param url 服务器URL
     * @param roomId 房间ID
     * @param options 额外选项
     * @param forced 是否强制重连
     * @returns 是否成功加入
     */
    public async join(url: string, roomId: string, options: any = {}, forced: boolean = false): Promise<boolean> {
        this.logger.logConnection('connect', url, roomId);

        if (this.state == RoomState.CONNECTED && !forced) {
            this.logger.info('已连接到房间，忽略重复请求');
            return true;
        }

        const client = ClientManager.getInstance().getClient(url);
        this.state = RoomState.CONNECTING;

        try {
            // 合并用户信息与额外选项
            const joinOptions = {
                userId: this.getUserId(),
                nickname: this.getNickname(),
                avatar: this.getAvatar(),
                gender: this.getGender(),
                ...options
            };

            this.logger.info(`加入房间: ${roomId}`, joinOptions);
            const connectPromise = client.joinById(roomId, joinOptions);
            this.room = await this.promiseWithTimeout(connectPromise, this.timeoutDuration, 'Connection timeout');
            this.state = RoomState.CONNECTED;
            this.initProtocols();
            this.logger.logConnection('connect', url, roomId, undefined, true);
            return true;
        } catch (error) {
            this.logger.error(`加入房间失败: ${roomId}`, error);
            this.state = RoomState.DISCONNECTED;
            this.logger.logConnection('connect', url, roomId, undefined, false);
            return false;
        }
    }

    /**
     * 创建并加入房间
     * @param url 服务器URL
     * @param roomType 房间类型
     * @param options 额外选项
     * @returns 是否成功创建并加入
     */
    public async create(url: string, roomType: string, options: any = {}): Promise<boolean> {
        this.logger.logConnection('connect', url, undefined, roomType);

        const client = ClientManager.getInstance().getClient(url);
        this.state = RoomState.CONNECTING;
        this.roomType = roomType;

        try {
            // 合并用户信息与额外选项
            const createOptions = {
                userId: this.getUserId(),
                nickname: this.getNickname(),
                avatar: this.getAvatar(),
                gender: this.getGender(),
                ...options
            };

            this.logger.info(`创建房间: ${roomType}`, createOptions);
            const createPromise = client.create(roomType, createOptions);
            this.room = await this.promiseWithTimeout(createPromise, this.timeoutDuration, 'Create room timeout');
            this.state = RoomState.CONNECTED;
            this.initProtocols();
            this.logger.logConnection('connect', url, this.room.id, roomType, true);
            return true;
        } catch (error) {
            this.logger.error(`创建房间失败: ${roomType}`, error);
            this.state = RoomState.DISCONNECTED;
            this.logger.logConnection('connect', url, undefined, roomType, false);
            return false;
        }
    }

    /**
     * 创建或加入房间
     * @param url 服务器URL
     * @param roomType 房间类型
     * @param options 额外选项
     * @returns 是否成功
     */
    public async joinOrCreate(url: string, roomType: string, options: any = {}): Promise<boolean> {
        this.logger.logConnection('connect', url, undefined, roomType);

        const client = ClientManager.getInstance().getClient(url);
        this.state = RoomState.CONNECTING;
        this.roomType = roomType;

        try {
            // 合并用户信息与额外选项
            const joinOptions = {
                userId: this.getUserId(),
                nickname: this.getNickname(),
                avatar: this.getAvatar(),
                gender: this.getGender(),
                ...options
            };

            this.logger.info(`创建或加入房间: ${roomType}`, joinOptions);
            const joinOrCreatePromise = client.joinOrCreate(roomType, joinOptions);
            this.room = await this.promiseWithTimeout(joinOrCreatePromise, this.timeoutDuration, 'Join or create timeout');
            this.state = RoomState.CONNECTED;
            this.initProtocols();
            this.logger.logConnection('connect', url, this.room.id, roomType, true);
            return true;
        } catch (error) {
            this.logger.error(`创建或加入房间失败: ${roomType}`, error);
            this.state = RoomState.DISCONNECTED;
            this.logger.logConnection('connect', url, undefined, roomType, false);
            return false;
        }
    }

    /**
     * 获取房间ID
     * @returns 当前房间ID，如果未连接则返回空字符串
     */
    public getRoomId(): string {
        return this.room ? this.room.id : "";
    }

    /**
     * 当前是否已连接
     * @returns 是否已连接
     */
    public isConnected(): boolean {
        return this.state === RoomState.CONNECTED;
    }

    /**
     * 关闭房间连接
     */
    public disconnect(): void {
        if (this.room) {
            const serverInfo = this.room.id || "未知房间";
            this.logger.logConnection('disconnect', serverInfo, this.room.id, this.roomType);
            this.room.leave();
            this.room = null;
        }
        this.state = RoomState.DISCONNECTED;
    }

    public onNotification(commandId: number, callback: (notification: any) => void) {
        this.notificationCallbacks.set(commandId, callback);
    }

    public addNotificationCallback(commandId: number, callback: (notification: Uint8Array) => void) {
        this.notificationCallbacks.set(commandId, callback);
    }

    private handleNotification(commandId: number, notification: Uint8Array) {
        this.logger.logNotification(commandId, notification);
        const callback = this.notificationCallbacks.get(commandId);
        if (callback) {
            callback(notification);
        }
    }

    private getUserId(): string {
        const userManager = UserManager.getInstance();
        return userManager.getUserId();
    }

    private getNickname(): string {
        const userManager = UserManager.getInstance();
        return userManager.getNickname();
    }

    private getAvatar(): string {
        const userManager = UserManager.getInstance();
        return userManager.getAvatar();
    }

    private getGender(): string {
        const userManager = UserManager.getInstance();
        return userManager.getGender();
    }

    private initProtocols() {
        if (!this.room) return;

        this.room.onMessage("*", (type, message) => {
            if (type === "RoomResponse") {
                let response = proto.RoomResponse.decode(message);
                const callback = this.callbacks.get(response.sequenceId);

                if (callback) {
                    // @ts-ignore - 忽略RoomResponse可能没有error属性的类型错误，实际proto定义中有此属性
                    this.logger.logResponse(response.commandId, response.sequenceId, response.data, response.error);
                    callback(response);
                    this.callbacks.delete(response.sequenceId);
                } else {
                    this.handleNotification(response.commandId, response.data);
                }
            }
        });
    }

    public sendMessage(commandId: number, message: Uint8Array, callback?: (response: any) => void) {
        const sequenceId = this.sequenceId++;
        let request = new proto.RoomRequest({
            commandId: commandId,
            sequenceId: sequenceId,
            userId: this.getUserId(),
            data: message
        });

        this.logger.logRequest(commandId, sequenceId, message);

        if (callback) {
            this.callbacks.set(sequenceId, callback);
            setTimeout(() => {
                if (this.callbacks.has(sequenceId)) {
                    this.logger.error(`请求超时 [CMD: ${commandId}, SEQ: ${sequenceId}]`);
                    callback({ error: "Timeout", data: null, sequenceId: sequenceId, commandId: commandId });
                    this.callbacks.delete(sequenceId);
                }
            }, this.timeoutDuration);
        }

        if (this.room) {
            // 将 Uint8Array 转换为 ArrayBuffer
            const buffer = proto.RoomRequest.encode(request).finish();
            this.room.sendBytes("RoomRequest", buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength));
        } else {
            this.logger.error(`发送失败，未连接到房间 [CMD: ${commandId}]`);
            if (callback) {
                callback({ error: "Not connected", data: null, sequenceId: sequenceId, commandId: commandId });
                this.callbacks.delete(sequenceId);
            }
        }
    }

    private promiseWithTimeout<T>(promise: Promise<T>, ms: number, error: string): Promise<T> {
        let timeoutId: NodeJS.Timeout;
        const timeoutPromise = new Promise<T>((_, reject) => {
            timeoutId = setTimeout(() => {
                this.logger.error(error);
                reject(new Error(error));
            }, ms);
        });

        return Promise.race([
            promise,
            timeoutPromise
        ]).then((result) => {
            clearTimeout(timeoutId);
            return result;
        }, (err) => {
            clearTimeout(timeoutId);
            throw err;
        });
    }
}