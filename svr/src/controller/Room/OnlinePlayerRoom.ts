import { Client } from "@colyseus/core";
import { Common, match, OnlinePlayer, proto } from "../../proto/combined";
import { BaseRoomForIM } from "./BaseRoomForIM";

interface MatchQueuePlayer {
    client: Client;
    userId: string;
    rank: number;
    gameMode: string;
    matchId: string;
    joinTime: number;
}

export class OnlinePlayerRoom extends BaseRoomForIM {
    maxClients = 10000;
    players: Common.IPlayerInfo[] = [];
    autoDispose = false;

    // 日志接收者映射表
    private logReceivers: Map<string, Set<Client>> = new Map();

    // 匹配相关的属性
    private matchQueue: Map<string, MatchQueuePlayer> = new Map();
    private matchIntervalId: NodeJS.Timeout | null = null;
    private readonly MATCH_INTERVAL = 3000;  // 每3秒进行一次匹配检查
    private readonly RANK_RANGE = 200;       // 段位差异范围
    private readonly MAX_WAIT_TIME = 30000;  // 最大等待时间（30秒）
    // 自己的命令处理映射表
    private myCommandHandlers: Map<number, (client: Client, seqId: number, data: any) => void> = new Map();

    // 重写发送方法，用于记录完整包体
    public sendPacket(client: Client, commandId: number, sequenceId: number, data: Uint8Array) {
        // 打印发送的包体内容
        try {
            console.group(`🚀 [OnlinePlayerRoom] 发送包体 CMD:${commandId} SEQ:${sequenceId}`);
            console.log("原始数据:", Buffer.from(data).toString('hex'));

            // 根据不同命令ID解析对应的数据
            if (this.decodeAndLogPacket(commandId, data, "发送")) {
                // 解析成功
            } else {
                console.log("数据内容: [无法解析的二进制数据]");
            }
            console.groupEnd();
        } catch (error) {
            console.error(`[OnlinePlayerRoom] 打印发送包体出错:`, error);
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
                console.group(`📥 [OnlinePlayerRoom] 接收包体 CMD:${commandId} SEQ:${seqId}`);
                console.log("原始数据:", Buffer.from(commandData).toString('hex'));

                // 根据不同命令ID解析对应的数据
                if (this.decodeAndLogPacket(commandId, commandData, "接收")) {
                    // 解析成功
                } else {
                    console.log("数据内容: [无法解析的二进制数据]");
                }
                console.groupEnd();
            } catch (error) {
                console.error(`[OnlinePlayerRoom] 打印接收包体出错:`, error);
            }

            // 查找并调用对应的命令处理函数
            const handler = this.myCommandHandlers.get(commandId);
            if (handler) {
                handler(client, seqId, commandData);
            } else {
                console.warn(`[OnlinePlayerRoom] 未找到命令处理函数: ${commandId}`);
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
                // 在线玩家协议
                case OnlinePlayer.ProtocolNumber.REQ_ONINE_PLAYERS:
                    console.log("包体类型: 请求在线玩家列表");
                    console.log("数据内容:", OnlinePlayer.ReqOnlinePlayers.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.RES_ONINE_PLAYERS:
                    console.log("包体类型: 在线玩家列表响应");
                    console.log("数据内容:", OnlinePlayer.ResOnlinePlayers.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.REQ_SEND_LOG:
                    console.log("包体类型: 发送日志请求");
                    console.log("数据内容:", OnlinePlayer.ReqSendLog.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.RES_SEND_LOG:
                    console.log("包体类型: 发送日志响应");
                    console.log("数据内容:", OnlinePlayer.ResSendLog.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.REQ_RECEIVE_LOG:
                    console.log("包体类型: 接收日志请求");
                    console.log("数据内容:", OnlinePlayer.ReqReceiveLog.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.RES_RECEIVE_LOG:
                    console.log("包体类型: 接收日志响应");
                    console.log("数据内容:", OnlinePlayer.ResReceiveLog.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.NOTIFY_RECEIVE_LOG:
                    console.log("包体类型: 日志接收通知");
                    console.log("数据内容:", OnlinePlayer.NotifyReceiveLog.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.REQ_EVAL_CODE:
                    console.log("包体类型: 代码评估请求");
                    console.log("数据内容:", OnlinePlayer.ReqEvalCode.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.RES_EVAL_CODE:
                    console.log("包体类型: 代码评估响应");
                    console.log("数据内容:", OnlinePlayer.ResEvalCode.decode(data));
                    return true;

                case OnlinePlayer.ProtocolNumber.NOTIFY_EVAL_CODE:
                    console.log("包体类型: 代码评估通知");
                    console.log("数据内容:", OnlinePlayer.NotifyEvalCode.decode(data));
                    return true;

                // 匹配协议
                case match.ProtocolNumber.REQ_JOIN_MATCH:
                    console.log("包体类型: 加入匹配请求");
                    console.log("数据内容:", match.ReqJoinMatch.decode(data));
                    return true;

                case match.ProtocolNumber.RES_JOIN_MATCH:
                    console.log("包体类型: 加入匹配响应");
                    console.log("数据内容:", match.ResJoinMatch.decode(data));
                    return true;

                case match.ProtocolNumber.REQ_CANCEL_MATCH:
                    console.log("包体类型: 取消匹配请求");
                    console.log("数据内容:", match.ReqCancelMatch.decode(data));
                    return true;

                case match.ProtocolNumber.RES_CANCEL_MATCH:
                    console.log("包体类型: 取消匹配响应");
                    console.log("数据内容:", match.ResCancelMatch.decode(data));
                    return true;

                case match.ProtocolNumber.NOTIFY_MATCH_SUCCESS:
                    console.log("包体类型: 匹配成功通知");
                    console.log("数据内容:", match.NotifyMatchSuccess.decode(data));
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

    onCreate(options: { roomId: string }) {
        console.log(`[OnlinePlayerRoom] Creating room with ID: ${options.roomId}`);
        this.roomId = options.roomId;
        this.initProto();

        // 注册现有的处理函数
        this.registerCommandHandler(OnlinePlayer.ProtocolNumber.REQ_ONINE_PLAYERS, this.handleReqOnlinePlayers.bind(this));
        this.registerCommandHandler(OnlinePlayer.ProtocolNumber.REQ_SEND_LOG, this.handleReqSendLog.bind(this));
        this.registerCommandHandler(OnlinePlayer.ProtocolNumber.REQ_RECEIVE_LOG, this.handleReqReceiveLog.bind(this));
        this.registerCommandHandler(OnlinePlayer.ProtocolNumber.REQ_EVAL_CODE, this.handleReqEvalCode.bind(this));

        // 注册匹配相关的处理函数
        this.registerCommandHandler(match.ProtocolNumber.REQ_JOIN_MATCH, this.handleReqJoinMatch.bind(this));
        this.registerCommandHandler(match.ProtocolNumber.REQ_CANCEL_MATCH, this.handleReqCancelMatch.bind(this));

        // 启动匹配检查定时器
        this.matchIntervalId = setInterval(() => this.checkMatches(), this.MATCH_INTERVAL);

        console.log(`[OnlinePlayerRoom] Room ${options.roomId} created successfully`);
    }

    onDispose() {
        console.log(`[OnlinePlayerRoom] Room disposed`);

        // 清理匹配定时器
        if (this.matchIntervalId) {
            clearInterval(this.matchIntervalId);
            this.matchIntervalId = null;
        }
    }

    onJoinCallback(client: Client, options: object) {
        console.log(`[OnlinePlayerRoom] Client ${client.sessionId} joined OnlinePlayerRoom, options: ${JSON.stringify(options)}`);

        // Get user information from options
        const userId = this.getUserIdFromSession(client);
        if (userId) {
            // Extract player information from options
            const playerInfo: Common.IPlayerInfo = {
                playerId: userId,
                nickname: (options as any).nickname || "",
                avatar: (options as any).avatar || "",
                gender: (options as any).gender || ""
            };

            // Check if player already exists in the list
            const existingPlayerIndex = this.players.findIndex(player => player.playerId === userId);
            if (existingPlayerIndex !== -1) {
                // Update existing player information
                this.players[existingPlayerIndex] = playerInfo;
                console.log(`[OnlinePlayerRoom] Updated player information for ${userId}`);
            } else {
                // Add new player to the list
                this.players.push(playerInfo);
                console.log(`[OnlinePlayerRoom] Added new player ${userId} to player list`);
            }
        } else {
            console.warn(`[OnlinePlayerRoom] Failed to add player: userId is undefined`);
        }
    }


    onLeave(client: Client, consented: boolean) {
        const userId = this.getUserIdFromSession(client);
        console.log(`[OnlinePlayerRoom] Client ${client.sessionId} left OnlinePlayerRoom, consented: ${consented}`);

        // 处理玩家列表
        const playerIndex = this.players.findIndex(player => player.playerId === userId);
        if (playerIndex !== -1) {
            this.players.splice(playerIndex, 1);
        }

        // 清理日志接收者
        this.logReceivers.forEach((receivers) => {
            receivers.delete(client);
        });
        this.logReceivers.delete(userId || "");

        // 清理匹配队列
        this.matchQueue.delete(userId || "");

        this.removeSessionToUserId(client);
    }

    handleReqOnlinePlayers(client: Client, seqId: number, data: any) {
        console.log(`[OnlinePlayerRoom] Handling request for online players from client ${client.sessionId}`);
        const reqOnlinePlayers = OnlinePlayer.ReqOnlinePlayers.decode(data);
        const count = reqOnlinePlayers.playerCount;

        const uid = this.getUserIdFromSession(client);
        let filteredPlayers = this.players.filter(player => player.playerId !== uid);

        if (count < filteredPlayers.length) {
            filteredPlayers = filteredPlayers.slice(0, count);
        }

        console.log(`[OnlinePlayerRoom] Sending ${filteredPlayers.length} players to client ${client.sessionId}`);
        const resOnlinePlayers = OnlinePlayer.ResOnlinePlayers.encode({
            players: filteredPlayers
        }).finish();
        this.sendPacket(client, OnlinePlayer.ProtocolNumber.RES_ONINE_PLAYERS, seqId, resOnlinePlayers);
    }

    handleReqSendLog(client: Client, seqId: number, data: any) {
        const reqSendLog = OnlinePlayer.ReqSendLog.decode(data);
        const logContent = reqSendLog.log;
        const fromUserId = this.getUserIdFromSession(client) || "";

        console.log(`[OnlinePlayerRoom] Log from ${fromUserId}: ${logContent}`);

        const receivers = this.logReceivers.get(fromUserId);
        if (receivers) {
            const resReceiveLog = OnlinePlayer.NotifyReceiveLog.encode({
                playerId: fromUserId,
                log: logContent
            }).finish();

            receivers.forEach(receiver => {
                if (receiver !== client) {
                    this.sendPacket(receiver, OnlinePlayer.ProtocolNumber.RES_RECEIVE_LOG, 0, resReceiveLog);
                }
            });
        }

        const resSendLog = OnlinePlayer.ResSendLog.encode({
            success: true
        }).finish();

        this.sendPacket(client, OnlinePlayer.ProtocolNumber.RES_SEND_LOG, seqId, resSendLog);
    }

    handleReqReceiveLog(client: Client, seqId: number, data: any) {
        const reqReceiveLog = OnlinePlayer.ReqReceiveLog.decode(data);
        const targetUserId = reqReceiveLog.playerId;

        if (!this.logReceivers.has(targetUserId)) {
            this.logReceivers.set(targetUserId, new Set());
        }
        this.logReceivers.get(targetUserId)?.add(client);

        const resReceiveLog = OnlinePlayer.ResReceiveLog.encode({
            success: true
        }).finish();

        this.sendPacket(client, OnlinePlayer.ProtocolNumber.RES_RECEIVE_LOG, seqId, resReceiveLog);
    }

    handleReqEvalCode(client: Client, seqId: number, data: any) {
        const reqEvalCode = OnlinePlayer.ReqEvalCode.decode(data);
        const code = reqEvalCode.code;
        const playerId = reqEvalCode.playerId;

        console.log(`[OnlinePlayerRoom] Received code evaluation request from ${client.sessionId} for player ${playerId}`);

        // Notify target player about code execution
        const notifyEvalCode = OnlinePlayer.NotifyEvalCode.encode({
            code: code
        }).finish();

        // Find target player's client and send notification
        const targetClient = this.getClientByUserId(playerId);
        if (targetClient) {
            console.log(`[OnlinePlayerRoom] Sending code evaluation notification to ${playerId}`);
            this.sendPacket(targetClient, OnlinePlayer.ProtocolNumber.NOTIFY_EVAL_CODE, 0, notifyEvalCode);
        } else {
            console.log(`[OnlinePlayerRoom] Target player ${playerId} not found`);
        }

        const resEvalCode = OnlinePlayer.ResEvalCode.encode({
            success: true
        }).finish();

        this.sendPacket(client, OnlinePlayer.ProtocolNumber.RES_EVAL_CODE, seqId, resEvalCode);
    }

    // 处理加入匹配请求
    handleReqJoinMatch(client: Client, seqId: number, data: any) {
        const reqJoinMatch = match.ReqJoinMatch.decode(data);
        const userId = this.getUserIdFromSession(client) || "";
        const matchId = `match_${Date.now()}_${userId}`;

        console.log(`[OnlinePlayerRoom] Player ${userId} requesting to join match. Mode: ${reqJoinMatch.gameMode}, Rank: ${reqJoinMatch.rank}`);

        // 如果玩家已在匹配队列中，先移除
        if (this.matchQueue.has(userId)) {
            console.log(`[OnlinePlayerRoom] Player ${userId} already in queue, removing old entry`);
            this.matchQueue.delete(userId);
        }

        // 添加到匹配队列
        this.matchQueue.set(userId, {
            client,
            userId,
            rank: reqJoinMatch.rank,
            gameMode: reqJoinMatch.gameMode,
            matchId,
            joinTime: Date.now()
        });

        const resJoinMatch = match.ResJoinMatch.encode({
            success: true,
            message: "Successfully joined match queue",
            matchId: matchId
        }).finish();

        this.sendPacket(client, match.ProtocolNumber.RES_JOIN_MATCH, seqId, resJoinMatch);
    }

    // 处理取消匹配请求
    handleReqCancelMatch(client: Client, seqId: number, data: any) {
        const reqCancelMatch = match.ReqCancelMatch.decode(data);
        const userId = this.getUserIdFromSession(client) || "";

        console.log(`[OnlinePlayerRoom] Player ${userId} requesting to cancel match ${reqCancelMatch.matchId}`);

        const success = this.matchQueue.delete(userId);
        const resCancelMatch = match.ResCancelMatch.encode({
            success: success,
            message: success ? "Successfully cancelled match" : "Player not in match queue"
        }).finish();

        this.sendPacket(client, match.ProtocolNumber.RES_CANCEL_MATCH, seqId, resCancelMatch);
    }

    // 匹配检查逻辑
    private checkMatches() {
        const now = Date.now();
        const players = Array.from(this.matchQueue.values());

        // 按游戏模式分组
        const modeGroups = new Map<string, MatchQueuePlayer[]>();
        players.forEach(player => {
            if (!modeGroups.has(player.gameMode)) {
                modeGroups.set(player.gameMode, []);
            }
            modeGroups.get(player.gameMode)?.push(player);
        });

        // 对每个游戏模式进行匹配
        modeGroups.forEach((modePlayers, gameMode) => {
            // 按段位排序
            modePlayers.sort((a, b) => a.rank - b.rank);

            for (let i = 0; i < modePlayers.length; i++) {
                const player1 = modePlayers[i];
                if (!this.matchQueue.has(player1.userId)) continue; // 玩家可能已被匹配

                // 寻找合适的对手
                for (let j = i + 1; j < modePlayers.length; j++) {
                    const player2 = modePlayers[j];
                    if (!this.matchQueue.has(player2.userId)) continue;

                    const rankDiff = Math.abs(player1.rank - player2.rank);
                    const waitTime = now - Math.min(player1.joinTime, player2.joinTime);

                    // 段位差异在可接受范围内，或等待时间过长
                    if (rankDiff <= this.RANK_RANGE || waitTime >= this.MAX_WAIT_TIME) {
                        this.matchPlayers([player1, player2]);
                        break;
                    }
                }
            }
        });
    }

    // 匹配成功后的处理
    private matchPlayers(matchedPlayers: MatchQueuePlayer[]) {
        const roomId = `match_${Date.now()}_${matchedPlayers.map(p => p.userId).join('_')}`;
        console.log(`[OnlinePlayerRoom] Matching players: ${matchedPlayers.map(p => p.userId).join(', ')} in room ${roomId}`);

        // 从匹配队列中移除
        matchedPlayers.forEach(player => {
            this.matchQueue.delete(player.userId);
        });

        // 发送匹配成功通知
        const notifyMatchSuccess = match.NotifyMatchSuccess.encode({
            matchId: matchedPlayers[0].matchId,
            roomId: roomId,
            players: matchedPlayers.map(p => ({
                userId: p.userId,
                nickname: this.players.find(player => player.playerId === p.userId)?.nickname || "",
                rank: p.rank,
                avatar: this.players.find(player => player.playerId === p.userId)?.avatar || ""
            }))
        }).finish();

        matchedPlayers.forEach(player => {
            this.sendPacket(player.client, match.ProtocolNumber.NOTIFY_MATCH_SUCCESS, 0, notifyMatchSuccess);
        });
    }
}
