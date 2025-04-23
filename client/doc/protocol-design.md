# 客户端-服务器通信协议设计

## 协议结构概述

本项目采用双层协议结构进行客户端和服务器之间的通信，基于 Protocol Buffers（protobuf）实现，具有高效、跨平台的特点。

### 双层协议结构

1. **外层协议**：RoomRequest / RoomResponse

   - 负责消息的基础路由和身份识别
   - 区分请求、响应和通知消息类型
   - 记录通信序列号以匹配请求和响应

2. **内层协议**：特定功能模块的消息体（如 match 和 onlinePlayer）
   - 包含特定业务逻辑的具体数据
   - 根据不同的功能模块使用不同的消息体格式

## 协议通信流程

### 请求-响应模式

1. 客户端创建一个 RoomRequest 消息，设置以下字段：

   - `command_id`：指定要调用的具体命令
   - `sequence_id`：唯一标识此次请求的序列号（不为 0）
   - `user_id`：当前用户的 ID
   - `data`：序列化后的内层协议消息体

2. 服务器处理请求，并返回 RoomResponse 消息：

   - `command_id`：与请求相同的命令 ID
   - `sequence_id`：与请求相同的序列号（确保请求-响应配对）
   - `data`：序列化后的内层响应消息体

3. 客户端根据 `sequence_id` 匹配对应的回调函数，处理响应。

### 通知模式

当服务器需要主动向客户端推送消息时，会发送一个特殊的 RoomResponse：

- `sequence_id` 设置为 0，表示这是一个通知而非响应
- 客户端通过预先注册的通知处理器来处理这类消息

## 消息编码与解码

### 编码过程

1. 创建并填充内层协议消息体
2. 使用 Protocol Buffers 编码内层消息: `InnerProtocol.encode(message).finish()`
3. 将编码后的内层消息作为外层消息的 `data` 字段
4. 编码外层消息并发送

### 解码过程

1. 解码外层 RoomResponse 消息
2. 根据 `command_id` 确定内层消息的类型
3. 使用对应的 Protocol Buffers 解码器解析 `data` 字段: `InnerProtocol.decode(response.data)`
4. 处理解码后的内层消息

## 示例代码

### 发送请求示例

```typescript
// 获取在线玩家列表
public async getOnlinePlayerList(count: number = 100): Promise<proto.IPlayerInfo[]> {
    // 创建内层协议消息
    const reqOnlinePlayers = new OnlinePlayer.ReqOnlinePlayers();
    reqOnlinePlayers.player_count = count;

    // 发送请求并处理响应
    return new Promise<proto.IPlayerInfo[]>((resolve, reject) => {
        this.roomModule.sendMessage(
            OnlinePlayer.ProtocolNumber.REQ_ONINE_PLAYERS,
            OnlinePlayer.ReqOnlinePlayers.encode(reqOnlinePlayers).finish(),
            (response) => {
                if (response.error) {
                    reject(new Error(response.error));
                    return;
                }

                // 解码内层响应消息
                const onlinePlayers = OnlinePlayer.ResOnlinePlayers.decode(response.data);
                resolve(onlinePlayers.players);
            }
        );
    });
}
```

### 处理通知示例

```typescript
// 在构造函数或初始化方法中设置通知处理器
private setupNotificationHandlers(): void {
    // 注册代码执行结果通知处理器
    this.roomModule.addNotificationCallback(
        OnlinePlayer.ProtocolNumber.NOTIFY_EVAL_CODE,
        this.onNotifyEvalCode.bind(this)
    );
}

// 通知处理方法
private onNotifyEvalCode(notification: Uint8Array): void {
    // 解码通知消息体
    const evalCode = OnlinePlayer.NotifyEvalCode.decode(notification);
    console.log(`收到代码执行通知: ${evalCode.code}`);

    // 处理通知内容
    try {
        // 安全地执行代码...
    } catch (error) {
        console.error(`代码执行出错: ${error}`);
    }
}
```

## 注意事项

1. **序列号管理**：客户端需要管理 `sequence_id`，确保每个请求使用唯一的序列号，并正确匹配响应。

2. **超时处理**：添加请求超时机制，防止长时间未收到响应的情况。

3. **错误处理**：处理解码过程中可能出现的错误，如格式错误或不完整的消息。

4. **类型安全**：利用 TypeScript 的类型系统确保消息的正确性。

5. **协议版本**：在处理内层协议时，应考虑协议版本兼容性问题。

## Protocol Buffer 定义示例

协议定义在 `.proto` 文件中，例如：

```protobuf
// 外层协议
message RoomRequest {
    int32 command_id = 1;
    int32 sequence_id = 2;
    string user_id = 3;
    bytes data = 4;
}

message RoomResponse {
    int32 command_id = 1;
    int32 sequence_id = 2;
    bytes data = 3;
}

// 内层协议示例（onlinePlayer.proto）
message ReqOnlinePlayers {
    int32 player_count = 1;
}

message ResOnlinePlayers {
    repeated PlayerInfo players = 1;
}
```
