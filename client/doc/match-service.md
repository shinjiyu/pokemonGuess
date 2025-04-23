# MatchService 实现指南

本文档详细描述了 MatchService 的实现方式，该服务专门负责游戏匹配功能，是 OnlinePlayerService 的一个功能扩展或独立服务。

## 服务职责

MatchService 主要负责处理与游戏匹配相关的功能：

1. 加入匹配队列
2. 取消匹配请求
3. 监听匹配成功通知
4. 处理匹配状态变化

## 实现结构

### 单例模式

MatchService 采用单例模式实现，确保全局唯一的服务实例：

```typescript
export class MatchService {
  private static instance: MatchService | null = null;

  public static getInstance(): MatchService {
    if (!MatchService.instance) {
      MatchService.instance = new MatchService();
    }
    return MatchService.instance;
  }

  // 私有构造函数，防止外部直接实例化
  private constructor() {
    // 初始化代码
  }
}
```

### 状态管理

MatchService 需要管理匹配状态和相关数据：

```typescript
export class MatchService {
  private roomModule: RoomModule;
  private eventEmitter: EventEmitter;

  // 匹配状态相关
  private matchmaking: boolean = false;
  private currentMatchId: string | null = null;
  private matchStartTime: number = 0;
  private matchSettings: {
    gameMode: string;
    rank: number;
  } = { gameMode: "standard", rank: 1000 };

  private constructor() {
    this.roomModule = RoomModule.getInstance();
    this.eventEmitter = new EventEmitter();
    this.setupNotificationHandlers();
  }

  // 获取当前匹配状态
  public isMatchmaking(): boolean {
    return this.matchmaking;
  }

  // 获取匹配等待时间（秒）
  public getWaitTime(): number {
    if (!this.matchmaking) return 0;
    return Math.floor((Date.now() - this.matchStartTime) / 1000);
  }

  // 获取当前匹配ID
  public getCurrentMatchId(): string | null {
    return this.currentMatchId;
  }
}
```

## 通知处理

设置处理匹配通知的回调函数：

```typescript
private setupNotificationHandlers(): void {
    // 注册匹配成功通知处理器
    this.roomModule.addNotificationCallback(
        match.ProtocolNumber.NOTIFY_MATCH_SUCCESS,
        this.onMatchSuccess.bind(this)
    );
}

private onMatchSuccess(notification: Uint8Array): void {
    try {
        // 解码通知消息
        const matchSuccess = match.NotifyMatchSuccess.decode(notification);

        // 更新状态
        this.matchmaking = false;
        this.currentMatchId = null;

        // 组织匹配结果数据
        const matchResult = {
            matchId: matchSuccess.matchId,
            roomId: matchSuccess.roomId,
            players: matchSuccess.players,
            waitTime: this.getWaitTime()
        };

        // 触发匹配成功事件
        this.eventEmitter.emit('matchSuccess', matchResult);
    } catch (error) {
        console.error(`Error handling match success notification: ${error}`);
    }
}
```

## 主要功能实现

### 加入匹配队列

```typescript
public joinMatch(options: { gameMode?: string; rank?: number } = {}): Promise<string> {
    // 如果已经在匹配中，返回错误
    if (this.matchmaking) {
        return Promise.reject(new Error('Already in matchmaking queue'));
    }

    // 合并默认设置和提供的选项
    this.matchSettings = {
        gameMode: options.gameMode || 'standard',
        rank: options.rank || 1000
    };

    // 创建请求消息
    const reqJoinMatch = new match.ReqJoinMatch();
    reqJoinMatch.userId = UserManager.getInstance().getUserId();
    reqJoinMatch.rank = this.matchSettings.rank;
    reqJoinMatch.gameMode = this.matchSettings.gameMode;

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

                try {
                    // 解码响应
                    const resJoinMatch = match.ResJoinMatch.decode(response.data);

                    if (resJoinMatch.success) {
                        // 更新状态
                        this.matchmaking = true;
                        this.currentMatchId = resJoinMatch.matchId;
                        this.matchStartTime = Date.now();

                        // 触发匹配开始事件
                        this.eventEmitter.emit('matchStarted', {
                            matchId: this.currentMatchId,
                            gameMode: this.matchSettings.gameMode,
                            rank: this.matchSettings.rank
                        });

                        resolve(this.currentMatchId);
                    } else {
                        reject(new Error(resJoinMatch.message || 'Failed to join match'));
                    }
                } catch (error) {
                    reject(new Error(`Error parsing join match response: ${error}`));
                }
            }
        );
    });
}
```

### 取消匹配

```typescript
public cancelMatch(): Promise<boolean> {
    // 如果没有在匹配中，返回错误
    if (!this.matchmaking || !this.currentMatchId) {
        return Promise.reject(new Error('Not in matchmaking queue'));
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

                try {
                    // 解码响应
                    const resCancelMatch = match.ResCancelMatch.decode(response.data);

                    if (resCancelMatch.success) {
                        // 更新状态
                        this.matchmaking = false;
                        const canceledMatchId = this.currentMatchId;
                        this.currentMatchId = null;

                        // 触发匹配取消事件
                        this.eventEmitter.emit('matchCancelled', {
                            matchId: canceledMatchId,
                            waitTime: this.getWaitTime()
                        });

                        resolve(true);
                    } else {
                        reject(new Error(resCancelMatch.message || 'Failed to cancel match'));
                    }
                } catch (error) {
                    reject(new Error(`Error parsing cancel match response: ${error}`));
                }
            }
        );
    });
}
```

## 事件系统

通过事件系统使 UI 组件能够响应匹配状态变化：

```typescript
// 事件类型定义
export interface MatchStartedEvent {
    matchId: string;
    gameMode: string;
    rank: number;
}

export interface MatchSuccessEvent {
    matchId: string;
    roomId: string;
    players: PlayerInfo[];
    waitTime: number;
}

export interface MatchCancelledEvent {
    matchId: string;
    waitTime: number;
}

// 事件监听方法
public onMatchStarted(callback: (event: MatchStartedEvent) => void): void {
    this.eventEmitter.on('matchStarted', callback);
}

public offMatchStarted(callback: (event: MatchStartedEvent) => void): void {
    this.eventEmitter.off('matchStarted', callback);
}

public onMatchSuccess(callback: (event: MatchSuccessEvent) => void): void {
    this.eventEmitter.on('matchSuccess', callback);
}

public offMatchSuccess(callback: (event: MatchSuccessEvent) => void): void {
    this.eventEmitter.off('matchSuccess', callback);
}

public onMatchCancelled(callback: (event: MatchCancelledEvent) => void): void {
    this.eventEmitter.on('matchCancelled', callback);
}

public offMatchCancelled(callback: (event: MatchCancelledEvent) => void): void {
    this.eventEmitter.off('matchCancelled', callback);
}
```

## 匹配超时处理

为了防止匹配请求长时间无响应，可以添加自动超时取消功能：

```typescript
export class MatchService {
  private timeoutId: NodeJS.Timeout | null = null;
  private readonly MAX_MATCH_WAIT_TIME = 60000; // 最大等待时间，毫秒

  // 开始匹配时设置超时
  private startMatchTimeout(): void {
    // 清除可能存在的旧定时器
    this.clearMatchTimeout();

    // 设置新的超时定时器
    this.timeoutId = setTimeout(() => {
      if (this.matchmaking) {
        console.warn(
          `Match timeout after ${this.MAX_MATCH_WAIT_TIME / 1000} seconds`
        );

        // 尝试取消匹配
        this.cancelMatch().catch((error) => {
          console.error(`Failed to cancel match on timeout: ${error}`);

          // 如果取消失败，至少更新本地状态
          this.matchmaking = false;
          const timedOutMatchId = this.currentMatchId;
          this.currentMatchId = null;

          // 发出超时事件
          this.eventEmitter.emit("matchTimeout", {
            matchId: timedOutMatchId,
            waitTime: this.getWaitTime(),
          });
        });
      }
    }, this.MAX_MATCH_WAIT_TIME);
  }

  // 清除超时定时器
  private clearMatchTimeout(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  // 修改 joinMatch 方法，添加超时设置
  public joinMatch(
    options: { gameMode?: string; rank?: number } = {}
  ): Promise<string> {
    // 原有代码...

    return new Promise<string>((resolve, reject) => {
      // 请求处理...

      // 在匹配开始时设置超时
      this.startMatchTimeout();

      // 其余原有代码...
    });
  }

  // 修改 cancelMatch 方法，清除超时
  public cancelMatch(): Promise<boolean> {
    // 原有代码...

    this.clearMatchTimeout();

    // 其余原有代码...
  }
}
```

## 与游戏系统的集成

在实际使用中，MatchService 通常需要与游戏系统集成：

```typescript
// 游戏管理器中使用 MatchService
export class GameManager {
  private matchService: MatchService;

  constructor() {
    this.matchService = MatchService.getInstance();
    this.setupMatchListeners();
  }

  private setupMatchListeners(): void {
    // 监听匹配成功事件
    this.matchService.onMatchSuccess(this.handleMatchSuccess.bind(this));
  }

  private handleMatchSuccess(event: MatchSuccessEvent): void {
    console.log(`Match found! Joining room ${event.roomId}`);

    // 连接到游戏房间
    this.joinGameRoom(event.roomId, event.players);
  }

  // 开始匹配游戏
  public startQuickMatch(): Promise<void> {
    // 获取用户当前段位
    const userRank = UserManager.getInstance().getUserRank();

    return this.matchService
      .joinMatch({
        gameMode: "quick",
        rank: userRank,
      })
      .then((matchId) => {
        console.log(`Started quick match with ID: ${matchId}`);
      });
  }

  // 加入游戏房间的方法
  private joinGameRoom(roomId: string, players: PlayerInfo[]): void {
    // 实现加入特定游戏房间的逻辑
  }
}
```

## 使用示例

在 React 组件中使用 MatchService：

```typescript
function MatchmakingComponent() {
  const [isMatching, setIsMatching] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const matchService = useMemo(() => MatchService.getInstance(), []);

  // 设置定时器更新等待时间
  useEffect(() => {
    let timerId: number;

    if (isMatching) {
      timerId = window.setInterval(() => {
        setWaitTime(matchService.getWaitTime());
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isMatching, matchService]);

  // 设置事件监听
  useEffect(() => {
    const handleMatchSuccess = () => {
      setIsMatching(false);
      setWaitTime(0);
    };

    const handleMatchCancelled = () => {
      setIsMatching(false);
      setWaitTime(0);
    };

    matchService.onMatchSuccess(handleMatchSuccess);
    matchService.onMatchCancelled(handleMatchCancelled);

    return () => {
      matchService.offMatchSuccess(handleMatchSuccess);
      matchService.offMatchCancelled(handleMatchCancelled);
    };
  }, [matchService]);

  // 开始匹配
  const startMatching = async () => {
    try {
      setError(null);
      await matchService.joinMatch({ gameMode: "standard" });
      setIsMatching(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to start matchmaking"
      );
    }
  };

  // 取消匹配
  const cancelMatching = async () => {
    try {
      setError(null);
      await matchService.cancelMatch();
      // 状态更新会通过事件监听器处理
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to cancel matchmaking"
      );
    }
  };

  return (
    <div className="matchmaking-panel">
      {error && <div className="error-message">{error}</div>}

      {isMatching ? (
        <>
          <div className="status-message">Finding match... {waitTime}s</div>
          <button onClick={cancelMatching}>Cancel</button>
        </>
      ) : (
        <button onClick={startMatching}>Find Match</button>
      )}
    </div>
  );
}
```
