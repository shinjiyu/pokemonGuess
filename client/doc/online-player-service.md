# OnlinePlayerService 实现指南

本文档详细描述了 OnlinePlayerService 的实现方式，该服务负责处理在线玩家列表、匹配功能以及玩家间通信等功能。

## 服务职责

OnlinePlayerService 作为客户端与服务器 OnlinePlayerRoom 之间的桥梁，负责：

1. 获取在线玩家列表
2. 处理匹配队列相关功能
3. 玩家间日志共享
4. 代码执行与评估

## 实现结构

### 单例模式

OnlinePlayerService 采用单例模式实现，确保全局唯一的服务实例：

```typescript
export class OnlinePlayerService {
  private static instance: OnlinePlayerService | null = null;

  public static getInstance(): OnlinePlayerService {
    if (!OnlinePlayerService.instance) {
      OnlinePlayerService.instance = new OnlinePlayerService();
    }
    return OnlinePlayerService.instance;
  }

  // 私有构造函数，防止外部直接实例化
  private constructor() {
    // 初始化代码
  }
}
```

### 与 RoomModule 的交互

OnlinePlayerService 依赖 RoomModule 进行通信，并处理请求和通知：

```typescript
export class OnlinePlayerService {
  private roomModule: RoomModule;

  private constructor() {
    this.roomModule = new RoomModule();
    this.setupNotificationHandlers();
  }

  public async connect(): Promise<boolean> {
    const roomId = "online_player_room";
    const svrInfo = await PlatformSDKManager.getInstance()
      .getSDK()
      .getSvrInfo();
    const result = await this.roomModule.connect(svrInfo.url, roomId);

    if (result) {
      // 连接成功后，设置事件监听
      this.setupNotificationHandlers();
    }
    return result;
  }

  private setupNotificationHandlers(): void {
    // 设置通知处理函数
    this.roomModule.addNotificationCallback(
      OnlinePlayer.ProtocolNumber.NOTIFY_EVAL_CODE,
      this.onNotifyEvalCode.bind(this)
    );
    // 可添加更多通知处理器
  }
}
```

## 主要功能实现

### 获取在线玩家列表

```typescript
public async getOnlinePlayerList(force: boolean = false): Promise<proto.IPlayerInfo[]> {
    // 如果有缓存且不强制刷新，则使用缓存
    if (this.onlinePlayerList.length > 0 && !force) {
        return this.onlinePlayerList;
    }

    // 创建请求消息
    const reqOnlinePlayers = new OnlinePlayer.ReqOnlinePlayers();
    reqOnlinePlayers.player_count = 100;

    // 发送请求
    return new Promise<proto.IPlayerInfo[]>((resolve, reject) => {
        this.roomModule.sendMessage(
            OnlinePlayer.ProtocolNumber.REQ_ONINE_PLAYERS,
            OnlinePlayer.ReqOnlinePlayers.encode(reqOnlinePlayers).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应并更新缓存
                const onlinePlayers = OnlinePlayer.ResOnlinePlayers.decode(response.data);
                this.onlinePlayerList = onlinePlayers.players;
                resolve(this.onlinePlayerList);
            }
        );
    });
}
```

### 发送日志

```typescript
public sendLog(log: string): Promise<boolean> {
    // 创建请求消息
    const reqSendLog = new OnlinePlayer.ReqSendLog();
    reqSendLog.log = log;

    // 发送请求
    return new Promise<boolean>((resolve, reject) => {
        this.roomModule.sendMessage(
            OnlinePlayer.ProtocolNumber.REQ_SEND_LOG,
            OnlinePlayer.ReqSendLog.encode(reqSendLog).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应
                const resSendLog = OnlinePlayer.ResSendLog.decode(response.data);
                resolve(resSendLog.success);
            }
        );
    });
}
```

### 订阅玩家日志

```typescript
public receiveLog(playerId: string): Promise<boolean> {
    // 创建请求消息
    const reqReceiveLog = new OnlinePlayer.ReqReceiveLog();
    reqReceiveLog.playerId = playerId;

    // 发送请求
    return new Promise<boolean>((resolve, reject) => {
        this.roomModule.sendMessage(
            OnlinePlayer.ProtocolNumber.REQ_RECEIVE_LOG,
            OnlinePlayer.ReqReceiveLog.encode(reqReceiveLog).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应
                const resReceiveLog = OnlinePlayer.ResReceiveLog.decode(response.data);
                resolve(resReceiveLog.success);
            }
        );
    });
}
```

### 代码执行请求

```typescript
public reqEvalCode(playerId: string, code: string): Promise<boolean> {
    // 创建请求消息
    const reqEval = new OnlinePlayer.ReqEvalCode();
    reqEval.playerId = playerId;
    reqEval.code = code;

    // 发送请求
    return new Promise<boolean>((resolve, reject) => {
        this.roomModule.sendMessage(
            OnlinePlayer.ProtocolNumber.REQ_EVAL_CODE,
            OnlinePlayer.ReqEvalCode.encode(reqEval).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应
                const resEvalCode = OnlinePlayer.ResEvalCode.decode(response.data);
                resolve(resEvalCode.success);
            }
        );
    });
}
```

### 处理通知

```typescript
// 处理代码执行通知
private onNotifyEvalCode(notification: Uint8Array): void {
    try {
        // 解码通知消息
        const evalCode = OnlinePlayer.NotifyEvalCode.decode(notification);

        // 执行代码（注意安全性）
        try {
            // 可以添加安全检查
            eval(evalCode.code);
            // 可以发送执行结果
        } catch (error) {
            console.error(`Error evaluating code: ${error}`);
        }
    } catch (error) {
        console.error(`Error decoding eval notification: ${error}`);
    }
}
```

## 匹配功能实现

### 加入匹配队列

```typescript
public joinMatch(gameMode: string = 'standard', rank: number = 1000): Promise<string> {
    // 创建请求消息
    const reqJoinMatch = new match.ReqJoinMatch();
    reqJoinMatch.userId = UserManager.getInstance().getUserId();
    reqJoinMatch.rank = rank;
    reqJoinMatch.gameMode = gameMode;

    // 发送请求
    return new Promise<string>((resolve, reject) => {
        this.roomModule.sendMessage(
            match.ProtocolNumber.REQ_JOIN_MATCH,
            match.ReqJoinMatch.encode(reqJoinMatch).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应
                const resJoinMatch = match.ResJoinMatch.decode(response.data);
                if (resJoinMatch.success) {
                    this.currentMatchId = resJoinMatch.matchId;
                    resolve(resJoinMatch.matchId);
                } else {
                    reject(new Error(resJoinMatch.message));
                }
            }
        );
    });
}
```

### 取消匹配

```typescript
public cancelMatch(): Promise<boolean> {
    if (!this.currentMatchId) {
        return Promise.reject(new Error('Not in matchmaking'));
    }

    // 创建请求消息
    const reqCancelMatch = new match.ReqCancelMatch();
    reqCancelMatch.matchId = this.currentMatchId;

    // 发送请求
    return new Promise<boolean>((resolve, reject) => {
        this.roomModule.sendMessage(
            match.ProtocolNumber.REQ_CANCEL_MATCH,
            match.ReqCancelMatch.encode(reqCancelMatch).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码响应
                const resCancelMatch = match.ResCancelMatch.decode(response.data);
                if (resCancelMatch.success) {
                    this.currentMatchId = null;
                    resolve(true);
                } else {
                    reject(new Error(resCancelMatch.message));
                }
            }
        );
    });
}
```

### 处理匹配成功通知

```typescript
private setupMatchNotifications(): void {
    this.roomModule.addNotificationCallback(
        match.ProtocolNumber.NOTIFY_MATCH_SUCCESS,
        this.onMatchSuccess.bind(this)
    );
}

private onMatchSuccess(notification: Uint8Array): void {
    try {
        // 解码通知消息
        const matchSuccess = match.NotifyMatchSuccess.decode(notification);

        // 处理匹配成功事件
        this.currentMatchId = null;

        // 触发事件
        this.eventEmitter.emit('matchSuccess', {
            matchId: matchSuccess.matchId,
            roomId: matchSuccess.roomId,
            players: matchSuccess.players
        });
    } catch (error) {
        console.error(`Error processing match success: ${error}`);
    }
}
```

## 与 UI 层交互

使用事件发射器可以实现与 UI 层的解耦：

```typescript
export class OnlinePlayerService {
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
    // 其它初始化代码
  }

  // 事件监听接口
  public onMatchSuccess(callback: (matchInfo: any) => void): void {
    this.eventEmitter.on("matchSuccess", callback);
  }

  public offMatchSuccess(callback: (matchInfo: any) => void): void {
    this.eventEmitter.off("matchSuccess", callback);
  }

  public onLogReceived(
    callback: (playerId: string, log: string) => void
  ): void {
    this.eventEmitter.on("logReceived", callback);
  }

  // 可添加更多事件接口
}
```

## 错误处理与日志

良好的错误处理和日志记录对于调试和稳定性至关重要：

```typescript
// 使用 WithLogger 基类提供日志功能
export class OnlinePlayerService extends WithLogger(
  "OnlinePlayerService",
  true
) {
  // 发送请求的包装方法，统一处理错误
  private async sendRequest<T>(
    commandId: number,
    request: Uint8Array,
    decoder: (data: Uint8Array) => T
  ): Promise<T> {
    try {
      return await new Promise<T>((resolve, reject) => {
        this.roomModule.sendMessage(commandId, request, (response) => {
          if (response.error) {
            this.logError(`Request failed: ${response.error}`);
            reject(new Error(response.error));
            return;
          }

          try {
            const result = decoder(response.data);
            resolve(result);
          } catch (error) {
            this.logError(`Failed to decode response: ${error}`);
            reject(error);
          }
        });
      });
    } catch (error) {
      this.logError(`Error sending request: ${error}`);
      throw error;
    }
  }
}
```

## 使用示例

```typescript
// 在组件中使用 OnlinePlayerService
const onlinePlayerService = OnlinePlayerService.getInstance();

// 连接服务器
await onlinePlayerService.connect();

// 获取在线玩家
const players = await onlinePlayerService.getOnlinePlayerList();

// 监听匹配成功事件
onlinePlayerService.onMatchSuccess((matchInfo) => {
  console.log(`Match found! Room ID: ${matchInfo.roomId}`);
  console.log(
    `Players: ${matchInfo.players.map((p) => p.nickname).join(", ")}`
  );
});

// 开始匹配
await onlinePlayerService.joinMatch("standard", 1200);
```
