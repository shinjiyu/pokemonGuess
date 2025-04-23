import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a RoomRequest. */
    interface IRoomRequest {

        /** RoomRequest serverTarget */
        serverTarget?: (string|null);

        /** RoomRequest commandId */
        commandId?: (number|null);

        /** RoomRequest app */
        app?: (string|null);

        /** RoomRequest userId */
        userId?: (string|null);

        /** RoomRequest data */
        data?: (Uint8Array|null);

        /** RoomRequest sequenceId */
        sequenceId?: (number|null);
    }

    /** Represents a RoomRequest. */
    class RoomRequest implements IRoomRequest {

        /**
         * Constructs a new RoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoomRequest);

        /** RoomRequest serverTarget. */
        public serverTarget: string;

        /** RoomRequest commandId. */
        public commandId: number;

        /** RoomRequest app. */
        public app: string;

        /** RoomRequest userId. */
        public userId: string;

        /** RoomRequest data. */
        public data: Uint8Array;

        /** RoomRequest sequenceId. */
        public sequenceId: number;

        /**
         * Creates a new RoomRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomRequest instance
         */
        public static create(properties?: proto.IRoomRequest): proto.RoomRequest;

        /**
         * Encodes the specified RoomRequest message. Does not implicitly {@link proto.RoomRequest.verify|verify} messages.
         * @param message RoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomRequest message, length delimited. Does not implicitly {@link proto.RoomRequest.verify|verify} messages.
         * @param message RoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RoomRequest;

        /**
         * Decodes a RoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RoomRequest;

        /**
         * Verifies a RoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.RoomRequest;

        /**
         * Creates a plain object from a RoomRequest message. Also converts values to other types if specified.
         * @param message RoomRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RoomResponse. */
    interface IRoomResponse {

        /** RoomResponse sequenceId */
        sequenceId?: (number|null);

        /** RoomResponse serverTarget */
        serverTarget?: (string|null);

        /** RoomResponse commandId */
        commandId?: (number|null);

        /** RoomResponse data */
        data?: (Uint8Array|null);
    }

    /** Represents a RoomResponse. */
    class RoomResponse implements IRoomResponse {

        /**
         * Constructs a new RoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoomResponse);

        /** RoomResponse sequenceId. */
        public sequenceId: number;

        /** RoomResponse serverTarget. */
        public serverTarget: string;

        /** RoomResponse commandId. */
        public commandId: number;

        /** RoomResponse data. */
        public data: Uint8Array;

        /**
         * Creates a new RoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomResponse instance
         */
        public static create(properties?: proto.IRoomResponse): proto.RoomResponse;

        /**
         * Encodes the specified RoomResponse message. Does not implicitly {@link proto.RoomResponse.verify|verify} messages.
         * @param message RoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomResponse message, length delimited. Does not implicitly {@link proto.RoomResponse.verify|verify} messages.
         * @param message RoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RoomResponse;

        /**
         * Decodes a RoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RoomResponse;

        /**
         * Verifies a RoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.RoomResponse;

        /**
         * Creates a plain object from a RoomResponse message. Also converts values to other types if specified.
         * @param message RoomResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace match. */
export namespace match {

    /** Properties of a ReqJoinMatch. */
    interface IReqJoinMatch {

        /** ReqJoinMatch userId */
        userId?: (string|null);

        /** ReqJoinMatch rank */
        rank?: (number|null);

        /** ReqJoinMatch gameMode */
        gameMode?: (string|null);
    }

    /** Represents a ReqJoinMatch. */
    class ReqJoinMatch implements IReqJoinMatch {

        /**
         * Constructs a new ReqJoinMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: match.IReqJoinMatch);

        /** ReqJoinMatch userId. */
        public userId: string;

        /** ReqJoinMatch rank. */
        public rank: number;

        /** ReqJoinMatch gameMode. */
        public gameMode: string;

        /**
         * Creates a new ReqJoinMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqJoinMatch instance
         */
        public static create(properties?: match.IReqJoinMatch): match.ReqJoinMatch;

        /**
         * Encodes the specified ReqJoinMatch message. Does not implicitly {@link match.ReqJoinMatch.verify|verify} messages.
         * @param message ReqJoinMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: match.IReqJoinMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqJoinMatch message, length delimited. Does not implicitly {@link match.ReqJoinMatch.verify|verify} messages.
         * @param message ReqJoinMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: match.IReqJoinMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqJoinMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): match.ReqJoinMatch;

        /**
         * Decodes a ReqJoinMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): match.ReqJoinMatch;

        /**
         * Verifies a ReqJoinMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqJoinMatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqJoinMatch
         */
        public static fromObject(object: { [k: string]: any }): match.ReqJoinMatch;

        /**
         * Creates a plain object from a ReqJoinMatch message. Also converts values to other types if specified.
         * @param message ReqJoinMatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: match.ReqJoinMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqJoinMatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqJoinMatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResJoinMatch. */
    interface IResJoinMatch {

        /** ResJoinMatch success */
        success?: (boolean|null);

        /** ResJoinMatch message */
        message?: (string|null);

        /** ResJoinMatch matchId */
        matchId?: (string|null);
    }

    /** Represents a ResJoinMatch. */
    class ResJoinMatch implements IResJoinMatch {

        /**
         * Constructs a new ResJoinMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: match.IResJoinMatch);

        /** ResJoinMatch success. */
        public success: boolean;

        /** ResJoinMatch message. */
        public message: string;

        /** ResJoinMatch matchId. */
        public matchId: string;

        /**
         * Creates a new ResJoinMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResJoinMatch instance
         */
        public static create(properties?: match.IResJoinMatch): match.ResJoinMatch;

        /**
         * Encodes the specified ResJoinMatch message. Does not implicitly {@link match.ResJoinMatch.verify|verify} messages.
         * @param message ResJoinMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: match.IResJoinMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResJoinMatch message, length delimited. Does not implicitly {@link match.ResJoinMatch.verify|verify} messages.
         * @param message ResJoinMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: match.IResJoinMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResJoinMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): match.ResJoinMatch;

        /**
         * Decodes a ResJoinMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): match.ResJoinMatch;

        /**
         * Verifies a ResJoinMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResJoinMatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResJoinMatch
         */
        public static fromObject(object: { [k: string]: any }): match.ResJoinMatch;

        /**
         * Creates a plain object from a ResJoinMatch message. Also converts values to other types if specified.
         * @param message ResJoinMatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: match.ResJoinMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResJoinMatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResJoinMatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqCancelMatch. */
    interface IReqCancelMatch {

        /** ReqCancelMatch matchId */
        matchId?: (string|null);
    }

    /** Represents a ReqCancelMatch. */
    class ReqCancelMatch implements IReqCancelMatch {

        /**
         * Constructs a new ReqCancelMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: match.IReqCancelMatch);

        /** ReqCancelMatch matchId. */
        public matchId: string;

        /**
         * Creates a new ReqCancelMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqCancelMatch instance
         */
        public static create(properties?: match.IReqCancelMatch): match.ReqCancelMatch;

        /**
         * Encodes the specified ReqCancelMatch message. Does not implicitly {@link match.ReqCancelMatch.verify|verify} messages.
         * @param message ReqCancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: match.IReqCancelMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqCancelMatch message, length delimited. Does not implicitly {@link match.ReqCancelMatch.verify|verify} messages.
         * @param message ReqCancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: match.IReqCancelMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqCancelMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): match.ReqCancelMatch;

        /**
         * Decodes a ReqCancelMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): match.ReqCancelMatch;

        /**
         * Verifies a ReqCancelMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqCancelMatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqCancelMatch
         */
        public static fromObject(object: { [k: string]: any }): match.ReqCancelMatch;

        /**
         * Creates a plain object from a ReqCancelMatch message. Also converts values to other types if specified.
         * @param message ReqCancelMatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: match.ReqCancelMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqCancelMatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqCancelMatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResCancelMatch. */
    interface IResCancelMatch {

        /** ResCancelMatch success */
        success?: (boolean|null);

        /** ResCancelMatch message */
        message?: (string|null);
    }

    /** Represents a ResCancelMatch. */
    class ResCancelMatch implements IResCancelMatch {

        /**
         * Constructs a new ResCancelMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: match.IResCancelMatch);

        /** ResCancelMatch success. */
        public success: boolean;

        /** ResCancelMatch message. */
        public message: string;

        /**
         * Creates a new ResCancelMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResCancelMatch instance
         */
        public static create(properties?: match.IResCancelMatch): match.ResCancelMatch;

        /**
         * Encodes the specified ResCancelMatch message. Does not implicitly {@link match.ResCancelMatch.verify|verify} messages.
         * @param message ResCancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: match.IResCancelMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResCancelMatch message, length delimited. Does not implicitly {@link match.ResCancelMatch.verify|verify} messages.
         * @param message ResCancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: match.IResCancelMatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResCancelMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): match.ResCancelMatch;

        /**
         * Decodes a ResCancelMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): match.ResCancelMatch;

        /**
         * Verifies a ResCancelMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResCancelMatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResCancelMatch
         */
        public static fromObject(object: { [k: string]: any }): match.ResCancelMatch;

        /**
         * Creates a plain object from a ResCancelMatch message. Also converts values to other types if specified.
         * @param message ResCancelMatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: match.ResCancelMatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResCancelMatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResCancelMatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyMatchSuccess. */
    interface INotifyMatchSuccess {

        /** NotifyMatchSuccess matchId */
        matchId?: (string|null);

        /** NotifyMatchSuccess roomId */
        roomId?: (string|null);

        /** NotifyMatchSuccess players */
        players?: (Common.IPlayerInfo[]|null);
    }

    /** Represents a NotifyMatchSuccess. */
    class NotifyMatchSuccess implements INotifyMatchSuccess {

        /**
         * Constructs a new NotifyMatchSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: match.INotifyMatchSuccess);

        /** NotifyMatchSuccess matchId. */
        public matchId: string;

        /** NotifyMatchSuccess roomId. */
        public roomId: string;

        /** NotifyMatchSuccess players. */
        public players: Common.IPlayerInfo[];

        /**
         * Creates a new NotifyMatchSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyMatchSuccess instance
         */
        public static create(properties?: match.INotifyMatchSuccess): match.NotifyMatchSuccess;

        /**
         * Encodes the specified NotifyMatchSuccess message. Does not implicitly {@link match.NotifyMatchSuccess.verify|verify} messages.
         * @param message NotifyMatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: match.INotifyMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyMatchSuccess message, length delimited. Does not implicitly {@link match.NotifyMatchSuccess.verify|verify} messages.
         * @param message NotifyMatchSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: match.INotifyMatchSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyMatchSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): match.NotifyMatchSuccess;

        /**
         * Decodes a NotifyMatchSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): match.NotifyMatchSuccess;

        /**
         * Verifies a NotifyMatchSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyMatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyMatchSuccess
         */
        public static fromObject(object: { [k: string]: any }): match.NotifyMatchSuccess;

        /**
         * Creates a plain object from a NotifyMatchSuccess message. Also converts values to other types if specified.
         * @param message NotifyMatchSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: match.NotifyMatchSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyMatchSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyMatchSuccess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ProtocolNumber enum. */
    enum ProtocolNumber {
        UNKNOWN = 0,
        REQ_JOIN_MATCH = 3001,
        RES_JOIN_MATCH = 3002,
        REQ_CANCEL_MATCH = 3003,
        RES_CANCEL_MATCH = 3004,
        NOTIFY_MATCH_SUCCESS = 3005
    }
}

/** Namespace Common. */
export namespace Common {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo playerId */
        playerId?: (string|null);

        /** PlayerInfo avatar */
        avatar?: (string|null);

        /** PlayerInfo gender */
        gender?: (string|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPlayerInfo);

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo playerId. */
        public playerId: string;

        /** PlayerInfo avatar. */
        public avatar: string;

        /** PlayerInfo gender. */
        public gender: string;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: Common.IPlayerInfo): Common.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Common.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Common.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): Common.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Common.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace OnlinePlayer. */
export namespace OnlinePlayer {

    /** ProtocolNumber enum. */
    enum ProtocolNumber {
        REQ_ONINE_PLAYERS = 1,
        RES_ONINE_PLAYERS = 2,
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

    /** Properties of a ReqOnlinePlayers. */
    interface IReqOnlinePlayers {

        /** ReqOnlinePlayers playerCount */
        playerCount?: (number|null);
    }

    /** Represents a ReqOnlinePlayers. */
    class ReqOnlinePlayers implements IReqOnlinePlayers {

        /**
         * Constructs a new ReqOnlinePlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IReqOnlinePlayers);

        /** ReqOnlinePlayers playerCount. */
        public playerCount: number;

        /**
         * Creates a new ReqOnlinePlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqOnlinePlayers instance
         */
        public static create(properties?: OnlinePlayer.IReqOnlinePlayers): OnlinePlayer.ReqOnlinePlayers;

        /**
         * Encodes the specified ReqOnlinePlayers message. Does not implicitly {@link OnlinePlayer.ReqOnlinePlayers.verify|verify} messages.
         * @param message ReqOnlinePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IReqOnlinePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqOnlinePlayers message, length delimited. Does not implicitly {@link OnlinePlayer.ReqOnlinePlayers.verify|verify} messages.
         * @param message ReqOnlinePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IReqOnlinePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqOnlinePlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ReqOnlinePlayers;

        /**
         * Decodes a ReqOnlinePlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ReqOnlinePlayers;

        /**
         * Verifies a ReqOnlinePlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqOnlinePlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqOnlinePlayers
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ReqOnlinePlayers;

        /**
         * Creates a plain object from a ReqOnlinePlayers message. Also converts values to other types if specified.
         * @param message ReqOnlinePlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ReqOnlinePlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqOnlinePlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqOnlinePlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResOnlinePlayers. */
    interface IResOnlinePlayers {

        /** ResOnlinePlayers players */
        players?: (Common.IPlayerInfo[]|null);
    }

    /** Represents a ResOnlinePlayers. */
    class ResOnlinePlayers implements IResOnlinePlayers {

        /**
         * Constructs a new ResOnlinePlayers.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IResOnlinePlayers);

        /** ResOnlinePlayers players. */
        public players: Common.IPlayerInfo[];

        /**
         * Creates a new ResOnlinePlayers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResOnlinePlayers instance
         */
        public static create(properties?: OnlinePlayer.IResOnlinePlayers): OnlinePlayer.ResOnlinePlayers;

        /**
         * Encodes the specified ResOnlinePlayers message. Does not implicitly {@link OnlinePlayer.ResOnlinePlayers.verify|verify} messages.
         * @param message ResOnlinePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IResOnlinePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResOnlinePlayers message, length delimited. Does not implicitly {@link OnlinePlayer.ResOnlinePlayers.verify|verify} messages.
         * @param message ResOnlinePlayers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IResOnlinePlayers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResOnlinePlayers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ResOnlinePlayers;

        /**
         * Decodes a ResOnlinePlayers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ResOnlinePlayers;

        /**
         * Verifies a ResOnlinePlayers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResOnlinePlayers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResOnlinePlayers
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ResOnlinePlayers;

        /**
         * Creates a plain object from a ResOnlinePlayers message. Also converts values to other types if specified.
         * @param message ResOnlinePlayers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ResOnlinePlayers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResOnlinePlayers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResOnlinePlayers
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqSendLog. */
    interface IReqSendLog {

        /** ReqSendLog log */
        log?: (string|null);
    }

    /** Represents a ReqSendLog. */
    class ReqSendLog implements IReqSendLog {

        /**
         * Constructs a new ReqSendLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IReqSendLog);

        /** ReqSendLog log. */
        public log: string;

        /**
         * Creates a new ReqSendLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendLog instance
         */
        public static create(properties?: OnlinePlayer.IReqSendLog): OnlinePlayer.ReqSendLog;

        /**
         * Encodes the specified ReqSendLog message. Does not implicitly {@link OnlinePlayer.ReqSendLog.verify|verify} messages.
         * @param message ReqSendLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IReqSendLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSendLog message, length delimited. Does not implicitly {@link OnlinePlayer.ReqSendLog.verify|verify} messages.
         * @param message ReqSendLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IReqSendLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSendLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ReqSendLog;

        /**
         * Decodes a ReqSendLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ReqSendLog;

        /**
         * Verifies a ReqSendLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSendLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSendLog
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ReqSendLog;

        /**
         * Creates a plain object from a ReqSendLog message. Also converts values to other types if specified.
         * @param message ReqSendLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ReqSendLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSendLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqSendLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResSendLog. */
    interface IResSendLog {

        /** ResSendLog success */
        success?: (boolean|null);
    }

    /** Represents a ResSendLog. */
    class ResSendLog implements IResSendLog {

        /**
         * Constructs a new ResSendLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IResSendLog);

        /** ResSendLog success. */
        public success: boolean;

        /**
         * Creates a new ResSendLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResSendLog instance
         */
        public static create(properties?: OnlinePlayer.IResSendLog): OnlinePlayer.ResSendLog;

        /**
         * Encodes the specified ResSendLog message. Does not implicitly {@link OnlinePlayer.ResSendLog.verify|verify} messages.
         * @param message ResSendLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IResSendLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResSendLog message, length delimited. Does not implicitly {@link OnlinePlayer.ResSendLog.verify|verify} messages.
         * @param message ResSendLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IResSendLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResSendLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ResSendLog;

        /**
         * Decodes a ResSendLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ResSendLog;

        /**
         * Verifies a ResSendLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResSendLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResSendLog
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ResSendLog;

        /**
         * Creates a plain object from a ResSendLog message. Also converts values to other types if specified.
         * @param message ResSendLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ResSendLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResSendLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResSendLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqReceiveLog. */
    interface IReqReceiveLog {

        /** ReqReceiveLog playerId */
        playerId?: (string|null);
    }

    /** Represents a ReqReceiveLog. */
    class ReqReceiveLog implements IReqReceiveLog {

        /**
         * Constructs a new ReqReceiveLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IReqReceiveLog);

        /** ReqReceiveLog playerId. */
        public playerId: string;

        /**
         * Creates a new ReqReceiveLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqReceiveLog instance
         */
        public static create(properties?: OnlinePlayer.IReqReceiveLog): OnlinePlayer.ReqReceiveLog;

        /**
         * Encodes the specified ReqReceiveLog message. Does not implicitly {@link OnlinePlayer.ReqReceiveLog.verify|verify} messages.
         * @param message ReqReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IReqReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.ReqReceiveLog.verify|verify} messages.
         * @param message ReqReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IReqReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqReceiveLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ReqReceiveLog;

        /**
         * Decodes a ReqReceiveLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ReqReceiveLog;

        /**
         * Verifies a ReqReceiveLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqReceiveLog
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ReqReceiveLog;

        /**
         * Creates a plain object from a ReqReceiveLog message. Also converts values to other types if specified.
         * @param message ReqReceiveLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ReqReceiveLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqReceiveLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqReceiveLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResReceiveLog. */
    interface IResReceiveLog {

        /** ResReceiveLog success */
        success?: (boolean|null);
    }

    /** Represents a ResReceiveLog. */
    class ResReceiveLog implements IResReceiveLog {

        /**
         * Constructs a new ResReceiveLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IResReceiveLog);

        /** ResReceiveLog success. */
        public success: boolean;

        /**
         * Creates a new ResReceiveLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResReceiveLog instance
         */
        public static create(properties?: OnlinePlayer.IResReceiveLog): OnlinePlayer.ResReceiveLog;

        /**
         * Encodes the specified ResReceiveLog message. Does not implicitly {@link OnlinePlayer.ResReceiveLog.verify|verify} messages.
         * @param message ResReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IResReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.ResReceiveLog.verify|verify} messages.
         * @param message ResReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IResReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResReceiveLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ResReceiveLog;

        /**
         * Decodes a ResReceiveLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ResReceiveLog;

        /**
         * Verifies a ResReceiveLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResReceiveLog
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ResReceiveLog;

        /**
         * Creates a plain object from a ResReceiveLog message. Also converts values to other types if specified.
         * @param message ResReceiveLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ResReceiveLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResReceiveLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResReceiveLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyReceiveLog. */
    interface INotifyReceiveLog {

        /** NotifyReceiveLog playerId */
        playerId?: (string|null);

        /** NotifyReceiveLog log */
        log?: (string|null);
    }

    /** Represents a NotifyReceiveLog. */
    class NotifyReceiveLog implements INotifyReceiveLog {

        /**
         * Constructs a new NotifyReceiveLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.INotifyReceiveLog);

        /** NotifyReceiveLog playerId. */
        public playerId: string;

        /** NotifyReceiveLog log. */
        public log: string;

        /**
         * Creates a new NotifyReceiveLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyReceiveLog instance
         */
        public static create(properties?: OnlinePlayer.INotifyReceiveLog): OnlinePlayer.NotifyReceiveLog;

        /**
         * Encodes the specified NotifyReceiveLog message. Does not implicitly {@link OnlinePlayer.NotifyReceiveLog.verify|verify} messages.
         * @param message NotifyReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.INotifyReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.NotifyReceiveLog.verify|verify} messages.
         * @param message NotifyReceiveLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.INotifyReceiveLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyReceiveLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.NotifyReceiveLog;

        /**
         * Decodes a NotifyReceiveLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.NotifyReceiveLog;

        /**
         * Verifies a NotifyReceiveLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyReceiveLog
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.NotifyReceiveLog;

        /**
         * Creates a plain object from a NotifyReceiveLog message. Also converts values to other types if specified.
         * @param message NotifyReceiveLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.NotifyReceiveLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyReceiveLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyReceiveLog
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqEvalCode. */
    interface IReqEvalCode {

        /** ReqEvalCode playerId */
        playerId?: (string|null);

        /** ReqEvalCode code */
        code?: (string|null);
    }

    /** Represents a ReqEvalCode. */
    class ReqEvalCode implements IReqEvalCode {

        /**
         * Constructs a new ReqEvalCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IReqEvalCode);

        /** ReqEvalCode playerId. */
        public playerId: string;

        /** ReqEvalCode code. */
        public code: string;

        /**
         * Creates a new ReqEvalCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEvalCode instance
         */
        public static create(properties?: OnlinePlayer.IReqEvalCode): OnlinePlayer.ReqEvalCode;

        /**
         * Encodes the specified ReqEvalCode message. Does not implicitly {@link OnlinePlayer.ReqEvalCode.verify|verify} messages.
         * @param message ReqEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IReqEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.ReqEvalCode.verify|verify} messages.
         * @param message ReqEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IReqEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEvalCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ReqEvalCode;

        /**
         * Decodes a ReqEvalCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ReqEvalCode;

        /**
         * Verifies a ReqEvalCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEvalCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEvalCode
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ReqEvalCode;

        /**
         * Creates a plain object from a ReqEvalCode message. Also converts values to other types if specified.
         * @param message ReqEvalCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ReqEvalCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEvalCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqEvalCode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResEvalCode. */
    interface IResEvalCode {

        /** ResEvalCode success */
        success?: (boolean|null);
    }

    /** Represents a ResEvalCode. */
    class ResEvalCode implements IResEvalCode {

        /**
         * Constructs a new ResEvalCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.IResEvalCode);

        /** ResEvalCode success. */
        public success: boolean;

        /**
         * Creates a new ResEvalCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResEvalCode instance
         */
        public static create(properties?: OnlinePlayer.IResEvalCode): OnlinePlayer.ResEvalCode;

        /**
         * Encodes the specified ResEvalCode message. Does not implicitly {@link OnlinePlayer.ResEvalCode.verify|verify} messages.
         * @param message ResEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.IResEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.ResEvalCode.verify|verify} messages.
         * @param message ResEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.IResEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResEvalCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.ResEvalCode;

        /**
         * Decodes a ResEvalCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.ResEvalCode;

        /**
         * Verifies a ResEvalCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResEvalCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResEvalCode
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.ResEvalCode;

        /**
         * Creates a plain object from a ResEvalCode message. Also converts values to other types if specified.
         * @param message ResEvalCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.ResEvalCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResEvalCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResEvalCode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyEvalCode. */
    interface INotifyEvalCode {

        /** NotifyEvalCode code */
        code?: (string|null);

        /** NotifyEvalCode result */
        result?: (string|null);
    }

    /** Represents a NotifyEvalCode. */
    class NotifyEvalCode implements INotifyEvalCode {

        /**
         * Constructs a new NotifyEvalCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: OnlinePlayer.INotifyEvalCode);

        /** NotifyEvalCode code. */
        public code: string;

        /** NotifyEvalCode result. */
        public result: string;

        /**
         * Creates a new NotifyEvalCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyEvalCode instance
         */
        public static create(properties?: OnlinePlayer.INotifyEvalCode): OnlinePlayer.NotifyEvalCode;

        /**
         * Encodes the specified NotifyEvalCode message. Does not implicitly {@link OnlinePlayer.NotifyEvalCode.verify|verify} messages.
         * @param message NotifyEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OnlinePlayer.INotifyEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.NotifyEvalCode.verify|verify} messages.
         * @param message NotifyEvalCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OnlinePlayer.INotifyEvalCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyEvalCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OnlinePlayer.NotifyEvalCode;

        /**
         * Decodes a NotifyEvalCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OnlinePlayer.NotifyEvalCode;

        /**
         * Verifies a NotifyEvalCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyEvalCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyEvalCode
         */
        public static fromObject(object: { [k: string]: any }): OnlinePlayer.NotifyEvalCode;

        /**
         * Creates a plain object from a NotifyEvalCode message. Also converts values to other types if specified.
         * @param message NotifyEvalCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OnlinePlayer.NotifyEvalCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyEvalCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyEvalCode
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace pokemonGuess. */
export namespace pokemonGuess {

    /** ProtocolNumber enum. */
    enum ProtocolNumber {
        UNKNOWN = 0,
        REQ_UPDATE_GAME_SETTINGS = 4001,
        RES_UPDATE_GAME_SETTINGS = 4002,
        REQ_START_GAME = 4010,
        RES_START_GAME = 4011,
        REQ_END_GAME = 4012,
        RES_END_GAME = 4013,
        REQ_SUBMIT_GUESS = 4020,
        RES_SUBMIT_GUESS = 4021,
        NOTIFY_GAME_STATE = 4030,
        NOTIFY_GAME_STARTED = 4031,
        NOTIFY_GAME_ENDED = 4032,
        NOTIFY_SETTINGS_CHANGED = 4033,
        NOTIFY_PLAYER_DETAIL = 4034
    }

    /** PlayerStatus enum. */
    enum PlayerStatus {
        ACTIVE = 0,
        FOUND_ANSWER = 1,
        OUT_OF_ATTEMPTS = 2,
        GAVE_UP = 3,
        DISCONNECTED = 4
    }

    /** GameState enum. */
    enum GameState {
        WAITING = 0,
        IN_PROGRESS = 1,
        ENDED = 2
    }

    /** GuessResultStatus enum. */
    enum GuessResultStatus {
        GUESS_UNKNOWN = 0,
        GUESS_CORRECT = 1,
        GUESS_WRONG = 2,
        GUESS_GAVE_UP = 3,
        GUESS_DISCONNECTED = 4
    }

    /** Properties of a GuessResultSummary. */
    interface IGuessResultSummary {

        /** GuessResultSummary attemptNumber */
        attemptNumber?: (number|null);

        /** GuessResultSummary status */
        status?: (pokemonGuess.GuessResultStatus|null);

        /** GuessResultSummary timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a GuessResultSummary. */
    class GuessResultSummary implements IGuessResultSummary {

        /**
         * Constructs a new GuessResultSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IGuessResultSummary);

        /** GuessResultSummary attemptNumber. */
        public attemptNumber: number;

        /** GuessResultSummary status. */
        public status: pokemonGuess.GuessResultStatus;

        /** GuessResultSummary timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new GuessResultSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuessResultSummary instance
         */
        public static create(properties?: pokemonGuess.IGuessResultSummary): pokemonGuess.GuessResultSummary;

        /**
         * Encodes the specified GuessResultSummary message. Does not implicitly {@link pokemonGuess.GuessResultSummary.verify|verify} messages.
         * @param message GuessResultSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IGuessResultSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuessResultSummary message, length delimited. Does not implicitly {@link pokemonGuess.GuessResultSummary.verify|verify} messages.
         * @param message GuessResultSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IGuessResultSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuessResultSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuessResultSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.GuessResultSummary;

        /**
         * Decodes a GuessResultSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuessResultSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.GuessResultSummary;

        /**
         * Verifies a GuessResultSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuessResultSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuessResultSummary
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.GuessResultSummary;

        /**
         * Creates a plain object from a GuessResultSummary message. Also converts values to other types if specified.
         * @param message GuessResultSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.GuessResultSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuessResultSummary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GuessResultSummary
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AttributeComparison. */
    interface IAttributeComparison {

        /** AttributeComparison key */
        key?: (string|null);

        /** AttributeComparison value */
        value?: (string|null);

        /** AttributeComparison distance */
        distance?: (string|null);
    }

    /** Represents an AttributeComparison. */
    class AttributeComparison implements IAttributeComparison {

        /**
         * Constructs a new AttributeComparison.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IAttributeComparison);

        /** AttributeComparison key. */
        public key: string;

        /** AttributeComparison value. */
        public value: string;

        /** AttributeComparison distance. */
        public distance: string;

        /**
         * Creates a new AttributeComparison instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttributeComparison instance
         */
        public static create(properties?: pokemonGuess.IAttributeComparison): pokemonGuess.AttributeComparison;

        /**
         * Encodes the specified AttributeComparison message. Does not implicitly {@link pokemonGuess.AttributeComparison.verify|verify} messages.
         * @param message AttributeComparison message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IAttributeComparison, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttributeComparison message, length delimited. Does not implicitly {@link pokemonGuess.AttributeComparison.verify|verify} messages.
         * @param message AttributeComparison message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IAttributeComparison, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttributeComparison message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttributeComparison
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.AttributeComparison;

        /**
         * Decodes an AttributeComparison message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttributeComparison
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.AttributeComparison;

        /**
         * Verifies an AttributeComparison message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttributeComparison message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttributeComparison
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.AttributeComparison;

        /**
         * Creates a plain object from an AttributeComparison message. Also converts values to other types if specified.
         * @param message AttributeComparison
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.AttributeComparison, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttributeComparison to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttributeComparison
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerGuessDetail. */
    interface IPlayerGuessDetail {

        /** PlayerGuessDetail attemptNumber */
        attemptNumber?: (number|null);

        /** PlayerGuessDetail pokemonName */
        pokemonName?: (string|null);

        /** PlayerGuessDetail status */
        status?: (pokemonGuess.GuessResultStatus|null);

        /** PlayerGuessDetail timestamp */
        timestamp?: (number|Long|null);

        /** PlayerGuessDetail type */
        type?: (pokemonGuess.IAttributeComparison[]|null);

        /** PlayerGuessDetail power */
        power?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail speed */
        speed?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail attack */
        attack?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail defense */
        defense?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail generation */
        generation?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail shape */
        shape?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail evolution */
        evolution?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail catchRate */
        catchRate?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail abilities */
        abilities?: (pokemonGuess.IAttributeComparison[]|null);

        /** PlayerGuessDetail eggs */
        eggs?: (pokemonGuess.IAttributeComparison[]|null);

        /** PlayerGuessDetail labels */
        labels?: (pokemonGuess.IAttributeComparison[]|null);

        /** PlayerGuessDetail stage */
        stage?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail color */
        color?: (string|null);
    }

    /** Represents a PlayerGuessDetail. */
    class PlayerGuessDetail implements IPlayerGuessDetail {

        /**
         * Constructs a new PlayerGuessDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IPlayerGuessDetail);

        /** PlayerGuessDetail attemptNumber. */
        public attemptNumber: number;

        /** PlayerGuessDetail pokemonName. */
        public pokemonName: string;

        /** PlayerGuessDetail status. */
        public status: pokemonGuess.GuessResultStatus;

        /** PlayerGuessDetail timestamp. */
        public timestamp: (number|Long);

        /** PlayerGuessDetail type. */
        public type: pokemonGuess.IAttributeComparison[];

        /** PlayerGuessDetail power. */
        public power?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail speed. */
        public speed?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail attack. */
        public attack?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail defense. */
        public defense?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail generation. */
        public generation?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail shape. */
        public shape?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail evolution. */
        public evolution?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail catchRate. */
        public catchRate?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail abilities. */
        public abilities: pokemonGuess.IAttributeComparison[];

        /** PlayerGuessDetail eggs. */
        public eggs: pokemonGuess.IAttributeComparison[];

        /** PlayerGuessDetail labels. */
        public labels: pokemonGuess.IAttributeComparison[];

        /** PlayerGuessDetail stage. */
        public stage?: (pokemonGuess.IAttributeComparison|null);

        /** PlayerGuessDetail color. */
        public color: string;

        /**
         * Creates a new PlayerGuessDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerGuessDetail instance
         */
        public static create(properties?: pokemonGuess.IPlayerGuessDetail): pokemonGuess.PlayerGuessDetail;

        /**
         * Encodes the specified PlayerGuessDetail message. Does not implicitly {@link pokemonGuess.PlayerGuessDetail.verify|verify} messages.
         * @param message PlayerGuessDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IPlayerGuessDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerGuessDetail message, length delimited. Does not implicitly {@link pokemonGuess.PlayerGuessDetail.verify|verify} messages.
         * @param message PlayerGuessDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IPlayerGuessDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerGuessDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerGuessDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.PlayerGuessDetail;

        /**
         * Decodes a PlayerGuessDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerGuessDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.PlayerGuessDetail;

        /**
         * Verifies a PlayerGuessDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerGuessDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerGuessDetail
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.PlayerGuessDetail;

        /**
         * Creates a plain object from a PlayerGuessDetail message. Also converts values to other types if specified.
         * @param message PlayerGuessDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.PlayerGuessDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerGuessDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerGuessDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo playerId */
        playerId?: (string|null);

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo avatarUrl */
        avatarUrl?: (string|null);

        /** PlayerInfo isHost */
        isHost?: (boolean|null);

        /** PlayerInfo status */
        status?: (pokemonGuess.PlayerStatus|null);

        /** PlayerInfo attemptsUsed */
        attemptsUsed?: (number|null);

        /** PlayerInfo lastActivityTime */
        lastActivityTime?: (number|Long|null);

        /** PlayerInfo guessHistory */
        guessHistory?: (pokemonGuess.IGuessResultSummary[]|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IPlayerInfo);

        /** PlayerInfo playerId. */
        public playerId: string;

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo avatarUrl. */
        public avatarUrl: string;

        /** PlayerInfo isHost. */
        public isHost: boolean;

        /** PlayerInfo status. */
        public status: pokemonGuess.PlayerStatus;

        /** PlayerInfo attemptsUsed. */
        public attemptsUsed: number;

        /** PlayerInfo lastActivityTime. */
        public lastActivityTime: (number|Long);

        /** PlayerInfo guessHistory. */
        public guessHistory: pokemonGuess.IGuessResultSummary[];

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: pokemonGuess.IPlayerInfo): pokemonGuess.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link pokemonGuess.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link pokemonGuess.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerDetailInfo. */
    interface IPlayerDetailInfo {

        /** PlayerDetailInfo playerId */
        playerId?: (string|null);

        /** PlayerDetailInfo nickname */
        nickname?: (string|null);

        /** PlayerDetailInfo avatarUrl */
        avatarUrl?: (string|null);

        /** PlayerDetailInfo isHost */
        isHost?: (boolean|null);

        /** PlayerDetailInfo status */
        status?: (pokemonGuess.PlayerStatus|null);

        /** PlayerDetailInfo attemptsUsed */
        attemptsUsed?: (number|null);

        /** PlayerDetailInfo lastActivityTime */
        lastActivityTime?: (number|Long|null);

        /** PlayerDetailInfo guessDetails */
        guessDetails?: (pokemonGuess.IPlayerGuessDetail[]|null);
    }

    /** Represents a PlayerDetailInfo. */
    class PlayerDetailInfo implements IPlayerDetailInfo {

        /**
         * Constructs a new PlayerDetailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IPlayerDetailInfo);

        /** PlayerDetailInfo playerId. */
        public playerId: string;

        /** PlayerDetailInfo nickname. */
        public nickname: string;

        /** PlayerDetailInfo avatarUrl. */
        public avatarUrl: string;

        /** PlayerDetailInfo isHost. */
        public isHost: boolean;

        /** PlayerDetailInfo status. */
        public status: pokemonGuess.PlayerStatus;

        /** PlayerDetailInfo attemptsUsed. */
        public attemptsUsed: number;

        /** PlayerDetailInfo lastActivityTime. */
        public lastActivityTime: (number|Long);

        /** PlayerDetailInfo guessDetails. */
        public guessDetails: pokemonGuess.IPlayerGuessDetail[];

        /**
         * Creates a new PlayerDetailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerDetailInfo instance
         */
        public static create(properties?: pokemonGuess.IPlayerDetailInfo): pokemonGuess.PlayerDetailInfo;

        /**
         * Encodes the specified PlayerDetailInfo message. Does not implicitly {@link pokemonGuess.PlayerDetailInfo.verify|verify} messages.
         * @param message PlayerDetailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IPlayerDetailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerDetailInfo message, length delimited. Does not implicitly {@link pokemonGuess.PlayerDetailInfo.verify|verify} messages.
         * @param message PlayerDetailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IPlayerDetailInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerDetailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.PlayerDetailInfo;

        /**
         * Decodes a PlayerDetailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.PlayerDetailInfo;

        /**
         * Verifies a PlayerDetailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerDetailInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerDetailInfo
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.PlayerDetailInfo;

        /**
         * Creates a plain object from a PlayerDetailInfo message. Also converts values to other types if specified.
         * @param message PlayerDetailInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.PlayerDetailInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerDetailInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerDetailInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameSettings. */
    interface IGameSettings {

        /** GameSettings maxAttempts */
        maxAttempts?: (number|null);

        /** GameSettings pokemonRange */
        pokemonRange?: (string|null);

        /** GameSettings firstCorrectEnds */
        firstCorrectEnds?: (boolean|null);

        /** GameSettings timeLimitSeconds */
        timeLimitSeconds?: (number|null);
    }

    /** Represents a GameSettings. */
    class GameSettings implements IGameSettings {

        /**
         * Constructs a new GameSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IGameSettings);

        /** GameSettings maxAttempts. */
        public maxAttempts: number;

        /** GameSettings pokemonRange. */
        public pokemonRange: string;

        /** GameSettings firstCorrectEnds. */
        public firstCorrectEnds: boolean;

        /** GameSettings timeLimitSeconds. */
        public timeLimitSeconds: number;

        /**
         * Creates a new GameSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSettings instance
         */
        public static create(properties?: pokemonGuess.IGameSettings): pokemonGuess.GameSettings;

        /**
         * Encodes the specified GameSettings message. Does not implicitly {@link pokemonGuess.GameSettings.verify|verify} messages.
         * @param message GameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSettings message, length delimited. Does not implicitly {@link pokemonGuess.GameSettings.verify|verify} messages.
         * @param message GameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.GameSettings;

        /**
         * Decodes a GameSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.GameSettings;

        /**
         * Verifies a GameSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSettings
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.GameSettings;

        /**
         * Creates a plain object from a GameSettings message. Also converts values to other types if specified.
         * @param message GameSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.GameSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PlayerRank. */
    interface IPlayerRank {

        /** PlayerRank playerId */
        playerId?: (string|null);

        /** PlayerRank nickname */
        nickname?: (string|null);

        /** PlayerRank attemptsUsed */
        attemptsUsed?: (number|null);

        /** PlayerRank timeUsedSeconds */
        timeUsedSeconds?: (number|null);

        /** PlayerRank finalStatus */
        finalStatus?: (pokemonGuess.PlayerStatus|null);

        /** PlayerRank score */
        score?: (number|null);

        /** PlayerRank rank */
        rank?: (number|null);
    }

    /** Represents a PlayerRank. */
    class PlayerRank implements IPlayerRank {

        /**
         * Constructs a new PlayerRank.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IPlayerRank);

        /** PlayerRank playerId. */
        public playerId: string;

        /** PlayerRank nickname. */
        public nickname: string;

        /** PlayerRank attemptsUsed. */
        public attemptsUsed: number;

        /** PlayerRank timeUsedSeconds. */
        public timeUsedSeconds: number;

        /** PlayerRank finalStatus. */
        public finalStatus: pokemonGuess.PlayerStatus;

        /** PlayerRank score. */
        public score: number;

        /** PlayerRank rank. */
        public rank: number;

        /**
         * Creates a new PlayerRank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerRank instance
         */
        public static create(properties?: pokemonGuess.IPlayerRank): pokemonGuess.PlayerRank;

        /**
         * Encodes the specified PlayerRank message. Does not implicitly {@link pokemonGuess.PlayerRank.verify|verify} messages.
         * @param message PlayerRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IPlayerRank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerRank message, length delimited. Does not implicitly {@link pokemonGuess.PlayerRank.verify|verify} messages.
         * @param message PlayerRank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IPlayerRank, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.PlayerRank;

        /**
         * Decodes a PlayerRank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.PlayerRank;

        /**
         * Verifies a PlayerRank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerRank message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerRank
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.PlayerRank;

        /**
         * Creates a plain object from a PlayerRank message. Also converts values to other types if specified.
         * @param message PlayerRank
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.PlayerRank, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerRank to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlayerRank
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqUpdateGameSettings. */
    interface IReqUpdateGameSettings {

        /** ReqUpdateGameSettings settings */
        settings?: (pokemonGuess.IGameSettings|null);
    }

    /** Represents a ReqUpdateGameSettings. */
    class ReqUpdateGameSettings implements IReqUpdateGameSettings {

        /**
         * Constructs a new ReqUpdateGameSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IReqUpdateGameSettings);

        /** ReqUpdateGameSettings settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /**
         * Creates a new ReqUpdateGameSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqUpdateGameSettings instance
         */
        public static create(properties?: pokemonGuess.IReqUpdateGameSettings): pokemonGuess.ReqUpdateGameSettings;

        /**
         * Encodes the specified ReqUpdateGameSettings message. Does not implicitly {@link pokemonGuess.ReqUpdateGameSettings.verify|verify} messages.
         * @param message ReqUpdateGameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IReqUpdateGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqUpdateGameSettings message, length delimited. Does not implicitly {@link pokemonGuess.ReqUpdateGameSettings.verify|verify} messages.
         * @param message ReqUpdateGameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IReqUpdateGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqUpdateGameSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ReqUpdateGameSettings;

        /**
         * Decodes a ReqUpdateGameSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ReqUpdateGameSettings;

        /**
         * Verifies a ReqUpdateGameSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqUpdateGameSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqUpdateGameSettings
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ReqUpdateGameSettings;

        /**
         * Creates a plain object from a ReqUpdateGameSettings message. Also converts values to other types if specified.
         * @param message ReqUpdateGameSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ReqUpdateGameSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqUpdateGameSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqUpdateGameSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqStartGame. */
    interface IReqStartGame {

        /** ReqStartGame settings */
        settings?: (pokemonGuess.IGameSettings|null);
    }

    /** Represents a ReqStartGame. */
    class ReqStartGame implements IReqStartGame {

        /**
         * Constructs a new ReqStartGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IReqStartGame);

        /** ReqStartGame settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /**
         * Creates a new ReqStartGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqStartGame instance
         */
        public static create(properties?: pokemonGuess.IReqStartGame): pokemonGuess.ReqStartGame;

        /**
         * Encodes the specified ReqStartGame message. Does not implicitly {@link pokemonGuess.ReqStartGame.verify|verify} messages.
         * @param message ReqStartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IReqStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqStartGame message, length delimited. Does not implicitly {@link pokemonGuess.ReqStartGame.verify|verify} messages.
         * @param message ReqStartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IReqStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqStartGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ReqStartGame;

        /**
         * Decodes a ReqStartGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ReqStartGame;

        /**
         * Verifies a ReqStartGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqStartGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqStartGame
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ReqStartGame;

        /**
         * Creates a plain object from a ReqStartGame message. Also converts values to other types if specified.
         * @param message ReqStartGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ReqStartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqStartGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqStartGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqSubmitGuess. */
    interface IReqSubmitGuess {

        /** ReqSubmitGuess pokemonName */
        pokemonName?: (string|null);

        /** ReqSubmitGuess attemptNumber */
        attemptNumber?: (number|null);
    }

    /** Represents a ReqSubmitGuess. */
    class ReqSubmitGuess implements IReqSubmitGuess {

        /**
         * Constructs a new ReqSubmitGuess.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IReqSubmitGuess);

        /** ReqSubmitGuess pokemonName. */
        public pokemonName: string;

        /** ReqSubmitGuess attemptNumber. */
        public attemptNumber: number;

        /**
         * Creates a new ReqSubmitGuess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSubmitGuess instance
         */
        public static create(properties?: pokemonGuess.IReqSubmitGuess): pokemonGuess.ReqSubmitGuess;

        /**
         * Encodes the specified ReqSubmitGuess message. Does not implicitly {@link pokemonGuess.ReqSubmitGuess.verify|verify} messages.
         * @param message ReqSubmitGuess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IReqSubmitGuess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqSubmitGuess message, length delimited. Does not implicitly {@link pokemonGuess.ReqSubmitGuess.verify|verify} messages.
         * @param message ReqSubmitGuess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IReqSubmitGuess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqSubmitGuess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ReqSubmitGuess;

        /**
         * Decodes a ReqSubmitGuess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ReqSubmitGuess;

        /**
         * Verifies a ReqSubmitGuess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqSubmitGuess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqSubmitGuess
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ReqSubmitGuess;

        /**
         * Creates a plain object from a ReqSubmitGuess message. Also converts values to other types if specified.
         * @param message ReqSubmitGuess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ReqSubmitGuess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqSubmitGuess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqSubmitGuess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReqEndGame. */
    interface IReqEndGame {

        /** ReqEndGame isGivingUp */
        isGivingUp?: (boolean|null);
    }

    /** Represents a ReqEndGame. */
    class ReqEndGame implements IReqEndGame {

        /**
         * Constructs a new ReqEndGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IReqEndGame);

        /** ReqEndGame isGivingUp. */
        public isGivingUp: boolean;

        /**
         * Creates a new ReqEndGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEndGame instance
         */
        public static create(properties?: pokemonGuess.IReqEndGame): pokemonGuess.ReqEndGame;

        /**
         * Encodes the specified ReqEndGame message. Does not implicitly {@link pokemonGuess.ReqEndGame.verify|verify} messages.
         * @param message ReqEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IReqEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEndGame message, length delimited. Does not implicitly {@link pokemonGuess.ReqEndGame.verify|verify} messages.
         * @param message ReqEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IReqEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEndGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ReqEndGame;

        /**
         * Decodes a ReqEndGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ReqEndGame;

        /**
         * Verifies a ReqEndGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEndGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEndGame
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ReqEndGame;

        /**
         * Creates a plain object from a ReqEndGame message. Also converts values to other types if specified.
         * @param message ReqEndGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ReqEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEndGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReqEndGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResUpdateGameSettings. */
    interface IResUpdateGameSettings {

        /** ResUpdateGameSettings success */
        success?: (boolean|null);

        /** ResUpdateGameSettings errorMessage */
        errorMessage?: (string|null);

        /** ResUpdateGameSettings settings */
        settings?: (pokemonGuess.IGameSettings|null);
    }

    /** Represents a ResUpdateGameSettings. */
    class ResUpdateGameSettings implements IResUpdateGameSettings {

        /**
         * Constructs a new ResUpdateGameSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IResUpdateGameSettings);

        /** ResUpdateGameSettings success. */
        public success: boolean;

        /** ResUpdateGameSettings errorMessage. */
        public errorMessage: string;

        /** ResUpdateGameSettings settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /**
         * Creates a new ResUpdateGameSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResUpdateGameSettings instance
         */
        public static create(properties?: pokemonGuess.IResUpdateGameSettings): pokemonGuess.ResUpdateGameSettings;

        /**
         * Encodes the specified ResUpdateGameSettings message. Does not implicitly {@link pokemonGuess.ResUpdateGameSettings.verify|verify} messages.
         * @param message ResUpdateGameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IResUpdateGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResUpdateGameSettings message, length delimited. Does not implicitly {@link pokemonGuess.ResUpdateGameSettings.verify|verify} messages.
         * @param message ResUpdateGameSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IResUpdateGameSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResUpdateGameSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ResUpdateGameSettings;

        /**
         * Decodes a ResUpdateGameSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ResUpdateGameSettings;

        /**
         * Verifies a ResUpdateGameSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResUpdateGameSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResUpdateGameSettings
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ResUpdateGameSettings;

        /**
         * Creates a plain object from a ResUpdateGameSettings message. Also converts values to other types if specified.
         * @param message ResUpdateGameSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ResUpdateGameSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResUpdateGameSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResUpdateGameSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResStartGame. */
    interface IResStartGame {

        /** ResStartGame success */
        success?: (boolean|null);

        /** ResStartGame errorMessage */
        errorMessage?: (string|null);

        /** ResStartGame settings */
        settings?: (pokemonGuess.IGameSettings|null);

        /** ResStartGame startTimestamp */
        startTimestamp?: (number|Long|null);
    }

    /** Represents a ResStartGame. */
    class ResStartGame implements IResStartGame {

        /**
         * Constructs a new ResStartGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IResStartGame);

        /** ResStartGame success. */
        public success: boolean;

        /** ResStartGame errorMessage. */
        public errorMessage: string;

        /** ResStartGame settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /** ResStartGame startTimestamp. */
        public startTimestamp: (number|Long);

        /**
         * Creates a new ResStartGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResStartGame instance
         */
        public static create(properties?: pokemonGuess.IResStartGame): pokemonGuess.ResStartGame;

        /**
         * Encodes the specified ResStartGame message. Does not implicitly {@link pokemonGuess.ResStartGame.verify|verify} messages.
         * @param message ResStartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IResStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResStartGame message, length delimited. Does not implicitly {@link pokemonGuess.ResStartGame.verify|verify} messages.
         * @param message ResStartGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IResStartGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResStartGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ResStartGame;

        /**
         * Decodes a ResStartGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ResStartGame;

        /**
         * Verifies a ResStartGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResStartGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResStartGame
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ResStartGame;

        /**
         * Creates a plain object from a ResStartGame message. Also converts values to other types if specified.
         * @param message ResStartGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ResStartGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResStartGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResStartGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResSubmitGuess. */
    interface IResSubmitGuess {

        /** ResSubmitGuess success */
        success?: (boolean|null);

        /** ResSubmitGuess errorMessage */
        errorMessage?: (string|null);

        /** ResSubmitGuess guessDetail */
        guessDetail?: (pokemonGuess.IPlayerGuessDetail|null);

        /** ResSubmitGuess attemptsRemaining */
        attemptsRemaining?: (number|null);
    }

    /** Represents a ResSubmitGuess. */
    class ResSubmitGuess implements IResSubmitGuess {

        /**
         * Constructs a new ResSubmitGuess.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IResSubmitGuess);

        /** ResSubmitGuess success. */
        public success: boolean;

        /** ResSubmitGuess errorMessage. */
        public errorMessage: string;

        /** ResSubmitGuess guessDetail. */
        public guessDetail?: (pokemonGuess.IPlayerGuessDetail|null);

        /** ResSubmitGuess attemptsRemaining. */
        public attemptsRemaining: number;

        /**
         * Creates a new ResSubmitGuess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResSubmitGuess instance
         */
        public static create(properties?: pokemonGuess.IResSubmitGuess): pokemonGuess.ResSubmitGuess;

        /**
         * Encodes the specified ResSubmitGuess message. Does not implicitly {@link pokemonGuess.ResSubmitGuess.verify|verify} messages.
         * @param message ResSubmitGuess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IResSubmitGuess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResSubmitGuess message, length delimited. Does not implicitly {@link pokemonGuess.ResSubmitGuess.verify|verify} messages.
         * @param message ResSubmitGuess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IResSubmitGuess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResSubmitGuess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ResSubmitGuess;

        /**
         * Decodes a ResSubmitGuess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ResSubmitGuess;

        /**
         * Verifies a ResSubmitGuess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResSubmitGuess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResSubmitGuess
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ResSubmitGuess;

        /**
         * Creates a plain object from a ResSubmitGuess message. Also converts values to other types if specified.
         * @param message ResSubmitGuess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ResSubmitGuess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResSubmitGuess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResSubmitGuess
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ResEndGame. */
    interface IResEndGame {

        /** ResEndGame success */
        success?: (boolean|null);

        /** ResEndGame errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a ResEndGame. */
    class ResEndGame implements IResEndGame {

        /**
         * Constructs a new ResEndGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.IResEndGame);

        /** ResEndGame success. */
        public success: boolean;

        /** ResEndGame errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new ResEndGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResEndGame instance
         */
        public static create(properties?: pokemonGuess.IResEndGame): pokemonGuess.ResEndGame;

        /**
         * Encodes the specified ResEndGame message. Does not implicitly {@link pokemonGuess.ResEndGame.verify|verify} messages.
         * @param message ResEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.IResEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResEndGame message, length delimited. Does not implicitly {@link pokemonGuess.ResEndGame.verify|verify} messages.
         * @param message ResEndGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.IResEndGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResEndGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.ResEndGame;

        /**
         * Decodes a ResEndGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.ResEndGame;

        /**
         * Verifies a ResEndGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResEndGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResEndGame
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.ResEndGame;

        /**
         * Creates a plain object from a ResEndGame message. Also converts values to other types if specified.
         * @param message ResEndGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.ResEndGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResEndGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResEndGame
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGameState. */
    interface INotifyGameState {

        /** NotifyGameState state */
        state?: (pokemonGuess.GameState|null);

        /** NotifyGameState players */
        players?: (pokemonGuess.IPlayerInfo[]|null);

        /** NotifyGameState settings */
        settings?: (pokemonGuess.IGameSettings|null);

        /** NotifyGameState startTimestamp */
        startTimestamp?: (number|Long|null);

        /** NotifyGameState remainingTimeSeconds */
        remainingTimeSeconds?: (number|Long|null);

        /** NotifyGameState hostId */
        hostId?: (string|null);

        /** NotifyGameState updatedReason */
        updatedReason?: (number|null);

        /** NotifyGameState updatedPlayerId */
        updatedPlayerId?: (string|null);
    }

    /** Represents a NotifyGameState. */
    class NotifyGameState implements INotifyGameState {

        /**
         * Constructs a new NotifyGameState.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.INotifyGameState);

        /** NotifyGameState state. */
        public state: pokemonGuess.GameState;

        /** NotifyGameState players. */
        public players: pokemonGuess.IPlayerInfo[];

        /** NotifyGameState settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /** NotifyGameState startTimestamp. */
        public startTimestamp: (number|Long);

        /** NotifyGameState remainingTimeSeconds. */
        public remainingTimeSeconds: (number|Long);

        /** NotifyGameState hostId. */
        public hostId: string;

        /** NotifyGameState updatedReason. */
        public updatedReason: number;

        /** NotifyGameState updatedPlayerId. */
        public updatedPlayerId: string;

        /**
         * Creates a new NotifyGameState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameState instance
         */
        public static create(properties?: pokemonGuess.INotifyGameState): pokemonGuess.NotifyGameState;

        /**
         * Encodes the specified NotifyGameState message. Does not implicitly {@link pokemonGuess.NotifyGameState.verify|verify} messages.
         * @param message NotifyGameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.INotifyGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameState message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameState.verify|verify} messages.
         * @param message NotifyGameState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.INotifyGameState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.NotifyGameState;

        /**
         * Decodes a NotifyGameState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.NotifyGameState;

        /**
         * Verifies a NotifyGameState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameState
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.NotifyGameState;

        /**
         * Creates a plain object from a NotifyGameState message. Also converts values to other types if specified.
         * @param message NotifyGameState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.NotifyGameState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGameState
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyPlayerDetail. */
    interface INotifyPlayerDetail {

        /** NotifyPlayerDetail playerDetail */
        playerDetail?: (pokemonGuess.IPlayerDetailInfo|null);
    }

    /** Represents a NotifyPlayerDetail. */
    class NotifyPlayerDetail implements INotifyPlayerDetail {

        /**
         * Constructs a new NotifyPlayerDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.INotifyPlayerDetail);

        /** NotifyPlayerDetail playerDetail. */
        public playerDetail?: (pokemonGuess.IPlayerDetailInfo|null);

        /**
         * Creates a new NotifyPlayerDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyPlayerDetail instance
         */
        public static create(properties?: pokemonGuess.INotifyPlayerDetail): pokemonGuess.NotifyPlayerDetail;

        /**
         * Encodes the specified NotifyPlayerDetail message. Does not implicitly {@link pokemonGuess.NotifyPlayerDetail.verify|verify} messages.
         * @param message NotifyPlayerDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.INotifyPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyPlayerDetail message, length delimited. Does not implicitly {@link pokemonGuess.NotifyPlayerDetail.verify|verify} messages.
         * @param message NotifyPlayerDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.INotifyPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyPlayerDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.NotifyPlayerDetail;

        /**
         * Decodes a NotifyPlayerDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.NotifyPlayerDetail;

        /**
         * Verifies a NotifyPlayerDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyPlayerDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyPlayerDetail
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.NotifyPlayerDetail;

        /**
         * Creates a plain object from a NotifyPlayerDetail message. Also converts values to other types if specified.
         * @param message NotifyPlayerDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.NotifyPlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyPlayerDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyPlayerDetail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifySettingsChanged. */
    interface INotifySettingsChanged {

        /** NotifySettingsChanged settings */
        settings?: (pokemonGuess.IGameSettings|null);

        /** NotifySettingsChanged changedById */
        changedById?: (string|null);
    }

    /** Represents a NotifySettingsChanged. */
    class NotifySettingsChanged implements INotifySettingsChanged {

        /**
         * Constructs a new NotifySettingsChanged.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.INotifySettingsChanged);

        /** NotifySettingsChanged settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /** NotifySettingsChanged changedById. */
        public changedById: string;

        /**
         * Creates a new NotifySettingsChanged instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifySettingsChanged instance
         */
        public static create(properties?: pokemonGuess.INotifySettingsChanged): pokemonGuess.NotifySettingsChanged;

        /**
         * Encodes the specified NotifySettingsChanged message. Does not implicitly {@link pokemonGuess.NotifySettingsChanged.verify|verify} messages.
         * @param message NotifySettingsChanged message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.INotifySettingsChanged, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifySettingsChanged message, length delimited. Does not implicitly {@link pokemonGuess.NotifySettingsChanged.verify|verify} messages.
         * @param message NotifySettingsChanged message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.INotifySettingsChanged, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifySettingsChanged message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifySettingsChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.NotifySettingsChanged;

        /**
         * Decodes a NotifySettingsChanged message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifySettingsChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.NotifySettingsChanged;

        /**
         * Verifies a NotifySettingsChanged message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifySettingsChanged message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifySettingsChanged
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.NotifySettingsChanged;

        /**
         * Creates a plain object from a NotifySettingsChanged message. Also converts values to other types if specified.
         * @param message NotifySettingsChanged
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.NotifySettingsChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifySettingsChanged to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifySettingsChanged
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGameStarted. */
    interface INotifyGameStarted {

        /** NotifyGameStarted settings */
        settings?: (pokemonGuess.IGameSettings|null);

        /** NotifyGameStarted startTimestamp */
        startTimestamp?: (number|Long|null);

        /** NotifyGameStarted players */
        players?: (pokemonGuess.IPlayerInfo[]|null);
    }

    /** Represents a NotifyGameStarted. */
    class NotifyGameStarted implements INotifyGameStarted {

        /**
         * Constructs a new NotifyGameStarted.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.INotifyGameStarted);

        /** NotifyGameStarted settings. */
        public settings?: (pokemonGuess.IGameSettings|null);

        /** NotifyGameStarted startTimestamp. */
        public startTimestamp: (number|Long);

        /** NotifyGameStarted players. */
        public players: pokemonGuess.IPlayerInfo[];

        /**
         * Creates a new NotifyGameStarted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameStarted instance
         */
        public static create(properties?: pokemonGuess.INotifyGameStarted): pokemonGuess.NotifyGameStarted;

        /**
         * Encodes the specified NotifyGameStarted message. Does not implicitly {@link pokemonGuess.NotifyGameStarted.verify|verify} messages.
         * @param message NotifyGameStarted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.INotifyGameStarted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameStarted message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameStarted.verify|verify} messages.
         * @param message NotifyGameStarted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.INotifyGameStarted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameStarted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.NotifyGameStarted;

        /**
         * Decodes a NotifyGameStarted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.NotifyGameStarted;

        /**
         * Verifies a NotifyGameStarted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameStarted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameStarted
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.NotifyGameStarted;

        /**
         * Creates a plain object from a NotifyGameStarted message. Also converts values to other types if specified.
         * @param message NotifyGameStarted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.NotifyGameStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameStarted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGameStarted
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NotifyGameEnded. */
    interface INotifyGameEnded {

        /** NotifyGameEnded answerId */
        answerId?: (string|null);

        /** NotifyGameEnded answerName */
        answerName?: (string|null);

        /** NotifyGameEnded rankings */
        rankings?: (pokemonGuess.IPlayerRank[]|null);

        /** NotifyGameEnded nextState */
        nextState?: (pokemonGuess.GameState|null);
    }

    /** Represents a NotifyGameEnded. */
    class NotifyGameEnded implements INotifyGameEnded {

        /**
         * Constructs a new NotifyGameEnded.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemonGuess.INotifyGameEnded);

        /** NotifyGameEnded answerId. */
        public answerId: string;

        /** NotifyGameEnded answerName. */
        public answerName: string;

        /** NotifyGameEnded rankings. */
        public rankings: pokemonGuess.IPlayerRank[];

        /** NotifyGameEnded nextState. */
        public nextState: pokemonGuess.GameState;

        /**
         * Creates a new NotifyGameEnded instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameEnded instance
         */
        public static create(properties?: pokemonGuess.INotifyGameEnded): pokemonGuess.NotifyGameEnded;

        /**
         * Encodes the specified NotifyGameEnded message. Does not implicitly {@link pokemonGuess.NotifyGameEnded.verify|verify} messages.
         * @param message NotifyGameEnded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemonGuess.INotifyGameEnded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameEnded message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameEnded.verify|verify} messages.
         * @param message NotifyGameEnded message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemonGuess.INotifyGameEnded, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameEnded message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemonGuess.NotifyGameEnded;

        /**
         * Decodes a NotifyGameEnded message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemonGuess.NotifyGameEnded;

        /**
         * Verifies a NotifyGameEnded message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameEnded message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameEnded
         */
        public static fromObject(object: { [k: string]: any }): pokemonGuess.NotifyGameEnded;

        /**
         * Creates a plain object from a NotifyGameEnded message. Also converts values to other types if specified.
         * @param message NotifyGameEnded
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemonGuess.NotifyGameEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameEnded to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NotifyGameEnded
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
