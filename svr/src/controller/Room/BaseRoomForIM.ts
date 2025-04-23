import { Client, Room } from "@colyseus/core";
import { proto } from "../../proto/combined";
export class BaseRoomForIM extends Room<Record<never, never>> {
    private commandHandlers: Map<number, (client: Client, seqId: number, data: any) => void> = new Map();

    onJoin(client: Client, options: { userId: string }) {
        this.mapSessionToUserId(client, options.userId);
        this.onJoinCallback(client, options);
    }

    onJoinCallback(client: Client, options: object) {
    }

    private sessionToUserIdMap: Map<string, string> = new Map();
    protected mapSessionToUserId(client: Client, userId: string) {
        this.sessionToUserIdMap.set(client.sessionId, userId);
    }

    protected removeSessionToUserId(client: Client) {
        this.sessionToUserIdMap.delete(client.sessionId);
    }

    protected getUserIdFromSession(client: Client): string | undefined {
        return this.sessionToUserIdMap.get(client.sessionId);
    }

    protected getClientByUserId(userId: string): Client | undefined {
        return this.clients.find(client => this.getUserIdFromSession(client) === userId);
    }

    protected isUserInRoom(userId: string): boolean {
        return Array.from(this.sessionToUserIdMap.values()).includes(userId);
    }


    initProto() {
        this.onMessage("RoomRequest", (client, message) => {
            const decodedMessage = proto.RoomRequest.decode(message);

            const commandId = decodedMessage.commandId;
            const commandData = decodedMessage.data;
            const seqId = decodedMessage.sequenceId;

            const handler = this.commandHandlers.get(commandId);
            if (handler) {
                handler(client, seqId, commandData);
            }
        });
    }

    registerCommandHandler(commandId: number, handler: (client: Client, seqId: number, data: any) => void) {
        this.commandHandlers.set(commandId, handler);
    }

    sendPacket(client: Client, commandId: number, seqId: number, data: Uint8Array) {
        const packet = proto.RoomResponse.encode({
            commandId: commandId,
            sequenceId: seqId,
            data: data
        }).finish();
        client.sendBytes("RoomResponse", packet);
    }

    broadcastPacket(commandId: number, seqId: number, data: Uint8Array) {
        const packet = proto.RoomResponse.encode({
            commandId: commandId,
            sequenceId: seqId,
            data: data
        }).finish();

        this.clients.forEach(client => {
            client.sendBytes("RoomResponse", packet);
        });
    }
}
