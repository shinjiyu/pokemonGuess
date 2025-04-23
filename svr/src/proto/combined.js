/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.RoomRequest = (function() {

        /**
         * Properties of a RoomRequest.
         * @memberof proto
         * @interface IRoomRequest
         * @property {string|null} [serverTarget] RoomRequest serverTarget
         * @property {number|null} [commandId] RoomRequest commandId
         * @property {string|null} [app] RoomRequest app
         * @property {string|null} [userId] RoomRequest userId
         * @property {Uint8Array|null} [data] RoomRequest data
         * @property {number|null} [sequenceId] RoomRequest sequenceId
         */

        /**
         * Constructs a new RoomRequest.
         * @memberof proto
         * @classdesc Represents a RoomRequest.
         * @implements IRoomRequest
         * @constructor
         * @param {proto.IRoomRequest=} [properties] Properties to set
         */
        function RoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomRequest serverTarget.
         * @member {string} serverTarget
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.serverTarget = "";

        /**
         * RoomRequest commandId.
         * @member {number} commandId
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.commandId = 0;

        /**
         * RoomRequest app.
         * @member {string} app
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.app = "";

        /**
         * RoomRequest userId.
         * @member {string} userId
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.userId = "";

        /**
         * RoomRequest data.
         * @member {Uint8Array} data
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.data = $util.newBuffer([]);

        /**
         * RoomRequest sequenceId.
         * @member {number} sequenceId
         * @memberof proto.RoomRequest
         * @instance
         */
        RoomRequest.prototype.sequenceId = 0;

        /**
         * Creates a new RoomRequest instance using the specified properties.
         * @function create
         * @memberof proto.RoomRequest
         * @static
         * @param {proto.IRoomRequest=} [properties] Properties to set
         * @returns {proto.RoomRequest} RoomRequest instance
         */
        RoomRequest.create = function create(properties) {
            return new RoomRequest(properties);
        };

        /**
         * Encodes the specified RoomRequest message. Does not implicitly {@link proto.RoomRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.RoomRequest
         * @static
         * @param {proto.IRoomRequest} message RoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTarget != null && Object.hasOwnProperty.call(message, "serverTarget"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serverTarget);
            if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.commandId);
            if (message.app != null && Object.hasOwnProperty.call(message, "app"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.app);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sequenceId);
            return writer;
        };

        /**
         * Encodes the specified RoomRequest message, length delimited. Does not implicitly {@link proto.RoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RoomRequest
         * @static
         * @param {proto.IRoomRequest} message RoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RoomRequest} RoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.serverTarget = reader.string();
                        break;
                    }
                case 2: {
                        message.commandId = reader.int32();
                        break;
                    }
                case 3: {
                        message.app = reader.string();
                        break;
                    }
                case 4: {
                        message.userId = reader.string();
                        break;
                    }
                case 5: {
                        message.data = reader.bytes();
                        break;
                    }
                case 6: {
                        message.sequenceId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RoomRequest} RoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomRequest message.
         * @function verify
         * @memberof proto.RoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTarget != null && message.hasOwnProperty("serverTarget"))
                if (!$util.isString(message.serverTarget))
                    return "serverTarget: string expected";
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                if (!$util.isInteger(message.commandId))
                    return "commandId: integer expected";
            if (message.app != null && message.hasOwnProperty("app"))
                if (!$util.isString(message.app))
                    return "app: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isInteger(message.sequenceId))
                    return "sequenceId: integer expected";
            return null;
        };

        /**
         * Creates a RoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RoomRequest} RoomRequest
         */
        RoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RoomRequest)
                return object;
            var message = new $root.proto.RoomRequest();
            if (object.serverTarget != null)
                message.serverTarget = String(object.serverTarget);
            if (object.commandId != null)
                message.commandId = object.commandId | 0;
            if (object.app != null)
                message.app = String(object.app);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            if (object.sequenceId != null)
                message.sequenceId = object.sequenceId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RoomRequest
         * @static
         * @param {proto.RoomRequest} message RoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverTarget = "";
                object.commandId = 0;
                object.app = "";
                object.userId = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.sequenceId = 0;
            }
            if (message.serverTarget != null && message.hasOwnProperty("serverTarget"))
                object.serverTarget = message.serverTarget;
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                object.commandId = message.commandId;
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = message.app;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                object.sequenceId = message.sequenceId;
            return object;
        };

        /**
         * Converts this RoomRequest to JSON.
         * @function toJSON
         * @memberof proto.RoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomRequest
         * @function getTypeUrl
         * @memberof proto.RoomRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RoomRequest";
        };

        return RoomRequest;
    })();

    proto.RoomResponse = (function() {

        /**
         * Properties of a RoomResponse.
         * @memberof proto
         * @interface IRoomResponse
         * @property {number|null} [sequenceId] RoomResponse sequenceId
         * @property {string|null} [serverTarget] RoomResponse serverTarget
         * @property {number|null} [commandId] RoomResponse commandId
         * @property {Uint8Array|null} [data] RoomResponse data
         */

        /**
         * Constructs a new RoomResponse.
         * @memberof proto
         * @classdesc Represents a RoomResponse.
         * @implements IRoomResponse
         * @constructor
         * @param {proto.IRoomResponse=} [properties] Properties to set
         */
        function RoomResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomResponse sequenceId.
         * @member {number} sequenceId
         * @memberof proto.RoomResponse
         * @instance
         */
        RoomResponse.prototype.sequenceId = 0;

        /**
         * RoomResponse serverTarget.
         * @member {string} serverTarget
         * @memberof proto.RoomResponse
         * @instance
         */
        RoomResponse.prototype.serverTarget = "";

        /**
         * RoomResponse commandId.
         * @member {number} commandId
         * @memberof proto.RoomResponse
         * @instance
         */
        RoomResponse.prototype.commandId = 0;

        /**
         * RoomResponse data.
         * @member {Uint8Array} data
         * @memberof proto.RoomResponse
         * @instance
         */
        RoomResponse.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new RoomResponse instance using the specified properties.
         * @function create
         * @memberof proto.RoomResponse
         * @static
         * @param {proto.IRoomResponse=} [properties] Properties to set
         * @returns {proto.RoomResponse} RoomResponse instance
         */
        RoomResponse.create = function create(properties) {
            return new RoomResponse(properties);
        };

        /**
         * Encodes the specified RoomResponse message. Does not implicitly {@link proto.RoomResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.RoomResponse
         * @static
         * @param {proto.IRoomResponse} message RoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sequenceId);
            if (message.serverTarget != null && Object.hasOwnProperty.call(message, "serverTarget"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverTarget);
            if (message.commandId != null && Object.hasOwnProperty.call(message, "commandId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.commandId);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified RoomResponse message, length delimited. Does not implicitly {@link proto.RoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RoomResponse
         * @static
         * @param {proto.IRoomResponse} message RoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RoomResponse} RoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sequenceId = reader.int32();
                        break;
                    }
                case 2: {
                        message.serverTarget = reader.string();
                        break;
                    }
                case 3: {
                        message.commandId = reader.int32();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RoomResponse} RoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomResponse message.
         * @function verify
         * @memberof proto.RoomResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isInteger(message.sequenceId))
                    return "sequenceId: integer expected";
            if (message.serverTarget != null && message.hasOwnProperty("serverTarget"))
                if (!$util.isString(message.serverTarget))
                    return "serverTarget: string expected";
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                if (!$util.isInteger(message.commandId))
                    return "commandId: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a RoomResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RoomResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RoomResponse} RoomResponse
         */
        RoomResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RoomResponse)
                return object;
            var message = new $root.proto.RoomResponse();
            if (object.sequenceId != null)
                message.sequenceId = object.sequenceId | 0;
            if (object.serverTarget != null)
                message.serverTarget = String(object.serverTarget);
            if (object.commandId != null)
                message.commandId = object.commandId | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a RoomResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RoomResponse
         * @static
         * @param {proto.RoomResponse} message RoomResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sequenceId = 0;
                object.serverTarget = "";
                object.commandId = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                object.sequenceId = message.sequenceId;
            if (message.serverTarget != null && message.hasOwnProperty("serverTarget"))
                object.serverTarget = message.serverTarget;
            if (message.commandId != null && message.hasOwnProperty("commandId"))
                object.commandId = message.commandId;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this RoomResponse to JSON.
         * @function toJSON
         * @memberof proto.RoomResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomResponse
         * @function getTypeUrl
         * @memberof proto.RoomResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RoomResponse";
        };

        return RoomResponse;
    })();

    return proto;
})();

$root.match = (function() {

    /**
     * Namespace match.
     * @exports match
     * @namespace
     */
    var match = {};

    match.ReqJoinMatch = (function() {

        /**
         * Properties of a ReqJoinMatch.
         * @memberof match
         * @interface IReqJoinMatch
         * @property {string|null} [userId] ReqJoinMatch userId
         * @property {number|null} [rank] ReqJoinMatch rank
         * @property {string|null} [gameMode] ReqJoinMatch gameMode
         */

        /**
         * Constructs a new ReqJoinMatch.
         * @memberof match
         * @classdesc Represents a ReqJoinMatch.
         * @implements IReqJoinMatch
         * @constructor
         * @param {match.IReqJoinMatch=} [properties] Properties to set
         */
        function ReqJoinMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqJoinMatch userId.
         * @member {string} userId
         * @memberof match.ReqJoinMatch
         * @instance
         */
        ReqJoinMatch.prototype.userId = "";

        /**
         * ReqJoinMatch rank.
         * @member {number} rank
         * @memberof match.ReqJoinMatch
         * @instance
         */
        ReqJoinMatch.prototype.rank = 0;

        /**
         * ReqJoinMatch gameMode.
         * @member {string} gameMode
         * @memberof match.ReqJoinMatch
         * @instance
         */
        ReqJoinMatch.prototype.gameMode = "";

        /**
         * Creates a new ReqJoinMatch instance using the specified properties.
         * @function create
         * @memberof match.ReqJoinMatch
         * @static
         * @param {match.IReqJoinMatch=} [properties] Properties to set
         * @returns {match.ReqJoinMatch} ReqJoinMatch instance
         */
        ReqJoinMatch.create = function create(properties) {
            return new ReqJoinMatch(properties);
        };

        /**
         * Encodes the specified ReqJoinMatch message. Does not implicitly {@link match.ReqJoinMatch.verify|verify} messages.
         * @function encode
         * @memberof match.ReqJoinMatch
         * @static
         * @param {match.IReqJoinMatch} message ReqJoinMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
            if (message.gameMode != null && Object.hasOwnProperty.call(message, "gameMode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gameMode);
            return writer;
        };

        /**
         * Encodes the specified ReqJoinMatch message, length delimited. Does not implicitly {@link match.ReqJoinMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof match.ReqJoinMatch
         * @static
         * @param {match.IReqJoinMatch} message ReqJoinMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqJoinMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqJoinMatch message from the specified reader or buffer.
         * @function decode
         * @memberof match.ReqJoinMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {match.ReqJoinMatch} ReqJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinMatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.match.ReqJoinMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.rank = reader.int32();
                        break;
                    }
                case 3: {
                        message.gameMode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqJoinMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof match.ReqJoinMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {match.ReqJoinMatch} ReqJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqJoinMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqJoinMatch message.
         * @function verify
         * @memberof match.ReqJoinMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqJoinMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                if (!$util.isString(message.gameMode))
                    return "gameMode: string expected";
            return null;
        };

        /**
         * Creates a ReqJoinMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof match.ReqJoinMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {match.ReqJoinMatch} ReqJoinMatch
         */
        ReqJoinMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.match.ReqJoinMatch)
                return object;
            var message = new $root.match.ReqJoinMatch();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.rank != null)
                message.rank = object.rank | 0;
            if (object.gameMode != null)
                message.gameMode = String(object.gameMode);
            return message;
        };

        /**
         * Creates a plain object from a ReqJoinMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof match.ReqJoinMatch
         * @static
         * @param {match.ReqJoinMatch} message ReqJoinMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqJoinMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.rank = 0;
                object.gameMode = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = message.rank;
            if (message.gameMode != null && message.hasOwnProperty("gameMode"))
                object.gameMode = message.gameMode;
            return object;
        };

        /**
         * Converts this ReqJoinMatch to JSON.
         * @function toJSON
         * @memberof match.ReqJoinMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqJoinMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqJoinMatch
         * @function getTypeUrl
         * @memberof match.ReqJoinMatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqJoinMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/match.ReqJoinMatch";
        };

        return ReqJoinMatch;
    })();

    match.ResJoinMatch = (function() {

        /**
         * Properties of a ResJoinMatch.
         * @memberof match
         * @interface IResJoinMatch
         * @property {boolean|null} [success] ResJoinMatch success
         * @property {string|null} [message] ResJoinMatch message
         * @property {string|null} [matchId] ResJoinMatch matchId
         */

        /**
         * Constructs a new ResJoinMatch.
         * @memberof match
         * @classdesc Represents a ResJoinMatch.
         * @implements IResJoinMatch
         * @constructor
         * @param {match.IResJoinMatch=} [properties] Properties to set
         */
        function ResJoinMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResJoinMatch success.
         * @member {boolean} success
         * @memberof match.ResJoinMatch
         * @instance
         */
        ResJoinMatch.prototype.success = false;

        /**
         * ResJoinMatch message.
         * @member {string} message
         * @memberof match.ResJoinMatch
         * @instance
         */
        ResJoinMatch.prototype.message = "";

        /**
         * ResJoinMatch matchId.
         * @member {string} matchId
         * @memberof match.ResJoinMatch
         * @instance
         */
        ResJoinMatch.prototype.matchId = "";

        /**
         * Creates a new ResJoinMatch instance using the specified properties.
         * @function create
         * @memberof match.ResJoinMatch
         * @static
         * @param {match.IResJoinMatch=} [properties] Properties to set
         * @returns {match.ResJoinMatch} ResJoinMatch instance
         */
        ResJoinMatch.create = function create(properties) {
            return new ResJoinMatch(properties);
        };

        /**
         * Encodes the specified ResJoinMatch message. Does not implicitly {@link match.ResJoinMatch.verify|verify} messages.
         * @function encode
         * @memberof match.ResJoinMatch
         * @static
         * @param {match.IResJoinMatch} message ResJoinMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResJoinMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.matchId);
            return writer;
        };

        /**
         * Encodes the specified ResJoinMatch message, length delimited. Does not implicitly {@link match.ResJoinMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof match.ResJoinMatch
         * @static
         * @param {match.IResJoinMatch} message ResJoinMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResJoinMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResJoinMatch message from the specified reader or buffer.
         * @function decode
         * @memberof match.ResJoinMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {match.ResJoinMatch} ResJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResJoinMatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.match.ResJoinMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                case 3: {
                        message.matchId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResJoinMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof match.ResJoinMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {match.ResJoinMatch} ResJoinMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResJoinMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResJoinMatch message.
         * @function verify
         * @memberof match.ResJoinMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResJoinMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            return null;
        };

        /**
         * Creates a ResJoinMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof match.ResJoinMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {match.ResJoinMatch} ResJoinMatch
         */
        ResJoinMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.match.ResJoinMatch)
                return object;
            var message = new $root.match.ResJoinMatch();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            return message;
        };

        /**
         * Creates a plain object from a ResJoinMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof match.ResJoinMatch
         * @static
         * @param {match.ResJoinMatch} message ResJoinMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResJoinMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.matchId = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            return object;
        };

        /**
         * Converts this ResJoinMatch to JSON.
         * @function toJSON
         * @memberof match.ResJoinMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResJoinMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResJoinMatch
         * @function getTypeUrl
         * @memberof match.ResJoinMatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResJoinMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/match.ResJoinMatch";
        };

        return ResJoinMatch;
    })();

    match.ReqCancelMatch = (function() {

        /**
         * Properties of a ReqCancelMatch.
         * @memberof match
         * @interface IReqCancelMatch
         * @property {string|null} [matchId] ReqCancelMatch matchId
         */

        /**
         * Constructs a new ReqCancelMatch.
         * @memberof match
         * @classdesc Represents a ReqCancelMatch.
         * @implements IReqCancelMatch
         * @constructor
         * @param {match.IReqCancelMatch=} [properties] Properties to set
         */
        function ReqCancelMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqCancelMatch matchId.
         * @member {string} matchId
         * @memberof match.ReqCancelMatch
         * @instance
         */
        ReqCancelMatch.prototype.matchId = "";

        /**
         * Creates a new ReqCancelMatch instance using the specified properties.
         * @function create
         * @memberof match.ReqCancelMatch
         * @static
         * @param {match.IReqCancelMatch=} [properties] Properties to set
         * @returns {match.ReqCancelMatch} ReqCancelMatch instance
         */
        ReqCancelMatch.create = function create(properties) {
            return new ReqCancelMatch(properties);
        };

        /**
         * Encodes the specified ReqCancelMatch message. Does not implicitly {@link match.ReqCancelMatch.verify|verify} messages.
         * @function encode
         * @memberof match.ReqCancelMatch
         * @static
         * @param {match.IReqCancelMatch} message ReqCancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCancelMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.matchId);
            return writer;
        };

        /**
         * Encodes the specified ReqCancelMatch message, length delimited. Does not implicitly {@link match.ReqCancelMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof match.ReqCancelMatch
         * @static
         * @param {match.IReqCancelMatch} message ReqCancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqCancelMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqCancelMatch message from the specified reader or buffer.
         * @function decode
         * @memberof match.ReqCancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {match.ReqCancelMatch} ReqCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCancelMatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.match.ReqCancelMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.matchId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqCancelMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof match.ReqCancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {match.ReqCancelMatch} ReqCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqCancelMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqCancelMatch message.
         * @function verify
         * @memberof match.ReqCancelMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqCancelMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            return null;
        };

        /**
         * Creates a ReqCancelMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof match.ReqCancelMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {match.ReqCancelMatch} ReqCancelMatch
         */
        ReqCancelMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.match.ReqCancelMatch)
                return object;
            var message = new $root.match.ReqCancelMatch();
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            return message;
        };

        /**
         * Creates a plain object from a ReqCancelMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof match.ReqCancelMatch
         * @static
         * @param {match.ReqCancelMatch} message ReqCancelMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqCancelMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.matchId = "";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            return object;
        };

        /**
         * Converts this ReqCancelMatch to JSON.
         * @function toJSON
         * @memberof match.ReqCancelMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqCancelMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqCancelMatch
         * @function getTypeUrl
         * @memberof match.ReqCancelMatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqCancelMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/match.ReqCancelMatch";
        };

        return ReqCancelMatch;
    })();

    match.ResCancelMatch = (function() {

        /**
         * Properties of a ResCancelMatch.
         * @memberof match
         * @interface IResCancelMatch
         * @property {boolean|null} [success] ResCancelMatch success
         * @property {string|null} [message] ResCancelMatch message
         */

        /**
         * Constructs a new ResCancelMatch.
         * @memberof match
         * @classdesc Represents a ResCancelMatch.
         * @implements IResCancelMatch
         * @constructor
         * @param {match.IResCancelMatch=} [properties] Properties to set
         */
        function ResCancelMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResCancelMatch success.
         * @member {boolean} success
         * @memberof match.ResCancelMatch
         * @instance
         */
        ResCancelMatch.prototype.success = false;

        /**
         * ResCancelMatch message.
         * @member {string} message
         * @memberof match.ResCancelMatch
         * @instance
         */
        ResCancelMatch.prototype.message = "";

        /**
         * Creates a new ResCancelMatch instance using the specified properties.
         * @function create
         * @memberof match.ResCancelMatch
         * @static
         * @param {match.IResCancelMatch=} [properties] Properties to set
         * @returns {match.ResCancelMatch} ResCancelMatch instance
         */
        ResCancelMatch.create = function create(properties) {
            return new ResCancelMatch(properties);
        };

        /**
         * Encodes the specified ResCancelMatch message. Does not implicitly {@link match.ResCancelMatch.verify|verify} messages.
         * @function encode
         * @memberof match.ResCancelMatch
         * @static
         * @param {match.IResCancelMatch} message ResCancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCancelMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ResCancelMatch message, length delimited. Does not implicitly {@link match.ResCancelMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof match.ResCancelMatch
         * @static
         * @param {match.IResCancelMatch} message ResCancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResCancelMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResCancelMatch message from the specified reader or buffer.
         * @function decode
         * @memberof match.ResCancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {match.ResCancelMatch} ResCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCancelMatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.match.ResCancelMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResCancelMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof match.ResCancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {match.ResCancelMatch} ResCancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResCancelMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResCancelMatch message.
         * @function verify
         * @memberof match.ResCancelMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResCancelMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ResCancelMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof match.ResCancelMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {match.ResCancelMatch} ResCancelMatch
         */
        ResCancelMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.match.ResCancelMatch)
                return object;
            var message = new $root.match.ResCancelMatch();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ResCancelMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof match.ResCancelMatch
         * @static
         * @param {match.ResCancelMatch} message ResCancelMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResCancelMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ResCancelMatch to JSON.
         * @function toJSON
         * @memberof match.ResCancelMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResCancelMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResCancelMatch
         * @function getTypeUrl
         * @memberof match.ResCancelMatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResCancelMatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/match.ResCancelMatch";
        };

        return ResCancelMatch;
    })();

    match.NotifyMatchSuccess = (function() {

        /**
         * Properties of a NotifyMatchSuccess.
         * @memberof match
         * @interface INotifyMatchSuccess
         * @property {string|null} [matchId] NotifyMatchSuccess matchId
         * @property {string|null} [roomId] NotifyMatchSuccess roomId
         * @property {Array.<Common.IPlayerInfo>|null} [players] NotifyMatchSuccess players
         */

        /**
         * Constructs a new NotifyMatchSuccess.
         * @memberof match
         * @classdesc Represents a NotifyMatchSuccess.
         * @implements INotifyMatchSuccess
         * @constructor
         * @param {match.INotifyMatchSuccess=} [properties] Properties to set
         */
        function NotifyMatchSuccess(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyMatchSuccess matchId.
         * @member {string} matchId
         * @memberof match.NotifyMatchSuccess
         * @instance
         */
        NotifyMatchSuccess.prototype.matchId = "";

        /**
         * NotifyMatchSuccess roomId.
         * @member {string} roomId
         * @memberof match.NotifyMatchSuccess
         * @instance
         */
        NotifyMatchSuccess.prototype.roomId = "";

        /**
         * NotifyMatchSuccess players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof match.NotifyMatchSuccess
         * @instance
         */
        NotifyMatchSuccess.prototype.players = $util.emptyArray;

        /**
         * Creates a new NotifyMatchSuccess instance using the specified properties.
         * @function create
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {match.INotifyMatchSuccess=} [properties] Properties to set
         * @returns {match.NotifyMatchSuccess} NotifyMatchSuccess instance
         */
        NotifyMatchSuccess.create = function create(properties) {
            return new NotifyMatchSuccess(properties);
        };

        /**
         * Encodes the specified NotifyMatchSuccess message. Does not implicitly {@link match.NotifyMatchSuccess.verify|verify} messages.
         * @function encode
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {match.INotifyMatchSuccess} message NotifyMatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyMatchSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchId != null && Object.hasOwnProperty.call(message, "matchId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.matchId);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotifyMatchSuccess message, length delimited. Does not implicitly {@link match.NotifyMatchSuccess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {match.INotifyMatchSuccess} message NotifyMatchSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyMatchSuccess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyMatchSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {match.NotifyMatchSuccess} NotifyMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyMatchSuccess.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.match.NotifyMatchSuccess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.matchId = reader.string();
                        break;
                    }
                case 2: {
                        message.roomId = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyMatchSuccess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {match.NotifyMatchSuccess} NotifyMatchSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyMatchSuccess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyMatchSuccess message.
         * @function verify
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyMatchSuccess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                if (!$util.isString(message.matchId))
                    return "matchId: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotifyMatchSuccess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {match.NotifyMatchSuccess} NotifyMatchSuccess
         */
        NotifyMatchSuccess.fromObject = function fromObject(object) {
            if (object instanceof $root.match.NotifyMatchSuccess)
                return object;
            var message = new $root.match.NotifyMatchSuccess();
            if (object.matchId != null)
                message.matchId = String(object.matchId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".match.NotifyMatchSuccess.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".match.NotifyMatchSuccess.players: object expected");
                    message.players[i] = $root.Common.PlayerInfo.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyMatchSuccess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {match.NotifyMatchSuccess} message NotifyMatchSuccess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyMatchSuccess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.matchId = "";
                object.roomId = "";
            }
            if (message.matchId != null && message.hasOwnProperty("matchId"))
                object.matchId = message.matchId;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.Common.PlayerInfo.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this NotifyMatchSuccess to JSON.
         * @function toJSON
         * @memberof match.NotifyMatchSuccess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyMatchSuccess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyMatchSuccess
         * @function getTypeUrl
         * @memberof match.NotifyMatchSuccess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyMatchSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/match.NotifyMatchSuccess";
        };

        return NotifyMatchSuccess;
    })();

    /**
     * ProtocolNumber enum.
     * @name match.ProtocolNumber
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} REQ_JOIN_MATCH=3001 REQ_JOIN_MATCH value
     * @property {number} RES_JOIN_MATCH=3002 RES_JOIN_MATCH value
     * @property {number} REQ_CANCEL_MATCH=3003 REQ_CANCEL_MATCH value
     * @property {number} RES_CANCEL_MATCH=3004 RES_CANCEL_MATCH value
     * @property {number} NOTIFY_MATCH_SUCCESS=3005 NOTIFY_MATCH_SUCCESS value
     */
    match.ProtocolNumber = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[3001] = "REQ_JOIN_MATCH"] = 3001;
        values[valuesById[3002] = "RES_JOIN_MATCH"] = 3002;
        values[valuesById[3003] = "REQ_CANCEL_MATCH"] = 3003;
        values[valuesById[3004] = "RES_CANCEL_MATCH"] = 3004;
        values[valuesById[3005] = "NOTIFY_MATCH_SUCCESS"] = 3005;
        return values;
    })();

    return match;
})();

$root.Common = (function() {

    /**
     * Namespace Common.
     * @exports Common
     * @namespace
     */
    var Common = {};

    Common.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof Common
         * @interface IPlayerInfo
         * @property {string|null} [nickname] PlayerInfo nickname
         * @property {string|null} [playerId] PlayerInfo playerId
         * @property {string|null} [avatar] PlayerInfo avatar
         * @property {string|null} [gender] PlayerInfo gender
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof Common
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {Common.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo playerId.
         * @member {string} playerId
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerId = "";

        /**
         * PlayerInfo avatar.
         * @member {string} avatar
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.avatar = "";

        /**
         * PlayerInfo gender.
         * @member {string} gender
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.gender = "";

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo=} [properties] Properties to set
         * @returns {Common.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerId);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gender);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.nickname = reader.string();
                        break;
                    }
                case 2: {
                        message.playerId = reader.string();
                        break;
                    }
                case 3: {
                        message.avatar = reader.string();
                        break;
                    }
                case 4: {
                        message.gender = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof Common.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Common.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Common.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Common.PlayerInfo)
                return object;
            var message = new $root.Common.PlayerInfo();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.gender != null)
                message.gender = String(object.gender);
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.nickname = "";
                object.playerId = "";
                object.avatar = "";
                object.gender = "";
            }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof Common.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof Common.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Common.PlayerInfo";
        };

        return PlayerInfo;
    })();

    return Common;
})();

$root.OnlinePlayer = (function() {

    /**
     * Namespace OnlinePlayer.
     * @exports OnlinePlayer
     * @namespace
     */
    var OnlinePlayer = {};

    /**
     * ProtocolNumber enum.
     * @name OnlinePlayer.ProtocolNumber
     * @enum {number}
     * @property {number} REQ_ONINE_PLAYERS=1 REQ_ONINE_PLAYERS value
     * @property {number} RES_ONINE_PLAYERS=2 RES_ONINE_PLAYERS value
     * @property {number} REQ_UPDATE_QUESTIONS=3 REQ_UPDATE_QUESTIONS value
     * @property {number} RES_UPDATE_QUESTIONS=4 RES_UPDATE_QUESTIONS value
     * @property {number} REQ_SEND_LOG=5 REQ_SEND_LOG value
     * @property {number} RES_SEND_LOG=6 RES_SEND_LOG value
     * @property {number} REQ_RECEIVE_LOG=7 REQ_RECEIVE_LOG value
     * @property {number} RES_RECEIVE_LOG=8 RES_RECEIVE_LOG value
     * @property {number} NOTIFY_RECEIVE_LOG=9 NOTIFY_RECEIVE_LOG value
     * @property {number} REQ_EVAL_CODE=10 REQ_EVAL_CODE value
     * @property {number} RES_EVAL_CODE=11 RES_EVAL_CODE value
     * @property {number} NOTIFY_EVAL_CODE=12 NOTIFY_EVAL_CODE value
     */
    OnlinePlayer.ProtocolNumber = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "REQ_ONINE_PLAYERS"] = 1;
        values[valuesById[2] = "RES_ONINE_PLAYERS"] = 2;
        values[valuesById[3] = "REQ_UPDATE_QUESTIONS"] = 3;
        values[valuesById[4] = "RES_UPDATE_QUESTIONS"] = 4;
        values[valuesById[5] = "REQ_SEND_LOG"] = 5;
        values[valuesById[6] = "RES_SEND_LOG"] = 6;
        values[valuesById[7] = "REQ_RECEIVE_LOG"] = 7;
        values[valuesById[8] = "RES_RECEIVE_LOG"] = 8;
        values[valuesById[9] = "NOTIFY_RECEIVE_LOG"] = 9;
        values[valuesById[10] = "REQ_EVAL_CODE"] = 10;
        values[valuesById[11] = "RES_EVAL_CODE"] = 11;
        values[valuesById[12] = "NOTIFY_EVAL_CODE"] = 12;
        return values;
    })();

    OnlinePlayer.ReqOnlinePlayers = (function() {

        /**
         * Properties of a ReqOnlinePlayers.
         * @memberof OnlinePlayer
         * @interface IReqOnlinePlayers
         * @property {number|null} [playerCount] ReqOnlinePlayers playerCount
         */

        /**
         * Constructs a new ReqOnlinePlayers.
         * @memberof OnlinePlayer
         * @classdesc Represents a ReqOnlinePlayers.
         * @implements IReqOnlinePlayers
         * @constructor
         * @param {OnlinePlayer.IReqOnlinePlayers=} [properties] Properties to set
         */
        function ReqOnlinePlayers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqOnlinePlayers playerCount.
         * @member {number} playerCount
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @instance
         */
        ReqOnlinePlayers.prototype.playerCount = 0;

        /**
         * Creates a new ReqOnlinePlayers instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {OnlinePlayer.IReqOnlinePlayers=} [properties] Properties to set
         * @returns {OnlinePlayer.ReqOnlinePlayers} ReqOnlinePlayers instance
         */
        ReqOnlinePlayers.create = function create(properties) {
            return new ReqOnlinePlayers(properties);
        };

        /**
         * Encodes the specified ReqOnlinePlayers message. Does not implicitly {@link OnlinePlayer.ReqOnlinePlayers.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {OnlinePlayer.IReqOnlinePlayers} message ReqOnlinePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqOnlinePlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerCount != null && Object.hasOwnProperty.call(message, "playerCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerCount);
            return writer;
        };

        /**
         * Encodes the specified ReqOnlinePlayers message, length delimited. Does not implicitly {@link OnlinePlayer.ReqOnlinePlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {OnlinePlayer.IReqOnlinePlayers} message ReqOnlinePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqOnlinePlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqOnlinePlayers message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ReqOnlinePlayers} ReqOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqOnlinePlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ReqOnlinePlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqOnlinePlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ReqOnlinePlayers} ReqOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqOnlinePlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqOnlinePlayers message.
         * @function verify
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqOnlinePlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                if (!$util.isInteger(message.playerCount))
                    return "playerCount: integer expected";
            return null;
        };

        /**
         * Creates a ReqOnlinePlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ReqOnlinePlayers} ReqOnlinePlayers
         */
        ReqOnlinePlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ReqOnlinePlayers)
                return object;
            var message = new $root.OnlinePlayer.ReqOnlinePlayers();
            if (object.playerCount != null)
                message.playerCount = object.playerCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqOnlinePlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {OnlinePlayer.ReqOnlinePlayers} message ReqOnlinePlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqOnlinePlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerCount = 0;
            if (message.playerCount != null && message.hasOwnProperty("playerCount"))
                object.playerCount = message.playerCount;
            return object;
        };

        /**
         * Converts this ReqOnlinePlayers to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqOnlinePlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqOnlinePlayers
         * @function getTypeUrl
         * @memberof OnlinePlayer.ReqOnlinePlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqOnlinePlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ReqOnlinePlayers";
        };

        return ReqOnlinePlayers;
    })();

    OnlinePlayer.ResOnlinePlayers = (function() {

        /**
         * Properties of a ResOnlinePlayers.
         * @memberof OnlinePlayer
         * @interface IResOnlinePlayers
         * @property {Array.<Common.IPlayerInfo>|null} [players] ResOnlinePlayers players
         */

        /**
         * Constructs a new ResOnlinePlayers.
         * @memberof OnlinePlayer
         * @classdesc Represents a ResOnlinePlayers.
         * @implements IResOnlinePlayers
         * @constructor
         * @param {OnlinePlayer.IResOnlinePlayers=} [properties] Properties to set
         */
        function ResOnlinePlayers(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResOnlinePlayers players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @instance
         */
        ResOnlinePlayers.prototype.players = $util.emptyArray;

        /**
         * Creates a new ResOnlinePlayers instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {OnlinePlayer.IResOnlinePlayers=} [properties] Properties to set
         * @returns {OnlinePlayer.ResOnlinePlayers} ResOnlinePlayers instance
         */
        ResOnlinePlayers.create = function create(properties) {
            return new ResOnlinePlayers(properties);
        };

        /**
         * Encodes the specified ResOnlinePlayers message. Does not implicitly {@link OnlinePlayer.ResOnlinePlayers.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {OnlinePlayer.IResOnlinePlayers} message ResOnlinePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResOnlinePlayers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResOnlinePlayers message, length delimited. Does not implicitly {@link OnlinePlayer.ResOnlinePlayers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {OnlinePlayer.IResOnlinePlayers} message ResOnlinePlayers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResOnlinePlayers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResOnlinePlayers message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ResOnlinePlayers} ResOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResOnlinePlayers.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ResOnlinePlayers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResOnlinePlayers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ResOnlinePlayers} ResOnlinePlayers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResOnlinePlayers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResOnlinePlayers message.
         * @function verify
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResOnlinePlayers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResOnlinePlayers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ResOnlinePlayers} ResOnlinePlayers
         */
        ResOnlinePlayers.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ResOnlinePlayers)
                return object;
            var message = new $root.OnlinePlayer.ResOnlinePlayers();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".OnlinePlayer.ResOnlinePlayers.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".OnlinePlayer.ResOnlinePlayers.players: object expected");
                    message.players[i] = $root.Common.PlayerInfo.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ResOnlinePlayers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {OnlinePlayer.ResOnlinePlayers} message ResOnlinePlayers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResOnlinePlayers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.Common.PlayerInfo.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this ResOnlinePlayers to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResOnlinePlayers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResOnlinePlayers
         * @function getTypeUrl
         * @memberof OnlinePlayer.ResOnlinePlayers
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResOnlinePlayers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ResOnlinePlayers";
        };

        return ResOnlinePlayers;
    })();

    OnlinePlayer.ReqSendLog = (function() {

        /**
         * Properties of a ReqSendLog.
         * @memberof OnlinePlayer
         * @interface IReqSendLog
         * @property {string|null} [log] ReqSendLog log
         */

        /**
         * Constructs a new ReqSendLog.
         * @memberof OnlinePlayer
         * @classdesc Represents a ReqSendLog.
         * @implements IReqSendLog
         * @constructor
         * @param {OnlinePlayer.IReqSendLog=} [properties] Properties to set
         */
        function ReqSendLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSendLog log.
         * @member {string} log
         * @memberof OnlinePlayer.ReqSendLog
         * @instance
         */
        ReqSendLog.prototype.log = "";

        /**
         * Creates a new ReqSendLog instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {OnlinePlayer.IReqSendLog=} [properties] Properties to set
         * @returns {OnlinePlayer.ReqSendLog} ReqSendLog instance
         */
        ReqSendLog.create = function create(properties) {
            return new ReqSendLog(properties);
        };

        /**
         * Encodes the specified ReqSendLog message. Does not implicitly {@link OnlinePlayer.ReqSendLog.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {OnlinePlayer.IReqSendLog} message ReqSendLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.log);
            return writer;
        };

        /**
         * Encodes the specified ReqSendLog message, length delimited. Does not implicitly {@link OnlinePlayer.ReqSendLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {OnlinePlayer.IReqSendLog} message ReqSendLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSendLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSendLog message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ReqSendLog} ReqSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ReqSendLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.log = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqSendLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ReqSendLog} ReqSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSendLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSendLog message.
         * @function verify
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSendLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.log != null && message.hasOwnProperty("log"))
                if (!$util.isString(message.log))
                    return "log: string expected";
            return null;
        };

        /**
         * Creates a ReqSendLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ReqSendLog} ReqSendLog
         */
        ReqSendLog.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ReqSendLog)
                return object;
            var message = new $root.OnlinePlayer.ReqSendLog();
            if (object.log != null)
                message.log = String(object.log);
            return message;
        };

        /**
         * Creates a plain object from a ReqSendLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {OnlinePlayer.ReqSendLog} message ReqSendLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqSendLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.log = "";
            if (message.log != null && message.hasOwnProperty("log"))
                object.log = message.log;
            return object;
        };

        /**
         * Converts this ReqSendLog to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ReqSendLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqSendLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqSendLog
         * @function getTypeUrl
         * @memberof OnlinePlayer.ReqSendLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqSendLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ReqSendLog";
        };

        return ReqSendLog;
    })();

    OnlinePlayer.ResSendLog = (function() {

        /**
         * Properties of a ResSendLog.
         * @memberof OnlinePlayer
         * @interface IResSendLog
         * @property {boolean|null} [success] ResSendLog success
         */

        /**
         * Constructs a new ResSendLog.
         * @memberof OnlinePlayer
         * @classdesc Represents a ResSendLog.
         * @implements IResSendLog
         * @constructor
         * @param {OnlinePlayer.IResSendLog=} [properties] Properties to set
         */
        function ResSendLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResSendLog success.
         * @member {boolean} success
         * @memberof OnlinePlayer.ResSendLog
         * @instance
         */
        ResSendLog.prototype.success = false;

        /**
         * Creates a new ResSendLog instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {OnlinePlayer.IResSendLog=} [properties] Properties to set
         * @returns {OnlinePlayer.ResSendLog} ResSendLog instance
         */
        ResSendLog.create = function create(properties) {
            return new ResSendLog(properties);
        };

        /**
         * Encodes the specified ResSendLog message. Does not implicitly {@link OnlinePlayer.ResSendLog.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {OnlinePlayer.IResSendLog} message ResSendLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSendLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified ResSendLog message, length delimited. Does not implicitly {@link OnlinePlayer.ResSendLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {OnlinePlayer.IResSendLog} message ResSendLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSendLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResSendLog message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ResSendLog} ResSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSendLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ResSendLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResSendLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ResSendLog} ResSendLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSendLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResSendLog message.
         * @function verify
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResSendLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a ResSendLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ResSendLog} ResSendLog
         */
        ResSendLog.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ResSendLog)
                return object;
            var message = new $root.OnlinePlayer.ResSendLog();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a ResSendLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {OnlinePlayer.ResSendLog} message ResSendLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResSendLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this ResSendLog to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ResSendLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResSendLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResSendLog
         * @function getTypeUrl
         * @memberof OnlinePlayer.ResSendLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResSendLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ResSendLog";
        };

        return ResSendLog;
    })();

    OnlinePlayer.ReqReceiveLog = (function() {

        /**
         * Properties of a ReqReceiveLog.
         * @memberof OnlinePlayer
         * @interface IReqReceiveLog
         * @property {string|null} [playerId] ReqReceiveLog playerId
         */

        /**
         * Constructs a new ReqReceiveLog.
         * @memberof OnlinePlayer
         * @classdesc Represents a ReqReceiveLog.
         * @implements IReqReceiveLog
         * @constructor
         * @param {OnlinePlayer.IReqReceiveLog=} [properties] Properties to set
         */
        function ReqReceiveLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqReceiveLog playerId.
         * @member {string} playerId
         * @memberof OnlinePlayer.ReqReceiveLog
         * @instance
         */
        ReqReceiveLog.prototype.playerId = "";

        /**
         * Creates a new ReqReceiveLog instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {OnlinePlayer.IReqReceiveLog=} [properties] Properties to set
         * @returns {OnlinePlayer.ReqReceiveLog} ReqReceiveLog instance
         */
        ReqReceiveLog.create = function create(properties) {
            return new ReqReceiveLog(properties);
        };

        /**
         * Encodes the specified ReqReceiveLog message. Does not implicitly {@link OnlinePlayer.ReqReceiveLog.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {OnlinePlayer.IReqReceiveLog} message ReqReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReceiveLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified ReqReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.ReqReceiveLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {OnlinePlayer.IReqReceiveLog} message ReqReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqReceiveLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqReceiveLog message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ReqReceiveLog} ReqReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReceiveLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ReqReceiveLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqReceiveLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ReqReceiveLog} ReqReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqReceiveLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqReceiveLog message.
         * @function verify
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqReceiveLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            return null;
        };

        /**
         * Creates a ReqReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ReqReceiveLog} ReqReceiveLog
         */
        ReqReceiveLog.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ReqReceiveLog)
                return object;
            var message = new $root.OnlinePlayer.ReqReceiveLog();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            return message;
        };

        /**
         * Creates a plain object from a ReqReceiveLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {OnlinePlayer.ReqReceiveLog} message ReqReceiveLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqReceiveLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerId = "";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            return object;
        };

        /**
         * Converts this ReqReceiveLog to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ReqReceiveLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqReceiveLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqReceiveLog
         * @function getTypeUrl
         * @memberof OnlinePlayer.ReqReceiveLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqReceiveLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ReqReceiveLog";
        };

        return ReqReceiveLog;
    })();

    OnlinePlayer.ResReceiveLog = (function() {

        /**
         * Properties of a ResReceiveLog.
         * @memberof OnlinePlayer
         * @interface IResReceiveLog
         * @property {boolean|null} [success] ResReceiveLog success
         */

        /**
         * Constructs a new ResReceiveLog.
         * @memberof OnlinePlayer
         * @classdesc Represents a ResReceiveLog.
         * @implements IResReceiveLog
         * @constructor
         * @param {OnlinePlayer.IResReceiveLog=} [properties] Properties to set
         */
        function ResReceiveLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResReceiveLog success.
         * @member {boolean} success
         * @memberof OnlinePlayer.ResReceiveLog
         * @instance
         */
        ResReceiveLog.prototype.success = false;

        /**
         * Creates a new ResReceiveLog instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {OnlinePlayer.IResReceiveLog=} [properties] Properties to set
         * @returns {OnlinePlayer.ResReceiveLog} ResReceiveLog instance
         */
        ResReceiveLog.create = function create(properties) {
            return new ResReceiveLog(properties);
        };

        /**
         * Encodes the specified ResReceiveLog message. Does not implicitly {@link OnlinePlayer.ResReceiveLog.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {OnlinePlayer.IResReceiveLog} message ResReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResReceiveLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified ResReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.ResReceiveLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {OnlinePlayer.IResReceiveLog} message ResReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResReceiveLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResReceiveLog message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ResReceiveLog} ResReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResReceiveLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ResReceiveLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResReceiveLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ResReceiveLog} ResReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResReceiveLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResReceiveLog message.
         * @function verify
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResReceiveLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a ResReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ResReceiveLog} ResReceiveLog
         */
        ResReceiveLog.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ResReceiveLog)
                return object;
            var message = new $root.OnlinePlayer.ResReceiveLog();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a ResReceiveLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {OnlinePlayer.ResReceiveLog} message ResReceiveLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResReceiveLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this ResReceiveLog to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ResReceiveLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResReceiveLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResReceiveLog
         * @function getTypeUrl
         * @memberof OnlinePlayer.ResReceiveLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResReceiveLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ResReceiveLog";
        };

        return ResReceiveLog;
    })();

    OnlinePlayer.NotifyReceiveLog = (function() {

        /**
         * Properties of a NotifyReceiveLog.
         * @memberof OnlinePlayer
         * @interface INotifyReceiveLog
         * @property {string|null} [playerId] NotifyReceiveLog playerId
         * @property {string|null} [log] NotifyReceiveLog log
         */

        /**
         * Constructs a new NotifyReceiveLog.
         * @memberof OnlinePlayer
         * @classdesc Represents a NotifyReceiveLog.
         * @implements INotifyReceiveLog
         * @constructor
         * @param {OnlinePlayer.INotifyReceiveLog=} [properties] Properties to set
         */
        function NotifyReceiveLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyReceiveLog playerId.
         * @member {string} playerId
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @instance
         */
        NotifyReceiveLog.prototype.playerId = "";

        /**
         * NotifyReceiveLog log.
         * @member {string} log
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @instance
         */
        NotifyReceiveLog.prototype.log = "";

        /**
         * Creates a new NotifyReceiveLog instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {OnlinePlayer.INotifyReceiveLog=} [properties] Properties to set
         * @returns {OnlinePlayer.NotifyReceiveLog} NotifyReceiveLog instance
         */
        NotifyReceiveLog.create = function create(properties) {
            return new NotifyReceiveLog(properties);
        };

        /**
         * Encodes the specified NotifyReceiveLog message. Does not implicitly {@link OnlinePlayer.NotifyReceiveLog.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {OnlinePlayer.INotifyReceiveLog} message NotifyReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyReceiveLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.log);
            return writer;
        };

        /**
         * Encodes the specified NotifyReceiveLog message, length delimited. Does not implicitly {@link OnlinePlayer.NotifyReceiveLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {OnlinePlayer.INotifyReceiveLog} message NotifyReceiveLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyReceiveLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyReceiveLog message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.NotifyReceiveLog} NotifyReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyReceiveLog.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.NotifyReceiveLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.log = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyReceiveLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.NotifyReceiveLog} NotifyReceiveLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyReceiveLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyReceiveLog message.
         * @function verify
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyReceiveLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.log != null && message.hasOwnProperty("log"))
                if (!$util.isString(message.log))
                    return "log: string expected";
            return null;
        };

        /**
         * Creates a NotifyReceiveLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.NotifyReceiveLog} NotifyReceiveLog
         */
        NotifyReceiveLog.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.NotifyReceiveLog)
                return object;
            var message = new $root.OnlinePlayer.NotifyReceiveLog();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.log != null)
                message.log = String(object.log);
            return message;
        };

        /**
         * Creates a plain object from a NotifyReceiveLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {OnlinePlayer.NotifyReceiveLog} message NotifyReceiveLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyReceiveLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = "";
                object.log = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.log != null && message.hasOwnProperty("log"))
                object.log = message.log;
            return object;
        };

        /**
         * Converts this NotifyReceiveLog to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyReceiveLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyReceiveLog
         * @function getTypeUrl
         * @memberof OnlinePlayer.NotifyReceiveLog
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyReceiveLog.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.NotifyReceiveLog";
        };

        return NotifyReceiveLog;
    })();

    OnlinePlayer.ReqEvalCode = (function() {

        /**
         * Properties of a ReqEvalCode.
         * @memberof OnlinePlayer
         * @interface IReqEvalCode
         * @property {string|null} [playerId] ReqEvalCode playerId
         * @property {string|null} [code] ReqEvalCode code
         */

        /**
         * Constructs a new ReqEvalCode.
         * @memberof OnlinePlayer
         * @classdesc Represents a ReqEvalCode.
         * @implements IReqEvalCode
         * @constructor
         * @param {OnlinePlayer.IReqEvalCode=} [properties] Properties to set
         */
        function ReqEvalCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEvalCode playerId.
         * @member {string} playerId
         * @memberof OnlinePlayer.ReqEvalCode
         * @instance
         */
        ReqEvalCode.prototype.playerId = "";

        /**
         * ReqEvalCode code.
         * @member {string} code
         * @memberof OnlinePlayer.ReqEvalCode
         * @instance
         */
        ReqEvalCode.prototype.code = "";

        /**
         * Creates a new ReqEvalCode instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {OnlinePlayer.IReqEvalCode=} [properties] Properties to set
         * @returns {OnlinePlayer.ReqEvalCode} ReqEvalCode instance
         */
        ReqEvalCode.create = function create(properties) {
            return new ReqEvalCode(properties);
        };

        /**
         * Encodes the specified ReqEvalCode message. Does not implicitly {@link OnlinePlayer.ReqEvalCode.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {OnlinePlayer.IReqEvalCode} message ReqEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEvalCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified ReqEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.ReqEvalCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {OnlinePlayer.IReqEvalCode} message ReqEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEvalCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEvalCode message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ReqEvalCode} ReqEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEvalCode.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ReqEvalCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqEvalCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ReqEvalCode} ReqEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEvalCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEvalCode message.
         * @function verify
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEvalCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a ReqEvalCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ReqEvalCode} ReqEvalCode
         */
        ReqEvalCode.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ReqEvalCode)
                return object;
            var message = new $root.OnlinePlayer.ReqEvalCode();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a ReqEvalCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {OnlinePlayer.ReqEvalCode} message ReqEvalCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqEvalCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = "";
                object.code = "";
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this ReqEvalCode to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ReqEvalCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqEvalCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqEvalCode
         * @function getTypeUrl
         * @memberof OnlinePlayer.ReqEvalCode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqEvalCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ReqEvalCode";
        };

        return ReqEvalCode;
    })();

    OnlinePlayer.ResEvalCode = (function() {

        /**
         * Properties of a ResEvalCode.
         * @memberof OnlinePlayer
         * @interface IResEvalCode
         * @property {boolean|null} [success] ResEvalCode success
         */

        /**
         * Constructs a new ResEvalCode.
         * @memberof OnlinePlayer
         * @classdesc Represents a ResEvalCode.
         * @implements IResEvalCode
         * @constructor
         * @param {OnlinePlayer.IResEvalCode=} [properties] Properties to set
         */
        function ResEvalCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResEvalCode success.
         * @member {boolean} success
         * @memberof OnlinePlayer.ResEvalCode
         * @instance
         */
        ResEvalCode.prototype.success = false;

        /**
         * Creates a new ResEvalCode instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {OnlinePlayer.IResEvalCode=} [properties] Properties to set
         * @returns {OnlinePlayer.ResEvalCode} ResEvalCode instance
         */
        ResEvalCode.create = function create(properties) {
            return new ResEvalCode(properties);
        };

        /**
         * Encodes the specified ResEvalCode message. Does not implicitly {@link OnlinePlayer.ResEvalCode.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {OnlinePlayer.IResEvalCode} message ResEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResEvalCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified ResEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.ResEvalCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {OnlinePlayer.IResEvalCode} message ResEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResEvalCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResEvalCode message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.ResEvalCode} ResEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResEvalCode.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.ResEvalCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResEvalCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.ResEvalCode} ResEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResEvalCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResEvalCode message.
         * @function verify
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResEvalCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a ResEvalCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.ResEvalCode} ResEvalCode
         */
        ResEvalCode.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.ResEvalCode)
                return object;
            var message = new $root.OnlinePlayer.ResEvalCode();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a ResEvalCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {OnlinePlayer.ResEvalCode} message ResEvalCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResEvalCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this ResEvalCode to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.ResEvalCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResEvalCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResEvalCode
         * @function getTypeUrl
         * @memberof OnlinePlayer.ResEvalCode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResEvalCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.ResEvalCode";
        };

        return ResEvalCode;
    })();

    OnlinePlayer.NotifyEvalCode = (function() {

        /**
         * Properties of a NotifyEvalCode.
         * @memberof OnlinePlayer
         * @interface INotifyEvalCode
         * @property {string|null} [code] NotifyEvalCode code
         * @property {string|null} [result] NotifyEvalCode result
         */

        /**
         * Constructs a new NotifyEvalCode.
         * @memberof OnlinePlayer
         * @classdesc Represents a NotifyEvalCode.
         * @implements INotifyEvalCode
         * @constructor
         * @param {OnlinePlayer.INotifyEvalCode=} [properties] Properties to set
         */
        function NotifyEvalCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyEvalCode code.
         * @member {string} code
         * @memberof OnlinePlayer.NotifyEvalCode
         * @instance
         */
        NotifyEvalCode.prototype.code = "";

        /**
         * NotifyEvalCode result.
         * @member {string} result
         * @memberof OnlinePlayer.NotifyEvalCode
         * @instance
         */
        NotifyEvalCode.prototype.result = "";

        /**
         * Creates a new NotifyEvalCode instance using the specified properties.
         * @function create
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {OnlinePlayer.INotifyEvalCode=} [properties] Properties to set
         * @returns {OnlinePlayer.NotifyEvalCode} NotifyEvalCode instance
         */
        NotifyEvalCode.create = function create(properties) {
            return new NotifyEvalCode(properties);
        };

        /**
         * Encodes the specified NotifyEvalCode message. Does not implicitly {@link OnlinePlayer.NotifyEvalCode.verify|verify} messages.
         * @function encode
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {OnlinePlayer.INotifyEvalCode} message NotifyEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyEvalCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            return writer;
        };

        /**
         * Encodes the specified NotifyEvalCode message, length delimited. Does not implicitly {@link OnlinePlayer.NotifyEvalCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {OnlinePlayer.INotifyEvalCode} message NotifyEvalCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyEvalCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyEvalCode message from the specified reader or buffer.
         * @function decode
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OnlinePlayer.NotifyEvalCode} NotifyEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyEvalCode.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OnlinePlayer.NotifyEvalCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.result = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyEvalCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OnlinePlayer.NotifyEvalCode} NotifyEvalCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyEvalCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyEvalCode message.
         * @function verify
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyEvalCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            return null;
        };

        /**
         * Creates a NotifyEvalCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OnlinePlayer.NotifyEvalCode} NotifyEvalCode
         */
        NotifyEvalCode.fromObject = function fromObject(object) {
            if (object instanceof $root.OnlinePlayer.NotifyEvalCode)
                return object;
            var message = new $root.OnlinePlayer.NotifyEvalCode();
            if (object.code != null)
                message.code = String(object.code);
            if (object.result != null)
                message.result = String(object.result);
            return message;
        };

        /**
         * Creates a plain object from a NotifyEvalCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {OnlinePlayer.NotifyEvalCode} message NotifyEvalCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyEvalCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = "";
                object.result = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this NotifyEvalCode to JSON.
         * @function toJSON
         * @memberof OnlinePlayer.NotifyEvalCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyEvalCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyEvalCode
         * @function getTypeUrl
         * @memberof OnlinePlayer.NotifyEvalCode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyEvalCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/OnlinePlayer.NotifyEvalCode";
        };

        return NotifyEvalCode;
    })();

    return OnlinePlayer;
})();

$root.pokemonGuess = (function() {

    /**
     * Namespace pokemonGuess.
     * @exports pokemonGuess
     * @namespace
     */
    var pokemonGuess = {};

    /**
     * ProtocolNumber enum.
     * @name pokemonGuess.ProtocolNumber
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} REQ_UPDATE_GAME_SETTINGS=4001 REQ_UPDATE_GAME_SETTINGS value
     * @property {number} RES_UPDATE_GAME_SETTINGS=4002 RES_UPDATE_GAME_SETTINGS value
     * @property {number} REQ_START_GAME=4010 REQ_START_GAME value
     * @property {number} RES_START_GAME=4011 RES_START_GAME value
     * @property {number} REQ_END_GAME=4012 REQ_END_GAME value
     * @property {number} RES_END_GAME=4013 RES_END_GAME value
     * @property {number} REQ_SUBMIT_GUESS=4020 REQ_SUBMIT_GUESS value
     * @property {number} RES_SUBMIT_GUESS=4021 RES_SUBMIT_GUESS value
     * @property {number} NOTIFY_GAME_STATE=4030 NOTIFY_GAME_STATE value
     * @property {number} NOTIFY_GAME_STARTED=4031 NOTIFY_GAME_STARTED value
     * @property {number} NOTIFY_GAME_ENDED=4032 NOTIFY_GAME_ENDED value
     * @property {number} NOTIFY_SETTINGS_CHANGED=4033 NOTIFY_SETTINGS_CHANGED value
     * @property {number} NOTIFY_PLAYER_DETAIL=4034 NOTIFY_PLAYER_DETAIL value
     */
    pokemonGuess.ProtocolNumber = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[4001] = "REQ_UPDATE_GAME_SETTINGS"] = 4001;
        values[valuesById[4002] = "RES_UPDATE_GAME_SETTINGS"] = 4002;
        values[valuesById[4010] = "REQ_START_GAME"] = 4010;
        values[valuesById[4011] = "RES_START_GAME"] = 4011;
        values[valuesById[4012] = "REQ_END_GAME"] = 4012;
        values[valuesById[4013] = "RES_END_GAME"] = 4013;
        values[valuesById[4020] = "REQ_SUBMIT_GUESS"] = 4020;
        values[valuesById[4021] = "RES_SUBMIT_GUESS"] = 4021;
        values[valuesById[4030] = "NOTIFY_GAME_STATE"] = 4030;
        values[valuesById[4031] = "NOTIFY_GAME_STARTED"] = 4031;
        values[valuesById[4032] = "NOTIFY_GAME_ENDED"] = 4032;
        values[valuesById[4033] = "NOTIFY_SETTINGS_CHANGED"] = 4033;
        values[valuesById[4034] = "NOTIFY_PLAYER_DETAIL"] = 4034;
        return values;
    })();

    /**
     * PlayerStatus enum.
     * @name pokemonGuess.PlayerStatus
     * @enum {number}
     * @property {number} ACTIVE=0 ACTIVE value
     * @property {number} FOUND_ANSWER=1 FOUND_ANSWER value
     * @property {number} OUT_OF_ATTEMPTS=2 OUT_OF_ATTEMPTS value
     * @property {number} GAVE_UP=3 GAVE_UP value
     * @property {number} DISCONNECTED=4 DISCONNECTED value
     */
    pokemonGuess.PlayerStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACTIVE"] = 0;
        values[valuesById[1] = "FOUND_ANSWER"] = 1;
        values[valuesById[2] = "OUT_OF_ATTEMPTS"] = 2;
        values[valuesById[3] = "GAVE_UP"] = 3;
        values[valuesById[4] = "DISCONNECTED"] = 4;
        return values;
    })();

    /**
     * GameState enum.
     * @name pokemonGuess.GameState
     * @enum {number}
     * @property {number} WAITING=0 WAITING value
     * @property {number} IN_PROGRESS=1 IN_PROGRESS value
     * @property {number} ENDED=2 ENDED value
     */
    pokemonGuess.GameState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WAITING"] = 0;
        values[valuesById[1] = "IN_PROGRESS"] = 1;
        values[valuesById[2] = "ENDED"] = 2;
        return values;
    })();

    /**
     * GuessResultStatus enum.
     * @name pokemonGuess.GuessResultStatus
     * @enum {number}
     * @property {number} GUESS_UNKNOWN=0 GUESS_UNKNOWN value
     * @property {number} GUESS_CORRECT=1 GUESS_CORRECT value
     * @property {number} GUESS_WRONG=2 GUESS_WRONG value
     * @property {number} GUESS_GAVE_UP=3 GUESS_GAVE_UP value
     * @property {number} GUESS_DISCONNECTED=4 GUESS_DISCONNECTED value
     */
    pokemonGuess.GuessResultStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GUESS_UNKNOWN"] = 0;
        values[valuesById[1] = "GUESS_CORRECT"] = 1;
        values[valuesById[2] = "GUESS_WRONG"] = 2;
        values[valuesById[3] = "GUESS_GAVE_UP"] = 3;
        values[valuesById[4] = "GUESS_DISCONNECTED"] = 4;
        return values;
    })();

    pokemonGuess.GuessResultSummary = (function() {

        /**
         * Properties of a GuessResultSummary.
         * @memberof pokemonGuess
         * @interface IGuessResultSummary
         * @property {number|null} [attemptNumber] GuessResultSummary attemptNumber
         * @property {pokemonGuess.GuessResultStatus|null} [status] GuessResultSummary status
         * @property {number|Long|null} [timestamp] GuessResultSummary timestamp
         */

        /**
         * Constructs a new GuessResultSummary.
         * @memberof pokemonGuess
         * @classdesc Represents a GuessResultSummary.
         * @implements IGuessResultSummary
         * @constructor
         * @param {pokemonGuess.IGuessResultSummary=} [properties] Properties to set
         */
        function GuessResultSummary(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuessResultSummary attemptNumber.
         * @member {number} attemptNumber
         * @memberof pokemonGuess.GuessResultSummary
         * @instance
         */
        GuessResultSummary.prototype.attemptNumber = 0;

        /**
         * GuessResultSummary status.
         * @member {pokemonGuess.GuessResultStatus} status
         * @memberof pokemonGuess.GuessResultSummary
         * @instance
         */
        GuessResultSummary.prototype.status = 0;

        /**
         * GuessResultSummary timestamp.
         * @member {number|Long} timestamp
         * @memberof pokemonGuess.GuessResultSummary
         * @instance
         */
        GuessResultSummary.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GuessResultSummary instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {pokemonGuess.IGuessResultSummary=} [properties] Properties to set
         * @returns {pokemonGuess.GuessResultSummary} GuessResultSummary instance
         */
        GuessResultSummary.create = function create(properties) {
            return new GuessResultSummary(properties);
        };

        /**
         * Encodes the specified GuessResultSummary message. Does not implicitly {@link pokemonGuess.GuessResultSummary.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {pokemonGuess.IGuessResultSummary} message GuessResultSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuessResultSummary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attemptNumber != null && Object.hasOwnProperty.call(message, "attemptNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.attemptNumber);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified GuessResultSummary message, length delimited. Does not implicitly {@link pokemonGuess.GuessResultSummary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {pokemonGuess.IGuessResultSummary} message GuessResultSummary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuessResultSummary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuessResultSummary message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.GuessResultSummary} GuessResultSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuessResultSummary.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.GuessResultSummary();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.attemptNumber = reader.int32();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuessResultSummary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.GuessResultSummary} GuessResultSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuessResultSummary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuessResultSummary message.
         * @function verify
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuessResultSummary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                if (!$util.isInteger(message.attemptNumber))
                    return "attemptNumber: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a GuessResultSummary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.GuessResultSummary} GuessResultSummary
         */
        GuessResultSummary.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.GuessResultSummary)
                return object;
            var message = new $root.pokemonGuess.GuessResultSummary();
            if (object.attemptNumber != null)
                message.attemptNumber = object.attemptNumber | 0;
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "GUESS_UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "GUESS_CORRECT":
            case 1:
                message.status = 1;
                break;
            case "GUESS_WRONG":
            case 2:
                message.status = 2;
                break;
            case "GUESS_GAVE_UP":
            case 3:
                message.status = 3;
                break;
            case "GUESS_DISCONNECTED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GuessResultSummary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {pokemonGuess.GuessResultSummary} message GuessResultSummary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuessResultSummary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.attemptNumber = 0;
                object.status = options.enums === String ? "GUESS_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                object.attemptNumber = message.attemptNumber;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pokemonGuess.GuessResultStatus[message.status] === undefined ? message.status : $root.pokemonGuess.GuessResultStatus[message.status] : message.status;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this GuessResultSummary to JSON.
         * @function toJSON
         * @memberof pokemonGuess.GuessResultSummary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuessResultSummary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GuessResultSummary
         * @function getTypeUrl
         * @memberof pokemonGuess.GuessResultSummary
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GuessResultSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.GuessResultSummary";
        };

        return GuessResultSummary;
    })();

    pokemonGuess.AttributeComparison = (function() {

        /**
         * Properties of an AttributeComparison.
         * @memberof pokemonGuess
         * @interface IAttributeComparison
         * @property {string|null} [key] AttributeComparison key
         * @property {string|null} [value] AttributeComparison value
         * @property {string|null} [distance] AttributeComparison distance
         */

        /**
         * Constructs a new AttributeComparison.
         * @memberof pokemonGuess
         * @classdesc Represents an AttributeComparison.
         * @implements IAttributeComparison
         * @constructor
         * @param {pokemonGuess.IAttributeComparison=} [properties] Properties to set
         */
        function AttributeComparison(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttributeComparison key.
         * @member {string} key
         * @memberof pokemonGuess.AttributeComparison
         * @instance
         */
        AttributeComparison.prototype.key = "";

        /**
         * AttributeComparison value.
         * @member {string} value
         * @memberof pokemonGuess.AttributeComparison
         * @instance
         */
        AttributeComparison.prototype.value = "";

        /**
         * AttributeComparison distance.
         * @member {string} distance
         * @memberof pokemonGuess.AttributeComparison
         * @instance
         */
        AttributeComparison.prototype.distance = "";

        /**
         * Creates a new AttributeComparison instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {pokemonGuess.IAttributeComparison=} [properties] Properties to set
         * @returns {pokemonGuess.AttributeComparison} AttributeComparison instance
         */
        AttributeComparison.create = function create(properties) {
            return new AttributeComparison(properties);
        };

        /**
         * Encodes the specified AttributeComparison message. Does not implicitly {@link pokemonGuess.AttributeComparison.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {pokemonGuess.IAttributeComparison} message AttributeComparison message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttributeComparison.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.distance);
            return writer;
        };

        /**
         * Encodes the specified AttributeComparison message, length delimited. Does not implicitly {@link pokemonGuess.AttributeComparison.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {pokemonGuess.IAttributeComparison} message AttributeComparison message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttributeComparison.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttributeComparison message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.AttributeComparison} AttributeComparison
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttributeComparison.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.AttributeComparison();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.key = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                case 3: {
                        message.distance = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttributeComparison message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.AttributeComparison} AttributeComparison
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttributeComparison.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttributeComparison message.
         * @function verify
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttributeComparison.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            if (message.distance != null && message.hasOwnProperty("distance"))
                if (!$util.isString(message.distance))
                    return "distance: string expected";
            return null;
        };

        /**
         * Creates an AttributeComparison message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.AttributeComparison} AttributeComparison
         */
        AttributeComparison.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.AttributeComparison)
                return object;
            var message = new $root.pokemonGuess.AttributeComparison();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            if (object.distance != null)
                message.distance = String(object.distance);
            return message;
        };

        /**
         * Creates a plain object from an AttributeComparison message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {pokemonGuess.AttributeComparison} message AttributeComparison
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttributeComparison.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
                object.distance = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.distance != null && message.hasOwnProperty("distance"))
                object.distance = message.distance;
            return object;
        };

        /**
         * Converts this AttributeComparison to JSON.
         * @function toJSON
         * @memberof pokemonGuess.AttributeComparison
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttributeComparison.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttributeComparison
         * @function getTypeUrl
         * @memberof pokemonGuess.AttributeComparison
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttributeComparison.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.AttributeComparison";
        };

        return AttributeComparison;
    })();

    pokemonGuess.PlayerGuessDetail = (function() {

        /**
         * Properties of a PlayerGuessDetail.
         * @memberof pokemonGuess
         * @interface IPlayerGuessDetail
         * @property {number|null} [attemptNumber] PlayerGuessDetail attemptNumber
         * @property {string|null} [pokemonName] PlayerGuessDetail pokemonName
         * @property {pokemonGuess.GuessResultStatus|null} [status] PlayerGuessDetail status
         * @property {number|Long|null} [timestamp] PlayerGuessDetail timestamp
         * @property {Array.<pokemonGuess.IAttributeComparison>|null} [type] PlayerGuessDetail type
         * @property {pokemonGuess.IAttributeComparison|null} [power] PlayerGuessDetail power
         * @property {pokemonGuess.IAttributeComparison|null} [speed] PlayerGuessDetail speed
         * @property {pokemonGuess.IAttributeComparison|null} [attack] PlayerGuessDetail attack
         * @property {pokemonGuess.IAttributeComparison|null} [defense] PlayerGuessDetail defense
         * @property {pokemonGuess.IAttributeComparison|null} [generation] PlayerGuessDetail generation
         * @property {pokemonGuess.IAttributeComparison|null} [shape] PlayerGuessDetail shape
         * @property {pokemonGuess.IAttributeComparison|null} [evolution] PlayerGuessDetail evolution
         * @property {pokemonGuess.IAttributeComparison|null} [catchRate] PlayerGuessDetail catchRate
         * @property {Array.<pokemonGuess.IAttributeComparison>|null} [abilities] PlayerGuessDetail abilities
         * @property {Array.<pokemonGuess.IAttributeComparison>|null} [eggs] PlayerGuessDetail eggs
         * @property {Array.<pokemonGuess.IAttributeComparison>|null} [labels] PlayerGuessDetail labels
         * @property {pokemonGuess.IAttributeComparison|null} [stage] PlayerGuessDetail stage
         * @property {string|null} [color] PlayerGuessDetail color
         */

        /**
         * Constructs a new PlayerGuessDetail.
         * @memberof pokemonGuess
         * @classdesc Represents a PlayerGuessDetail.
         * @implements IPlayerGuessDetail
         * @constructor
         * @param {pokemonGuess.IPlayerGuessDetail=} [properties] Properties to set
         */
        function PlayerGuessDetail(properties) {
            this.type = [];
            this.abilities = [];
            this.eggs = [];
            this.labels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerGuessDetail attemptNumber.
         * @member {number} attemptNumber
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.attemptNumber = 0;

        /**
         * PlayerGuessDetail pokemonName.
         * @member {string} pokemonName
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.pokemonName = "";

        /**
         * PlayerGuessDetail status.
         * @member {pokemonGuess.GuessResultStatus} status
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.status = 0;

        /**
         * PlayerGuessDetail timestamp.
         * @member {number|Long} timestamp
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerGuessDetail type.
         * @member {Array.<pokemonGuess.IAttributeComparison>} type
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.type = $util.emptyArray;

        /**
         * PlayerGuessDetail power.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} power
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.power = null;

        /**
         * PlayerGuessDetail speed.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} speed
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.speed = null;

        /**
         * PlayerGuessDetail attack.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} attack
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.attack = null;

        /**
         * PlayerGuessDetail defense.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} defense
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.defense = null;

        /**
         * PlayerGuessDetail generation.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} generation
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.generation = null;

        /**
         * PlayerGuessDetail shape.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} shape
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.shape = null;

        /**
         * PlayerGuessDetail evolution.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} evolution
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.evolution = null;

        /**
         * PlayerGuessDetail catchRate.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} catchRate
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.catchRate = null;

        /**
         * PlayerGuessDetail abilities.
         * @member {Array.<pokemonGuess.IAttributeComparison>} abilities
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.abilities = $util.emptyArray;

        /**
         * PlayerGuessDetail eggs.
         * @member {Array.<pokemonGuess.IAttributeComparison>} eggs
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.eggs = $util.emptyArray;

        /**
         * PlayerGuessDetail labels.
         * @member {Array.<pokemonGuess.IAttributeComparison>} labels
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.labels = $util.emptyArray;

        /**
         * PlayerGuessDetail stage.
         * @member {pokemonGuess.IAttributeComparison|null|undefined} stage
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.stage = null;

        /**
         * PlayerGuessDetail color.
         * @member {string} color
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         */
        PlayerGuessDetail.prototype.color = "";

        /**
         * Creates a new PlayerGuessDetail instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {pokemonGuess.IPlayerGuessDetail=} [properties] Properties to set
         * @returns {pokemonGuess.PlayerGuessDetail} PlayerGuessDetail instance
         */
        PlayerGuessDetail.create = function create(properties) {
            return new PlayerGuessDetail(properties);
        };

        /**
         * Encodes the specified PlayerGuessDetail message. Does not implicitly {@link pokemonGuess.PlayerGuessDetail.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {pokemonGuess.IPlayerGuessDetail} message PlayerGuessDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGuessDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.attemptNumber != null && Object.hasOwnProperty.call(message, "attemptNumber"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.attemptNumber);
            if (message.pokemonName != null && Object.hasOwnProperty.call(message, "pokemonName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pokemonName);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            if (message.type != null && message.type.length)
                for (var i = 0; i < message.type.length; ++i)
                    $root.pokemonGuess.AttributeComparison.encode(message.type[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.power != null && Object.hasOwnProperty.call(message, "power"))
                $root.pokemonGuess.AttributeComparison.encode(message.power, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.speed != null && Object.hasOwnProperty.call(message, "speed"))
                $root.pokemonGuess.AttributeComparison.encode(message.speed, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.attack != null && Object.hasOwnProperty.call(message, "attack"))
                $root.pokemonGuess.AttributeComparison.encode(message.attack, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.defense != null && Object.hasOwnProperty.call(message, "defense"))
                $root.pokemonGuess.AttributeComparison.encode(message.defense, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.generation != null && Object.hasOwnProperty.call(message, "generation"))
                $root.pokemonGuess.AttributeComparison.encode(message.generation, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.shape != null && Object.hasOwnProperty.call(message, "shape"))
                $root.pokemonGuess.AttributeComparison.encode(message.shape, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.evolution != null && Object.hasOwnProperty.call(message, "evolution"))
                $root.pokemonGuess.AttributeComparison.encode(message.evolution, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.catchRate != null && Object.hasOwnProperty.call(message, "catchRate"))
                $root.pokemonGuess.AttributeComparison.encode(message.catchRate, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.abilities != null && message.abilities.length)
                for (var i = 0; i < message.abilities.length; ++i)
                    $root.pokemonGuess.AttributeComparison.encode(message.abilities[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.eggs != null && message.eggs.length)
                for (var i = 0; i < message.eggs.length; ++i)
                    $root.pokemonGuess.AttributeComparison.encode(message.eggs[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.labels != null && message.labels.length)
                for (var i = 0; i < message.labels.length; ++i)
                    $root.pokemonGuess.AttributeComparison.encode(message.labels[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.stage != null && Object.hasOwnProperty.call(message, "stage"))
                $root.pokemonGuess.AttributeComparison.encode(message.stage, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.color);
            return writer;
        };

        /**
         * Encodes the specified PlayerGuessDetail message, length delimited. Does not implicitly {@link pokemonGuess.PlayerGuessDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {pokemonGuess.IPlayerGuessDetail} message PlayerGuessDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerGuessDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerGuessDetail message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.PlayerGuessDetail} PlayerGuessDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGuessDetail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.PlayerGuessDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.attemptNumber = reader.int32();
                        break;
                    }
                case 2: {
                        message.pokemonName = reader.string();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 5: {
                        if (!(message.type && message.type.length))
                            message.type = [];
                        message.type.push($root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.power = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.speed = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.attack = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.defense = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.generation = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.shape = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.evolution = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.catchRate = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        if (!(message.abilities && message.abilities.length))
                            message.abilities = [];
                        message.abilities.push($root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32()));
                        break;
                    }
                case 15: {
                        if (!(message.eggs && message.eggs.length))
                            message.eggs = [];
                        message.eggs.push($root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32()));
                        break;
                    }
                case 16: {
                        if (!(message.labels && message.labels.length))
                            message.labels = [];
                        message.labels.push($root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32()));
                        break;
                    }
                case 17: {
                        message.stage = $root.pokemonGuess.AttributeComparison.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.color = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerGuessDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.PlayerGuessDetail} PlayerGuessDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerGuessDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerGuessDetail message.
         * @function verify
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerGuessDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                if (!$util.isInteger(message.attemptNumber))
                    return "attemptNumber: integer expected";
            if (message.pokemonName != null && message.hasOwnProperty("pokemonName"))
                if (!$util.isString(message.pokemonName))
                    return "pokemonName: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type")) {
                if (!Array.isArray(message.type))
                    return "type: array expected";
                for (var i = 0; i < message.type.length; ++i) {
                    var error = $root.pokemonGuess.AttributeComparison.verify(message.type[i]);
                    if (error)
                        return "type." + error;
                }
            }
            if (message.power != null && message.hasOwnProperty("power")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.power);
                if (error)
                    return "power." + error;
            }
            if (message.speed != null && message.hasOwnProperty("speed")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.speed);
                if (error)
                    return "speed." + error;
            }
            if (message.attack != null && message.hasOwnProperty("attack")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.attack);
                if (error)
                    return "attack." + error;
            }
            if (message.defense != null && message.hasOwnProperty("defense")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.defense);
                if (error)
                    return "defense." + error;
            }
            if (message.generation != null && message.hasOwnProperty("generation")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.generation);
                if (error)
                    return "generation." + error;
            }
            if (message.shape != null && message.hasOwnProperty("shape")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.shape);
                if (error)
                    return "shape." + error;
            }
            if (message.evolution != null && message.hasOwnProperty("evolution")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.evolution);
                if (error)
                    return "evolution." + error;
            }
            if (message.catchRate != null && message.hasOwnProperty("catchRate")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.catchRate);
                if (error)
                    return "catchRate." + error;
            }
            if (message.abilities != null && message.hasOwnProperty("abilities")) {
                if (!Array.isArray(message.abilities))
                    return "abilities: array expected";
                for (var i = 0; i < message.abilities.length; ++i) {
                    var error = $root.pokemonGuess.AttributeComparison.verify(message.abilities[i]);
                    if (error)
                        return "abilities." + error;
                }
            }
            if (message.eggs != null && message.hasOwnProperty("eggs")) {
                if (!Array.isArray(message.eggs))
                    return "eggs: array expected";
                for (var i = 0; i < message.eggs.length; ++i) {
                    var error = $root.pokemonGuess.AttributeComparison.verify(message.eggs[i]);
                    if (error)
                        return "eggs." + error;
                }
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!Array.isArray(message.labels))
                    return "labels: array expected";
                for (var i = 0; i < message.labels.length; ++i) {
                    var error = $root.pokemonGuess.AttributeComparison.verify(message.labels[i]);
                    if (error)
                        return "labels." + error;
                }
            }
            if (message.stage != null && message.hasOwnProperty("stage")) {
                var error = $root.pokemonGuess.AttributeComparison.verify(message.stage);
                if (error)
                    return "stage." + error;
            }
            if (message.color != null && message.hasOwnProperty("color"))
                if (!$util.isString(message.color))
                    return "color: string expected";
            return null;
        };

        /**
         * Creates a PlayerGuessDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.PlayerGuessDetail} PlayerGuessDetail
         */
        PlayerGuessDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.PlayerGuessDetail)
                return object;
            var message = new $root.pokemonGuess.PlayerGuessDetail();
            if (object.attemptNumber != null)
                message.attemptNumber = object.attemptNumber | 0;
            if (object.pokemonName != null)
                message.pokemonName = String(object.pokemonName);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "GUESS_UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "GUESS_CORRECT":
            case 1:
                message.status = 1;
                break;
            case "GUESS_WRONG":
            case 2:
                message.status = 2;
                break;
            case "GUESS_GAVE_UP":
            case 3:
                message.status = 3;
                break;
            case "GUESS_DISCONNECTED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.type) {
                if (!Array.isArray(object.type))
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.type: array expected");
                message.type = [];
                for (var i = 0; i < object.type.length; ++i) {
                    if (typeof object.type[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerGuessDetail.type: object expected");
                    message.type[i] = $root.pokemonGuess.AttributeComparison.fromObject(object.type[i]);
                }
            }
            if (object.power != null) {
                if (typeof object.power !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.power: object expected");
                message.power = $root.pokemonGuess.AttributeComparison.fromObject(object.power);
            }
            if (object.speed != null) {
                if (typeof object.speed !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.speed: object expected");
                message.speed = $root.pokemonGuess.AttributeComparison.fromObject(object.speed);
            }
            if (object.attack != null) {
                if (typeof object.attack !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.attack: object expected");
                message.attack = $root.pokemonGuess.AttributeComparison.fromObject(object.attack);
            }
            if (object.defense != null) {
                if (typeof object.defense !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.defense: object expected");
                message.defense = $root.pokemonGuess.AttributeComparison.fromObject(object.defense);
            }
            if (object.generation != null) {
                if (typeof object.generation !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.generation: object expected");
                message.generation = $root.pokemonGuess.AttributeComparison.fromObject(object.generation);
            }
            if (object.shape != null) {
                if (typeof object.shape !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.shape: object expected");
                message.shape = $root.pokemonGuess.AttributeComparison.fromObject(object.shape);
            }
            if (object.evolution != null) {
                if (typeof object.evolution !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.evolution: object expected");
                message.evolution = $root.pokemonGuess.AttributeComparison.fromObject(object.evolution);
            }
            if (object.catchRate != null) {
                if (typeof object.catchRate !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.catchRate: object expected");
                message.catchRate = $root.pokemonGuess.AttributeComparison.fromObject(object.catchRate);
            }
            if (object.abilities) {
                if (!Array.isArray(object.abilities))
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.abilities: array expected");
                message.abilities = [];
                for (var i = 0; i < object.abilities.length; ++i) {
                    if (typeof object.abilities[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerGuessDetail.abilities: object expected");
                    message.abilities[i] = $root.pokemonGuess.AttributeComparison.fromObject(object.abilities[i]);
                }
            }
            if (object.eggs) {
                if (!Array.isArray(object.eggs))
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.eggs: array expected");
                message.eggs = [];
                for (var i = 0; i < object.eggs.length; ++i) {
                    if (typeof object.eggs[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerGuessDetail.eggs: object expected");
                    message.eggs[i] = $root.pokemonGuess.AttributeComparison.fromObject(object.eggs[i]);
                }
            }
            if (object.labels) {
                if (!Array.isArray(object.labels))
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.labels: array expected");
                message.labels = [];
                for (var i = 0; i < object.labels.length; ++i) {
                    if (typeof object.labels[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerGuessDetail.labels: object expected");
                    message.labels[i] = $root.pokemonGuess.AttributeComparison.fromObject(object.labels[i]);
                }
            }
            if (object.stage != null) {
                if (typeof object.stage !== "object")
                    throw TypeError(".pokemonGuess.PlayerGuessDetail.stage: object expected");
                message.stage = $root.pokemonGuess.AttributeComparison.fromObject(object.stage);
            }
            if (object.color != null)
                message.color = String(object.color);
            return message;
        };

        /**
         * Creates a plain object from a PlayerGuessDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {pokemonGuess.PlayerGuessDetail} message PlayerGuessDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerGuessDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.type = [];
                object.abilities = [];
                object.eggs = [];
                object.labels = [];
            }
            if (options.defaults) {
                object.attemptNumber = 0;
                object.pokemonName = "";
                object.status = options.enums === String ? "GUESS_UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.power = null;
                object.speed = null;
                object.attack = null;
                object.defense = null;
                object.generation = null;
                object.shape = null;
                object.evolution = null;
                object.catchRate = null;
                object.stage = null;
                object.color = "";
            }
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                object.attemptNumber = message.attemptNumber;
            if (message.pokemonName != null && message.hasOwnProperty("pokemonName"))
                object.pokemonName = message.pokemonName;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pokemonGuess.GuessResultStatus[message.status] === undefined ? message.status : $root.pokemonGuess.GuessResultStatus[message.status] : message.status;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.type && message.type.length) {
                object.type = [];
                for (var j = 0; j < message.type.length; ++j)
                    object.type[j] = $root.pokemonGuess.AttributeComparison.toObject(message.type[j], options);
            }
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = $root.pokemonGuess.AttributeComparison.toObject(message.power, options);
            if (message.speed != null && message.hasOwnProperty("speed"))
                object.speed = $root.pokemonGuess.AttributeComparison.toObject(message.speed, options);
            if (message.attack != null && message.hasOwnProperty("attack"))
                object.attack = $root.pokemonGuess.AttributeComparison.toObject(message.attack, options);
            if (message.defense != null && message.hasOwnProperty("defense"))
                object.defense = $root.pokemonGuess.AttributeComparison.toObject(message.defense, options);
            if (message.generation != null && message.hasOwnProperty("generation"))
                object.generation = $root.pokemonGuess.AttributeComparison.toObject(message.generation, options);
            if (message.shape != null && message.hasOwnProperty("shape"))
                object.shape = $root.pokemonGuess.AttributeComparison.toObject(message.shape, options);
            if (message.evolution != null && message.hasOwnProperty("evolution"))
                object.evolution = $root.pokemonGuess.AttributeComparison.toObject(message.evolution, options);
            if (message.catchRate != null && message.hasOwnProperty("catchRate"))
                object.catchRate = $root.pokemonGuess.AttributeComparison.toObject(message.catchRate, options);
            if (message.abilities && message.abilities.length) {
                object.abilities = [];
                for (var j = 0; j < message.abilities.length; ++j)
                    object.abilities[j] = $root.pokemonGuess.AttributeComparison.toObject(message.abilities[j], options);
            }
            if (message.eggs && message.eggs.length) {
                object.eggs = [];
                for (var j = 0; j < message.eggs.length; ++j)
                    object.eggs[j] = $root.pokemonGuess.AttributeComparison.toObject(message.eggs[j], options);
            }
            if (message.labels && message.labels.length) {
                object.labels = [];
                for (var j = 0; j < message.labels.length; ++j)
                    object.labels[j] = $root.pokemonGuess.AttributeComparison.toObject(message.labels[j], options);
            }
            if (message.stage != null && message.hasOwnProperty("stage"))
                object.stage = $root.pokemonGuess.AttributeComparison.toObject(message.stage, options);
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            return object;
        };

        /**
         * Converts this PlayerGuessDetail to JSON.
         * @function toJSON
         * @memberof pokemonGuess.PlayerGuessDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerGuessDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerGuessDetail
         * @function getTypeUrl
         * @memberof pokemonGuess.PlayerGuessDetail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerGuessDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.PlayerGuessDetail";
        };

        return PlayerGuessDetail;
    })();

    pokemonGuess.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof pokemonGuess
         * @interface IPlayerInfo
         * @property {string|null} [playerId] PlayerInfo playerId
         * @property {string|null} [nickname] PlayerInfo nickname
         * @property {string|null} [avatarUrl] PlayerInfo avatarUrl
         * @property {boolean|null} [isHost] PlayerInfo isHost
         * @property {pokemonGuess.PlayerStatus|null} [status] PlayerInfo status
         * @property {number|null} [attemptsUsed] PlayerInfo attemptsUsed
         * @property {number|Long|null} [lastActivityTime] PlayerInfo lastActivityTime
         * @property {Array.<pokemonGuess.IGuessResultSummary>|null} [guessHistory] PlayerInfo guessHistory
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof pokemonGuess
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {pokemonGuess.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            this.guessHistory = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo playerId.
         * @member {string} playerId
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerId = "";

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo avatarUrl.
         * @member {string} avatarUrl
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.avatarUrl = "";

        /**
         * PlayerInfo isHost.
         * @member {boolean} isHost
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isHost = false;

        /**
         * PlayerInfo status.
         * @member {pokemonGuess.PlayerStatus} status
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.status = 0;

        /**
         * PlayerInfo attemptsUsed.
         * @member {number} attemptsUsed
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.attemptsUsed = 0;

        /**
         * PlayerInfo lastActivityTime.
         * @member {number|Long} lastActivityTime
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastActivityTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerInfo guessHistory.
         * @member {Array.<pokemonGuess.IGuessResultSummary>} guessHistory
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.guessHistory = $util.emptyArray;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {pokemonGuess.IPlayerInfo=} [properties] Properties to set
         * @returns {pokemonGuess.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link pokemonGuess.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {pokemonGuess.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.isHost != null && Object.hasOwnProperty.call(message, "isHost"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isHost);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.attemptsUsed != null && Object.hasOwnProperty.call(message, "attemptsUsed"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.attemptsUsed);
            if (message.lastActivityTime != null && Object.hasOwnProperty.call(message, "lastActivityTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.lastActivityTime);
            if (message.guessHistory != null && message.guessHistory.length)
                for (var i = 0; i < message.guessHistory.length; ++i)
                    $root.pokemonGuess.GuessResultSummary.encode(message.guessHistory[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link pokemonGuess.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {pokemonGuess.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.isHost = reader.bool();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                case 6: {
                        message.attemptsUsed = reader.int32();
                        break;
                    }
                case 7: {
                        message.lastActivityTime = reader.int64();
                        break;
                    }
                case 8: {
                        if (!(message.guessHistory && message.guessHistory.length))
                            message.guessHistory = [];
                        message.guessHistory.push($root.pokemonGuess.GuessResultSummary.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.isHost != null && message.hasOwnProperty("isHost"))
                if (typeof message.isHost !== "boolean")
                    return "isHost: boolean expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                if (!$util.isInteger(message.attemptsUsed))
                    return "attemptsUsed: integer expected";
            if (message.lastActivityTime != null && message.hasOwnProperty("lastActivityTime"))
                if (!$util.isInteger(message.lastActivityTime) && !(message.lastActivityTime && $util.isInteger(message.lastActivityTime.low) && $util.isInteger(message.lastActivityTime.high)))
                    return "lastActivityTime: integer|Long expected";
            if (message.guessHistory != null && message.hasOwnProperty("guessHistory")) {
                if (!Array.isArray(message.guessHistory))
                    return "guessHistory: array expected";
                for (var i = 0; i < message.guessHistory.length; ++i) {
                    var error = $root.pokemonGuess.GuessResultSummary.verify(message.guessHistory[i]);
                    if (error)
                        return "guessHistory." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.PlayerInfo)
                return object;
            var message = new $root.pokemonGuess.PlayerInfo();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.isHost != null)
                message.isHost = Boolean(object.isHost);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "ACTIVE":
            case 0:
                message.status = 0;
                break;
            case "FOUND_ANSWER":
            case 1:
                message.status = 1;
                break;
            case "OUT_OF_ATTEMPTS":
            case 2:
                message.status = 2;
                break;
            case "GAVE_UP":
            case 3:
                message.status = 3;
                break;
            case "DISCONNECTED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.attemptsUsed != null)
                message.attemptsUsed = object.attemptsUsed | 0;
            if (object.lastActivityTime != null)
                if ($util.Long)
                    (message.lastActivityTime = $util.Long.fromValue(object.lastActivityTime)).unsigned = false;
                else if (typeof object.lastActivityTime === "string")
                    message.lastActivityTime = parseInt(object.lastActivityTime, 10);
                else if (typeof object.lastActivityTime === "number")
                    message.lastActivityTime = object.lastActivityTime;
                else if (typeof object.lastActivityTime === "object")
                    message.lastActivityTime = new $util.LongBits(object.lastActivityTime.low >>> 0, object.lastActivityTime.high >>> 0).toNumber();
            if (object.guessHistory) {
                if (!Array.isArray(object.guessHistory))
                    throw TypeError(".pokemonGuess.PlayerInfo.guessHistory: array expected");
                message.guessHistory = [];
                for (var i = 0; i < object.guessHistory.length; ++i) {
                    if (typeof object.guessHistory[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerInfo.guessHistory: object expected");
                    message.guessHistory[i] = $root.pokemonGuess.GuessResultSummary.fromObject(object.guessHistory[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {pokemonGuess.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guessHistory = [];
            if (options.defaults) {
                object.playerId = "";
                object.nickname = "";
                object.avatarUrl = "";
                object.isHost = false;
                object.status = options.enums === String ? "ACTIVE" : 0;
                object.attemptsUsed = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastActivityTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastActivityTime = options.longs === String ? "0" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.isHost != null && message.hasOwnProperty("isHost"))
                object.isHost = message.isHost;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pokemonGuess.PlayerStatus[message.status] === undefined ? message.status : $root.pokemonGuess.PlayerStatus[message.status] : message.status;
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                object.attemptsUsed = message.attemptsUsed;
            if (message.lastActivityTime != null && message.hasOwnProperty("lastActivityTime"))
                if (typeof message.lastActivityTime === "number")
                    object.lastActivityTime = options.longs === String ? String(message.lastActivityTime) : message.lastActivityTime;
                else
                    object.lastActivityTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastActivityTime) : options.longs === Number ? new $util.LongBits(message.lastActivityTime.low >>> 0, message.lastActivityTime.high >>> 0).toNumber() : message.lastActivityTime;
            if (message.guessHistory && message.guessHistory.length) {
                object.guessHistory = [];
                for (var j = 0; j < message.guessHistory.length; ++j)
                    object.guessHistory[j] = $root.pokemonGuess.GuessResultSummary.toObject(message.guessHistory[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof pokemonGuess.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerInfo
         * @function getTypeUrl
         * @memberof pokemonGuess.PlayerInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.PlayerInfo";
        };

        return PlayerInfo;
    })();

    pokemonGuess.PlayerDetailInfo = (function() {

        /**
         * Properties of a PlayerDetailInfo.
         * @memberof pokemonGuess
         * @interface IPlayerDetailInfo
         * @property {string|null} [playerId] PlayerDetailInfo playerId
         * @property {string|null} [nickname] PlayerDetailInfo nickname
         * @property {string|null} [avatarUrl] PlayerDetailInfo avatarUrl
         * @property {boolean|null} [isHost] PlayerDetailInfo isHost
         * @property {pokemonGuess.PlayerStatus|null} [status] PlayerDetailInfo status
         * @property {number|null} [attemptsUsed] PlayerDetailInfo attemptsUsed
         * @property {number|Long|null} [lastActivityTime] PlayerDetailInfo lastActivityTime
         * @property {Array.<pokemonGuess.IPlayerGuessDetail>|null} [guessDetails] PlayerDetailInfo guessDetails
         */

        /**
         * Constructs a new PlayerDetailInfo.
         * @memberof pokemonGuess
         * @classdesc Represents a PlayerDetailInfo.
         * @implements IPlayerDetailInfo
         * @constructor
         * @param {pokemonGuess.IPlayerDetailInfo=} [properties] Properties to set
         */
        function PlayerDetailInfo(properties) {
            this.guessDetails = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerDetailInfo playerId.
         * @member {string} playerId
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.playerId = "";

        /**
         * PlayerDetailInfo nickname.
         * @member {string} nickname
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.nickname = "";

        /**
         * PlayerDetailInfo avatarUrl.
         * @member {string} avatarUrl
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.avatarUrl = "";

        /**
         * PlayerDetailInfo isHost.
         * @member {boolean} isHost
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.isHost = false;

        /**
         * PlayerDetailInfo status.
         * @member {pokemonGuess.PlayerStatus} status
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.status = 0;

        /**
         * PlayerDetailInfo attemptsUsed.
         * @member {number} attemptsUsed
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.attemptsUsed = 0;

        /**
         * PlayerDetailInfo lastActivityTime.
         * @member {number|Long} lastActivityTime
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.lastActivityTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerDetailInfo guessDetails.
         * @member {Array.<pokemonGuess.IPlayerGuessDetail>} guessDetails
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         */
        PlayerDetailInfo.prototype.guessDetails = $util.emptyArray;

        /**
         * Creates a new PlayerDetailInfo instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {pokemonGuess.IPlayerDetailInfo=} [properties] Properties to set
         * @returns {pokemonGuess.PlayerDetailInfo} PlayerDetailInfo instance
         */
        PlayerDetailInfo.create = function create(properties) {
            return new PlayerDetailInfo(properties);
        };

        /**
         * Encodes the specified PlayerDetailInfo message. Does not implicitly {@link pokemonGuess.PlayerDetailInfo.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {pokemonGuess.IPlayerDetailInfo} message PlayerDetailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerDetailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatarUrl);
            if (message.isHost != null && Object.hasOwnProperty.call(message, "isHost"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isHost);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            if (message.attemptsUsed != null && Object.hasOwnProperty.call(message, "attemptsUsed"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.attemptsUsed);
            if (message.lastActivityTime != null && Object.hasOwnProperty.call(message, "lastActivityTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.lastActivityTime);
            if (message.guessDetails != null && message.guessDetails.length)
                for (var i = 0; i < message.guessDetails.length; ++i)
                    $root.pokemonGuess.PlayerGuessDetail.encode(message.guessDetails[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PlayerDetailInfo message, length delimited. Does not implicitly {@link pokemonGuess.PlayerDetailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {pokemonGuess.IPlayerDetailInfo} message PlayerDetailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerDetailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerDetailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.PlayerDetailInfo} PlayerDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerDetailInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.PlayerDetailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.avatarUrl = reader.string();
                        break;
                    }
                case 4: {
                        message.isHost = reader.bool();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                case 6: {
                        message.attemptsUsed = reader.int32();
                        break;
                    }
                case 7: {
                        message.lastActivityTime = reader.int64();
                        break;
                    }
                case 8: {
                        if (!(message.guessDetails && message.guessDetails.length))
                            message.guessDetails = [];
                        message.guessDetails.push($root.pokemonGuess.PlayerGuessDetail.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerDetailInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.PlayerDetailInfo} PlayerDetailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerDetailInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerDetailInfo message.
         * @function verify
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerDetailInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
            if (message.isHost != null && message.hasOwnProperty("isHost"))
                if (typeof message.isHost !== "boolean")
                    return "isHost: boolean expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                if (!$util.isInteger(message.attemptsUsed))
                    return "attemptsUsed: integer expected";
            if (message.lastActivityTime != null && message.hasOwnProperty("lastActivityTime"))
                if (!$util.isInteger(message.lastActivityTime) && !(message.lastActivityTime && $util.isInteger(message.lastActivityTime.low) && $util.isInteger(message.lastActivityTime.high)))
                    return "lastActivityTime: integer|Long expected";
            if (message.guessDetails != null && message.hasOwnProperty("guessDetails")) {
                if (!Array.isArray(message.guessDetails))
                    return "guessDetails: array expected";
                for (var i = 0; i < message.guessDetails.length; ++i) {
                    var error = $root.pokemonGuess.PlayerGuessDetail.verify(message.guessDetails[i]);
                    if (error)
                        return "guessDetails." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PlayerDetailInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.PlayerDetailInfo} PlayerDetailInfo
         */
        PlayerDetailInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.PlayerDetailInfo)
                return object;
            var message = new $root.pokemonGuess.PlayerDetailInfo();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.avatarUrl != null)
                message.avatarUrl = String(object.avatarUrl);
            if (object.isHost != null)
                message.isHost = Boolean(object.isHost);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "ACTIVE":
            case 0:
                message.status = 0;
                break;
            case "FOUND_ANSWER":
            case 1:
                message.status = 1;
                break;
            case "OUT_OF_ATTEMPTS":
            case 2:
                message.status = 2;
                break;
            case "GAVE_UP":
            case 3:
                message.status = 3;
                break;
            case "DISCONNECTED":
            case 4:
                message.status = 4;
                break;
            }
            if (object.attemptsUsed != null)
                message.attemptsUsed = object.attemptsUsed | 0;
            if (object.lastActivityTime != null)
                if ($util.Long)
                    (message.lastActivityTime = $util.Long.fromValue(object.lastActivityTime)).unsigned = false;
                else if (typeof object.lastActivityTime === "string")
                    message.lastActivityTime = parseInt(object.lastActivityTime, 10);
                else if (typeof object.lastActivityTime === "number")
                    message.lastActivityTime = object.lastActivityTime;
                else if (typeof object.lastActivityTime === "object")
                    message.lastActivityTime = new $util.LongBits(object.lastActivityTime.low >>> 0, object.lastActivityTime.high >>> 0).toNumber();
            if (object.guessDetails) {
                if (!Array.isArray(object.guessDetails))
                    throw TypeError(".pokemonGuess.PlayerDetailInfo.guessDetails: array expected");
                message.guessDetails = [];
                for (var i = 0; i < object.guessDetails.length; ++i) {
                    if (typeof object.guessDetails[i] !== "object")
                        throw TypeError(".pokemonGuess.PlayerDetailInfo.guessDetails: object expected");
                    message.guessDetails[i] = $root.pokemonGuess.PlayerGuessDetail.fromObject(object.guessDetails[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PlayerDetailInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {pokemonGuess.PlayerDetailInfo} message PlayerDetailInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerDetailInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.guessDetails = [];
            if (options.defaults) {
                object.playerId = "";
                object.nickname = "";
                object.avatarUrl = "";
                object.isHost = false;
                object.status = options.enums === String ? "ACTIVE" : 0;
                object.attemptsUsed = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lastActivityTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lastActivityTime = options.longs === String ? "0" : 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                object.avatarUrl = message.avatarUrl;
            if (message.isHost != null && message.hasOwnProperty("isHost"))
                object.isHost = message.isHost;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pokemonGuess.PlayerStatus[message.status] === undefined ? message.status : $root.pokemonGuess.PlayerStatus[message.status] : message.status;
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                object.attemptsUsed = message.attemptsUsed;
            if (message.lastActivityTime != null && message.hasOwnProperty("lastActivityTime"))
                if (typeof message.lastActivityTime === "number")
                    object.lastActivityTime = options.longs === String ? String(message.lastActivityTime) : message.lastActivityTime;
                else
                    object.lastActivityTime = options.longs === String ? $util.Long.prototype.toString.call(message.lastActivityTime) : options.longs === Number ? new $util.LongBits(message.lastActivityTime.low >>> 0, message.lastActivityTime.high >>> 0).toNumber() : message.lastActivityTime;
            if (message.guessDetails && message.guessDetails.length) {
                object.guessDetails = [];
                for (var j = 0; j < message.guessDetails.length; ++j)
                    object.guessDetails[j] = $root.pokemonGuess.PlayerGuessDetail.toObject(message.guessDetails[j], options);
            }
            return object;
        };

        /**
         * Converts this PlayerDetailInfo to JSON.
         * @function toJSON
         * @memberof pokemonGuess.PlayerDetailInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerDetailInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerDetailInfo
         * @function getTypeUrl
         * @memberof pokemonGuess.PlayerDetailInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerDetailInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.PlayerDetailInfo";
        };

        return PlayerDetailInfo;
    })();

    pokemonGuess.GameSettings = (function() {

        /**
         * Properties of a GameSettings.
         * @memberof pokemonGuess
         * @interface IGameSettings
         * @property {number|null} [maxAttempts] GameSettings maxAttempts
         * @property {string|null} [pokemonRange] GameSettings pokemonRange
         * @property {boolean|null} [firstCorrectEnds] GameSettings firstCorrectEnds
         * @property {number|null} [timeLimitSeconds] GameSettings timeLimitSeconds
         */

        /**
         * Constructs a new GameSettings.
         * @memberof pokemonGuess
         * @classdesc Represents a GameSettings.
         * @implements IGameSettings
         * @constructor
         * @param {pokemonGuess.IGameSettings=} [properties] Properties to set
         */
        function GameSettings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSettings maxAttempts.
         * @member {number} maxAttempts
         * @memberof pokemonGuess.GameSettings
         * @instance
         */
        GameSettings.prototype.maxAttempts = 0;

        /**
         * GameSettings pokemonRange.
         * @member {string} pokemonRange
         * @memberof pokemonGuess.GameSettings
         * @instance
         */
        GameSettings.prototype.pokemonRange = "";

        /**
         * GameSettings firstCorrectEnds.
         * @member {boolean} firstCorrectEnds
         * @memberof pokemonGuess.GameSettings
         * @instance
         */
        GameSettings.prototype.firstCorrectEnds = false;

        /**
         * GameSettings timeLimitSeconds.
         * @member {number} timeLimitSeconds
         * @memberof pokemonGuess.GameSettings
         * @instance
         */
        GameSettings.prototype.timeLimitSeconds = 0;

        /**
         * Creates a new GameSettings instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {pokemonGuess.IGameSettings=} [properties] Properties to set
         * @returns {pokemonGuess.GameSettings} GameSettings instance
         */
        GameSettings.create = function create(properties) {
            return new GameSettings(properties);
        };

        /**
         * Encodes the specified GameSettings message. Does not implicitly {@link pokemonGuess.GameSettings.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {pokemonGuess.IGameSettings} message GameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.maxAttempts != null && Object.hasOwnProperty.call(message, "maxAttempts"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maxAttempts);
            if (message.pokemonRange != null && Object.hasOwnProperty.call(message, "pokemonRange"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pokemonRange);
            if (message.firstCorrectEnds != null && Object.hasOwnProperty.call(message, "firstCorrectEnds"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.firstCorrectEnds);
            if (message.timeLimitSeconds != null && Object.hasOwnProperty.call(message, "timeLimitSeconds"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeLimitSeconds);
            return writer;
        };

        /**
         * Encodes the specified GameSettings message, length delimited. Does not implicitly {@link pokemonGuess.GameSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {pokemonGuess.IGameSettings} message GameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSettings message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.GameSettings} GameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSettings.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.GameSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.maxAttempts = reader.int32();
                        break;
                    }
                case 2: {
                        message.pokemonRange = reader.string();
                        break;
                    }
                case 3: {
                        message.firstCorrectEnds = reader.bool();
                        break;
                    }
                case 4: {
                        message.timeLimitSeconds = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.GameSettings} GameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSettings message.
         * @function verify
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.maxAttempts != null && message.hasOwnProperty("maxAttempts"))
                if (!$util.isInteger(message.maxAttempts))
                    return "maxAttempts: integer expected";
            if (message.pokemonRange != null && message.hasOwnProperty("pokemonRange"))
                if (!$util.isString(message.pokemonRange))
                    return "pokemonRange: string expected";
            if (message.firstCorrectEnds != null && message.hasOwnProperty("firstCorrectEnds"))
                if (typeof message.firstCorrectEnds !== "boolean")
                    return "firstCorrectEnds: boolean expected";
            if (message.timeLimitSeconds != null && message.hasOwnProperty("timeLimitSeconds"))
                if (!$util.isInteger(message.timeLimitSeconds))
                    return "timeLimitSeconds: integer expected";
            return null;
        };

        /**
         * Creates a GameSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.GameSettings} GameSettings
         */
        GameSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.GameSettings)
                return object;
            var message = new $root.pokemonGuess.GameSettings();
            if (object.maxAttempts != null)
                message.maxAttempts = object.maxAttempts | 0;
            if (object.pokemonRange != null)
                message.pokemonRange = String(object.pokemonRange);
            if (object.firstCorrectEnds != null)
                message.firstCorrectEnds = Boolean(object.firstCorrectEnds);
            if (object.timeLimitSeconds != null)
                message.timeLimitSeconds = object.timeLimitSeconds | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {pokemonGuess.GameSettings} message GameSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.maxAttempts = 0;
                object.pokemonRange = "";
                object.firstCorrectEnds = false;
                object.timeLimitSeconds = 0;
            }
            if (message.maxAttempts != null && message.hasOwnProperty("maxAttempts"))
                object.maxAttempts = message.maxAttempts;
            if (message.pokemonRange != null && message.hasOwnProperty("pokemonRange"))
                object.pokemonRange = message.pokemonRange;
            if (message.firstCorrectEnds != null && message.hasOwnProperty("firstCorrectEnds"))
                object.firstCorrectEnds = message.firstCorrectEnds;
            if (message.timeLimitSeconds != null && message.hasOwnProperty("timeLimitSeconds"))
                object.timeLimitSeconds = message.timeLimitSeconds;
            return object;
        };

        /**
         * Converts this GameSettings to JSON.
         * @function toJSON
         * @memberof pokemonGuess.GameSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameSettings
         * @function getTypeUrl
         * @memberof pokemonGuess.GameSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.GameSettings";
        };

        return GameSettings;
    })();

    pokemonGuess.PlayerRank = (function() {

        /**
         * Properties of a PlayerRank.
         * @memberof pokemonGuess
         * @interface IPlayerRank
         * @property {string|null} [playerId] PlayerRank playerId
         * @property {string|null} [nickname] PlayerRank nickname
         * @property {number|null} [attemptsUsed] PlayerRank attemptsUsed
         * @property {number|null} [timeUsedSeconds] PlayerRank timeUsedSeconds
         * @property {pokemonGuess.PlayerStatus|null} [finalStatus] PlayerRank finalStatus
         * @property {number|null} [score] PlayerRank score
         * @property {number|null} [rank] PlayerRank rank
         */

        /**
         * Constructs a new PlayerRank.
         * @memberof pokemonGuess
         * @classdesc Represents a PlayerRank.
         * @implements IPlayerRank
         * @constructor
         * @param {pokemonGuess.IPlayerRank=} [properties] Properties to set
         */
        function PlayerRank(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerRank playerId.
         * @member {string} playerId
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.playerId = "";

        /**
         * PlayerRank nickname.
         * @member {string} nickname
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.nickname = "";

        /**
         * PlayerRank attemptsUsed.
         * @member {number} attemptsUsed
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.attemptsUsed = 0;

        /**
         * PlayerRank timeUsedSeconds.
         * @member {number} timeUsedSeconds
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.timeUsedSeconds = 0;

        /**
         * PlayerRank finalStatus.
         * @member {pokemonGuess.PlayerStatus} finalStatus
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.finalStatus = 0;

        /**
         * PlayerRank score.
         * @member {number} score
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.score = 0;

        /**
         * PlayerRank rank.
         * @member {number} rank
         * @memberof pokemonGuess.PlayerRank
         * @instance
         */
        PlayerRank.prototype.rank = 0;

        /**
         * Creates a new PlayerRank instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {pokemonGuess.IPlayerRank=} [properties] Properties to set
         * @returns {pokemonGuess.PlayerRank} PlayerRank instance
         */
        PlayerRank.create = function create(properties) {
            return new PlayerRank(properties);
        };

        /**
         * Encodes the specified PlayerRank message. Does not implicitly {@link pokemonGuess.PlayerRank.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {pokemonGuess.IPlayerRank} message PlayerRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerRank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.attemptsUsed != null && Object.hasOwnProperty.call(message, "attemptsUsed"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.attemptsUsed);
            if (message.timeUsedSeconds != null && Object.hasOwnProperty.call(message, "timeUsedSeconds"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.timeUsedSeconds);
            if (message.finalStatus != null && Object.hasOwnProperty.call(message, "finalStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.finalStatus);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
            if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.rank);
            return writer;
        };

        /**
         * Encodes the specified PlayerRank message, length delimited. Does not implicitly {@link pokemonGuess.PlayerRank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {pokemonGuess.IPlayerRank} message PlayerRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerRank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerRank message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.PlayerRank} PlayerRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerRank.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.PlayerRank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerId = reader.string();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.attemptsUsed = reader.int32();
                        break;
                    }
                case 4: {
                        message.timeUsedSeconds = reader.int32();
                        break;
                    }
                case 5: {
                        message.finalStatus = reader.int32();
                        break;
                    }
                case 6: {
                        message.score = reader.int32();
                        break;
                    }
                case 7: {
                        message.rank = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerRank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.PlayerRank} PlayerRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerRank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerRank message.
         * @function verify
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerRank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isString(message.playerId))
                    return "playerId: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                if (!$util.isInteger(message.attemptsUsed))
                    return "attemptsUsed: integer expected";
            if (message.timeUsedSeconds != null && message.hasOwnProperty("timeUsedSeconds"))
                if (!$util.isInteger(message.timeUsedSeconds))
                    return "timeUsedSeconds: integer expected";
            if (message.finalStatus != null && message.hasOwnProperty("finalStatus"))
                switch (message.finalStatus) {
                default:
                    return "finalStatus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            return null;
        };

        /**
         * Creates a PlayerRank message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.PlayerRank} PlayerRank
         */
        PlayerRank.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.PlayerRank)
                return object;
            var message = new $root.pokemonGuess.PlayerRank();
            if (object.playerId != null)
                message.playerId = String(object.playerId);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.attemptsUsed != null)
                message.attemptsUsed = object.attemptsUsed | 0;
            if (object.timeUsedSeconds != null)
                message.timeUsedSeconds = object.timeUsedSeconds | 0;
            switch (object.finalStatus) {
            default:
                if (typeof object.finalStatus === "number") {
                    message.finalStatus = object.finalStatus;
                    break;
                }
                break;
            case "ACTIVE":
            case 0:
                message.finalStatus = 0;
                break;
            case "FOUND_ANSWER":
            case 1:
                message.finalStatus = 1;
                break;
            case "OUT_OF_ATTEMPTS":
            case 2:
                message.finalStatus = 2;
                break;
            case "GAVE_UP":
            case 3:
                message.finalStatus = 3;
                break;
            case "DISCONNECTED":
            case 4:
                message.finalStatus = 4;
                break;
            }
            if (object.score != null)
                message.score = object.score | 0;
            if (object.rank != null)
                message.rank = object.rank | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerRank message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {pokemonGuess.PlayerRank} message PlayerRank
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerRank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerId = "";
                object.nickname = "";
                object.attemptsUsed = 0;
                object.timeUsedSeconds = 0;
                object.finalStatus = options.enums === String ? "ACTIVE" : 0;
                object.score = 0;
                object.rank = 0;
            }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = message.playerId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.attemptsUsed != null && message.hasOwnProperty("attemptsUsed"))
                object.attemptsUsed = message.attemptsUsed;
            if (message.timeUsedSeconds != null && message.hasOwnProperty("timeUsedSeconds"))
                object.timeUsedSeconds = message.timeUsedSeconds;
            if (message.finalStatus != null && message.hasOwnProperty("finalStatus"))
                object.finalStatus = options.enums === String ? $root.pokemonGuess.PlayerStatus[message.finalStatus] === undefined ? message.finalStatus : $root.pokemonGuess.PlayerStatus[message.finalStatus] : message.finalStatus;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = message.rank;
            return object;
        };

        /**
         * Converts this PlayerRank to JSON.
         * @function toJSON
         * @memberof pokemonGuess.PlayerRank
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerRank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PlayerRank
         * @function getTypeUrl
         * @memberof pokemonGuess.PlayerRank
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayerRank.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.PlayerRank";
        };

        return PlayerRank;
    })();

    pokemonGuess.ReqUpdateGameSettings = (function() {

        /**
         * Properties of a ReqUpdateGameSettings.
         * @memberof pokemonGuess
         * @interface IReqUpdateGameSettings
         * @property {pokemonGuess.IGameSettings|null} [settings] ReqUpdateGameSettings settings
         */

        /**
         * Constructs a new ReqUpdateGameSettings.
         * @memberof pokemonGuess
         * @classdesc Represents a ReqUpdateGameSettings.
         * @implements IReqUpdateGameSettings
         * @constructor
         * @param {pokemonGuess.IReqUpdateGameSettings=} [properties] Properties to set
         */
        function ReqUpdateGameSettings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqUpdateGameSettings settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @instance
         */
        ReqUpdateGameSettings.prototype.settings = null;

        /**
         * Creates a new ReqUpdateGameSettings instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {pokemonGuess.IReqUpdateGameSettings=} [properties] Properties to set
         * @returns {pokemonGuess.ReqUpdateGameSettings} ReqUpdateGameSettings instance
         */
        ReqUpdateGameSettings.create = function create(properties) {
            return new ReqUpdateGameSettings(properties);
        };

        /**
         * Encodes the specified ReqUpdateGameSettings message. Does not implicitly {@link pokemonGuess.ReqUpdateGameSettings.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {pokemonGuess.IReqUpdateGameSettings} message ReqUpdateGameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateGameSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqUpdateGameSettings message, length delimited. Does not implicitly {@link pokemonGuess.ReqUpdateGameSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {pokemonGuess.IReqUpdateGameSettings} message ReqUpdateGameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqUpdateGameSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqUpdateGameSettings message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ReqUpdateGameSettings} ReqUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateGameSettings.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ReqUpdateGameSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqUpdateGameSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ReqUpdateGameSettings} ReqUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateGameSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqUpdateGameSettings message.
         * @function verify
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqUpdateGameSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            return null;
        };

        /**
         * Creates a ReqUpdateGameSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ReqUpdateGameSettings} ReqUpdateGameSettings
         */
        ReqUpdateGameSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ReqUpdateGameSettings)
                return object;
            var message = new $root.pokemonGuess.ReqUpdateGameSettings();
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.ReqUpdateGameSettings.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqUpdateGameSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {pokemonGuess.ReqUpdateGameSettings} message ReqUpdateGameSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqUpdateGameSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.settings = null;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            return object;
        };

        /**
         * Converts this ReqUpdateGameSettings to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqUpdateGameSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqUpdateGameSettings
         * @function getTypeUrl
         * @memberof pokemonGuess.ReqUpdateGameSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqUpdateGameSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ReqUpdateGameSettings";
        };

        return ReqUpdateGameSettings;
    })();

    pokemonGuess.ReqStartGame = (function() {

        /**
         * Properties of a ReqStartGame.
         * @memberof pokemonGuess
         * @interface IReqStartGame
         * @property {pokemonGuess.IGameSettings|null} [settings] ReqStartGame settings
         */

        /**
         * Constructs a new ReqStartGame.
         * @memberof pokemonGuess
         * @classdesc Represents a ReqStartGame.
         * @implements IReqStartGame
         * @constructor
         * @param {pokemonGuess.IReqStartGame=} [properties] Properties to set
         */
        function ReqStartGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqStartGame settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.ReqStartGame
         * @instance
         */
        ReqStartGame.prototype.settings = null;

        /**
         * Creates a new ReqStartGame instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {pokemonGuess.IReqStartGame=} [properties] Properties to set
         * @returns {pokemonGuess.ReqStartGame} ReqStartGame instance
         */
        ReqStartGame.create = function create(properties) {
            return new ReqStartGame(properties);
        };

        /**
         * Encodes the specified ReqStartGame message. Does not implicitly {@link pokemonGuess.ReqStartGame.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {pokemonGuess.IReqStartGame} message ReqStartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqStartGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReqStartGame message, length delimited. Does not implicitly {@link pokemonGuess.ReqStartGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {pokemonGuess.IReqStartGame} message ReqStartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqStartGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqStartGame message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ReqStartGame} ReqStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStartGame.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ReqStartGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqStartGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ReqStartGame} ReqStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStartGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqStartGame message.
         * @function verify
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqStartGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            return null;
        };

        /**
         * Creates a ReqStartGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ReqStartGame} ReqStartGame
         */
        ReqStartGame.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ReqStartGame)
                return object;
            var message = new $root.pokemonGuess.ReqStartGame();
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.ReqStartGame.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            return message;
        };

        /**
         * Creates a plain object from a ReqStartGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {pokemonGuess.ReqStartGame} message ReqStartGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqStartGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.settings = null;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            return object;
        };

        /**
         * Converts this ReqStartGame to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ReqStartGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqStartGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqStartGame
         * @function getTypeUrl
         * @memberof pokemonGuess.ReqStartGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqStartGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ReqStartGame";
        };

        return ReqStartGame;
    })();

    pokemonGuess.ReqSubmitGuess = (function() {

        /**
         * Properties of a ReqSubmitGuess.
         * @memberof pokemonGuess
         * @interface IReqSubmitGuess
         * @property {string|null} [pokemonName] ReqSubmitGuess pokemonName
         * @property {number|null} [attemptNumber] ReqSubmitGuess attemptNumber
         */

        /**
         * Constructs a new ReqSubmitGuess.
         * @memberof pokemonGuess
         * @classdesc Represents a ReqSubmitGuess.
         * @implements IReqSubmitGuess
         * @constructor
         * @param {pokemonGuess.IReqSubmitGuess=} [properties] Properties to set
         */
        function ReqSubmitGuess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqSubmitGuess pokemonName.
         * @member {string} pokemonName
         * @memberof pokemonGuess.ReqSubmitGuess
         * @instance
         */
        ReqSubmitGuess.prototype.pokemonName = "";

        /**
         * ReqSubmitGuess attemptNumber.
         * @member {number} attemptNumber
         * @memberof pokemonGuess.ReqSubmitGuess
         * @instance
         */
        ReqSubmitGuess.prototype.attemptNumber = 0;

        /**
         * Creates a new ReqSubmitGuess instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {pokemonGuess.IReqSubmitGuess=} [properties] Properties to set
         * @returns {pokemonGuess.ReqSubmitGuess} ReqSubmitGuess instance
         */
        ReqSubmitGuess.create = function create(properties) {
            return new ReqSubmitGuess(properties);
        };

        /**
         * Encodes the specified ReqSubmitGuess message. Does not implicitly {@link pokemonGuess.ReqSubmitGuess.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {pokemonGuess.IReqSubmitGuess} message ReqSubmitGuess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSubmitGuess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pokemonName != null && Object.hasOwnProperty.call(message, "pokemonName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.pokemonName);
            if (message.attemptNumber != null && Object.hasOwnProperty.call(message, "attemptNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.attemptNumber);
            return writer;
        };

        /**
         * Encodes the specified ReqSubmitGuess message, length delimited. Does not implicitly {@link pokemonGuess.ReqSubmitGuess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {pokemonGuess.IReqSubmitGuess} message ReqSubmitGuess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqSubmitGuess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqSubmitGuess message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ReqSubmitGuess} ReqSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSubmitGuess.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ReqSubmitGuess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pokemonName = reader.string();
                        break;
                    }
                case 2: {
                        message.attemptNumber = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqSubmitGuess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ReqSubmitGuess} ReqSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSubmitGuess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqSubmitGuess message.
         * @function verify
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqSubmitGuess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pokemonName != null && message.hasOwnProperty("pokemonName"))
                if (!$util.isString(message.pokemonName))
                    return "pokemonName: string expected";
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                if (!$util.isInteger(message.attemptNumber))
                    return "attemptNumber: integer expected";
            return null;
        };

        /**
         * Creates a ReqSubmitGuess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ReqSubmitGuess} ReqSubmitGuess
         */
        ReqSubmitGuess.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ReqSubmitGuess)
                return object;
            var message = new $root.pokemonGuess.ReqSubmitGuess();
            if (object.pokemonName != null)
                message.pokemonName = String(object.pokemonName);
            if (object.attemptNumber != null)
                message.attemptNumber = object.attemptNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReqSubmitGuess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {pokemonGuess.ReqSubmitGuess} message ReqSubmitGuess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqSubmitGuess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pokemonName = "";
                object.attemptNumber = 0;
            }
            if (message.pokemonName != null && message.hasOwnProperty("pokemonName"))
                object.pokemonName = message.pokemonName;
            if (message.attemptNumber != null && message.hasOwnProperty("attemptNumber"))
                object.attemptNumber = message.attemptNumber;
            return object;
        };

        /**
         * Converts this ReqSubmitGuess to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ReqSubmitGuess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqSubmitGuess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqSubmitGuess
         * @function getTypeUrl
         * @memberof pokemonGuess.ReqSubmitGuess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqSubmitGuess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ReqSubmitGuess";
        };

        return ReqSubmitGuess;
    })();

    pokemonGuess.ReqEndGame = (function() {

        /**
         * Properties of a ReqEndGame.
         * @memberof pokemonGuess
         * @interface IReqEndGame
         * @property {boolean|null} [isGivingUp] ReqEndGame isGivingUp
         */

        /**
         * Constructs a new ReqEndGame.
         * @memberof pokemonGuess
         * @classdesc Represents a ReqEndGame.
         * @implements IReqEndGame
         * @constructor
         * @param {pokemonGuess.IReqEndGame=} [properties] Properties to set
         */
        function ReqEndGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReqEndGame isGivingUp.
         * @member {boolean} isGivingUp
         * @memberof pokemonGuess.ReqEndGame
         * @instance
         */
        ReqEndGame.prototype.isGivingUp = false;

        /**
         * Creates a new ReqEndGame instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {pokemonGuess.IReqEndGame=} [properties] Properties to set
         * @returns {pokemonGuess.ReqEndGame} ReqEndGame instance
         */
        ReqEndGame.create = function create(properties) {
            return new ReqEndGame(properties);
        };

        /**
         * Encodes the specified ReqEndGame message. Does not implicitly {@link pokemonGuess.ReqEndGame.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {pokemonGuess.IReqEndGame} message ReqEndGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEndGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isGivingUp != null && Object.hasOwnProperty.call(message, "isGivingUp"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isGivingUp);
            return writer;
        };

        /**
         * Encodes the specified ReqEndGame message, length delimited. Does not implicitly {@link pokemonGuess.ReqEndGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {pokemonGuess.IReqEndGame} message ReqEndGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReqEndGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReqEndGame message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ReqEndGame} ReqEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEndGame.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ReqEndGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.isGivingUp = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReqEndGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ReqEndGame} ReqEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEndGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReqEndGame message.
         * @function verify
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReqEndGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isGivingUp != null && message.hasOwnProperty("isGivingUp"))
                if (typeof message.isGivingUp !== "boolean")
                    return "isGivingUp: boolean expected";
            return null;
        };

        /**
         * Creates a ReqEndGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ReqEndGame} ReqEndGame
         */
        ReqEndGame.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ReqEndGame)
                return object;
            var message = new $root.pokemonGuess.ReqEndGame();
            if (object.isGivingUp != null)
                message.isGivingUp = Boolean(object.isGivingUp);
            return message;
        };

        /**
         * Creates a plain object from a ReqEndGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {pokemonGuess.ReqEndGame} message ReqEndGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReqEndGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isGivingUp = false;
            if (message.isGivingUp != null && message.hasOwnProperty("isGivingUp"))
                object.isGivingUp = message.isGivingUp;
            return object;
        };

        /**
         * Converts this ReqEndGame to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ReqEndGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReqEndGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReqEndGame
         * @function getTypeUrl
         * @memberof pokemonGuess.ReqEndGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReqEndGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ReqEndGame";
        };

        return ReqEndGame;
    })();

    pokemonGuess.ResUpdateGameSettings = (function() {

        /**
         * Properties of a ResUpdateGameSettings.
         * @memberof pokemonGuess
         * @interface IResUpdateGameSettings
         * @property {boolean|null} [success] ResUpdateGameSettings success
         * @property {string|null} [errorMessage] ResUpdateGameSettings errorMessage
         * @property {pokemonGuess.IGameSettings|null} [settings] ResUpdateGameSettings settings
         */

        /**
         * Constructs a new ResUpdateGameSettings.
         * @memberof pokemonGuess
         * @classdesc Represents a ResUpdateGameSettings.
         * @implements IResUpdateGameSettings
         * @constructor
         * @param {pokemonGuess.IResUpdateGameSettings=} [properties] Properties to set
         */
        function ResUpdateGameSettings(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResUpdateGameSettings success.
         * @member {boolean} success
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @instance
         */
        ResUpdateGameSettings.prototype.success = false;

        /**
         * ResUpdateGameSettings errorMessage.
         * @member {string} errorMessage
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @instance
         */
        ResUpdateGameSettings.prototype.errorMessage = "";

        /**
         * ResUpdateGameSettings settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @instance
         */
        ResUpdateGameSettings.prototype.settings = null;

        /**
         * Creates a new ResUpdateGameSettings instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {pokemonGuess.IResUpdateGameSettings=} [properties] Properties to set
         * @returns {pokemonGuess.ResUpdateGameSettings} ResUpdateGameSettings instance
         */
        ResUpdateGameSettings.create = function create(properties) {
            return new ResUpdateGameSettings(properties);
        };

        /**
         * Encodes the specified ResUpdateGameSettings message. Does not implicitly {@link pokemonGuess.ResUpdateGameSettings.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {pokemonGuess.IResUpdateGameSettings} message ResUpdateGameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResUpdateGameSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResUpdateGameSettings message, length delimited. Does not implicitly {@link pokemonGuess.ResUpdateGameSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {pokemonGuess.IResUpdateGameSettings} message ResUpdateGameSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResUpdateGameSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResUpdateGameSettings message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ResUpdateGameSettings} ResUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResUpdateGameSettings.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ResUpdateGameSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResUpdateGameSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ResUpdateGameSettings} ResUpdateGameSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResUpdateGameSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResUpdateGameSettings message.
         * @function verify
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResUpdateGameSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            return null;
        };

        /**
         * Creates a ResUpdateGameSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ResUpdateGameSettings} ResUpdateGameSettings
         */
        ResUpdateGameSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ResUpdateGameSettings)
                return object;
            var message = new $root.pokemonGuess.ResUpdateGameSettings();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.ResUpdateGameSettings.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResUpdateGameSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {pokemonGuess.ResUpdateGameSettings} message ResUpdateGameSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResUpdateGameSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
                object.settings = null;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            return object;
        };

        /**
         * Converts this ResUpdateGameSettings to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResUpdateGameSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResUpdateGameSettings
         * @function getTypeUrl
         * @memberof pokemonGuess.ResUpdateGameSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResUpdateGameSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ResUpdateGameSettings";
        };

        return ResUpdateGameSettings;
    })();

    pokemonGuess.ResStartGame = (function() {

        /**
         * Properties of a ResStartGame.
         * @memberof pokemonGuess
         * @interface IResStartGame
         * @property {boolean|null} [success] ResStartGame success
         * @property {string|null} [errorMessage] ResStartGame errorMessage
         * @property {pokemonGuess.IGameSettings|null} [settings] ResStartGame settings
         * @property {number|Long|null} [startTimestamp] ResStartGame startTimestamp
         */

        /**
         * Constructs a new ResStartGame.
         * @memberof pokemonGuess
         * @classdesc Represents a ResStartGame.
         * @implements IResStartGame
         * @constructor
         * @param {pokemonGuess.IResStartGame=} [properties] Properties to set
         */
        function ResStartGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResStartGame success.
         * @member {boolean} success
         * @memberof pokemonGuess.ResStartGame
         * @instance
         */
        ResStartGame.prototype.success = false;

        /**
         * ResStartGame errorMessage.
         * @member {string} errorMessage
         * @memberof pokemonGuess.ResStartGame
         * @instance
         */
        ResStartGame.prototype.errorMessage = "";

        /**
         * ResStartGame settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.ResStartGame
         * @instance
         */
        ResStartGame.prototype.settings = null;

        /**
         * ResStartGame startTimestamp.
         * @member {number|Long} startTimestamp
         * @memberof pokemonGuess.ResStartGame
         * @instance
         */
        ResStartGame.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ResStartGame instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {pokemonGuess.IResStartGame=} [properties] Properties to set
         * @returns {pokemonGuess.ResStartGame} ResStartGame instance
         */
        ResStartGame.create = function create(properties) {
            return new ResStartGame(properties);
        };

        /**
         * Encodes the specified ResStartGame message. Does not implicitly {@link pokemonGuess.ResStartGame.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {pokemonGuess.IResStartGame} message ResStartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResStartGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.startTimestamp != null && Object.hasOwnProperty.call(message, "startTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startTimestamp);
            return writer;
        };

        /**
         * Encodes the specified ResStartGame message, length delimited. Does not implicitly {@link pokemonGuess.ResStartGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {pokemonGuess.IResStartGame} message ResStartGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResStartGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResStartGame message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ResStartGame} ResStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResStartGame.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ResStartGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.startTimestamp = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResStartGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ResStartGame} ResStartGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResStartGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResStartGame message.
         * @function verify
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResStartGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                    return "startTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a ResStartGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ResStartGame} ResStartGame
         */
        ResStartGame.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ResStartGame)
                return object;
            var message = new $root.pokemonGuess.ResStartGame();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.ResStartGame.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            if (object.startTimestamp != null)
                if ($util.Long)
                    (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
                else if (typeof object.startTimestamp === "string")
                    message.startTimestamp = parseInt(object.startTimestamp, 10);
                else if (typeof object.startTimestamp === "number")
                    message.startTimestamp = object.startTimestamp;
                else if (typeof object.startTimestamp === "object")
                    message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ResStartGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {pokemonGuess.ResStartGame} message ResStartGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResStartGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
                object.settings = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (typeof message.startTimestamp === "number")
                    object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
                else
                    object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
            return object;
        };

        /**
         * Converts this ResStartGame to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ResStartGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResStartGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResStartGame
         * @function getTypeUrl
         * @memberof pokemonGuess.ResStartGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResStartGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ResStartGame";
        };

        return ResStartGame;
    })();

    pokemonGuess.ResSubmitGuess = (function() {

        /**
         * Properties of a ResSubmitGuess.
         * @memberof pokemonGuess
         * @interface IResSubmitGuess
         * @property {boolean|null} [success] ResSubmitGuess success
         * @property {string|null} [errorMessage] ResSubmitGuess errorMessage
         * @property {pokemonGuess.IPlayerGuessDetail|null} [guessDetail] ResSubmitGuess guessDetail
         * @property {number|null} [attemptsRemaining] ResSubmitGuess attemptsRemaining
         */

        /**
         * Constructs a new ResSubmitGuess.
         * @memberof pokemonGuess
         * @classdesc Represents a ResSubmitGuess.
         * @implements IResSubmitGuess
         * @constructor
         * @param {pokemonGuess.IResSubmitGuess=} [properties] Properties to set
         */
        function ResSubmitGuess(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResSubmitGuess success.
         * @member {boolean} success
         * @memberof pokemonGuess.ResSubmitGuess
         * @instance
         */
        ResSubmitGuess.prototype.success = false;

        /**
         * ResSubmitGuess errorMessage.
         * @member {string} errorMessage
         * @memberof pokemonGuess.ResSubmitGuess
         * @instance
         */
        ResSubmitGuess.prototype.errorMessage = "";

        /**
         * ResSubmitGuess guessDetail.
         * @member {pokemonGuess.IPlayerGuessDetail|null|undefined} guessDetail
         * @memberof pokemonGuess.ResSubmitGuess
         * @instance
         */
        ResSubmitGuess.prototype.guessDetail = null;

        /**
         * ResSubmitGuess attemptsRemaining.
         * @member {number} attemptsRemaining
         * @memberof pokemonGuess.ResSubmitGuess
         * @instance
         */
        ResSubmitGuess.prototype.attemptsRemaining = 0;

        /**
         * Creates a new ResSubmitGuess instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {pokemonGuess.IResSubmitGuess=} [properties] Properties to set
         * @returns {pokemonGuess.ResSubmitGuess} ResSubmitGuess instance
         */
        ResSubmitGuess.create = function create(properties) {
            return new ResSubmitGuess(properties);
        };

        /**
         * Encodes the specified ResSubmitGuess message. Does not implicitly {@link pokemonGuess.ResSubmitGuess.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {pokemonGuess.IResSubmitGuess} message ResSubmitGuess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSubmitGuess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            if (message.guessDetail != null && Object.hasOwnProperty.call(message, "guessDetail"))
                $root.pokemonGuess.PlayerGuessDetail.encode(message.guessDetail, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.attemptsRemaining != null && Object.hasOwnProperty.call(message, "attemptsRemaining"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.attemptsRemaining);
            return writer;
        };

        /**
         * Encodes the specified ResSubmitGuess message, length delimited. Does not implicitly {@link pokemonGuess.ResSubmitGuess.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {pokemonGuess.IResSubmitGuess} message ResSubmitGuess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResSubmitGuess.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResSubmitGuess message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ResSubmitGuess} ResSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSubmitGuess.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ResSubmitGuess();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.guessDetail = $root.pokemonGuess.PlayerGuessDetail.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.attemptsRemaining = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResSubmitGuess message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ResSubmitGuess} ResSubmitGuess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResSubmitGuess.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResSubmitGuess message.
         * @function verify
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResSubmitGuess.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            if (message.guessDetail != null && message.hasOwnProperty("guessDetail")) {
                var error = $root.pokemonGuess.PlayerGuessDetail.verify(message.guessDetail);
                if (error)
                    return "guessDetail." + error;
            }
            if (message.attemptsRemaining != null && message.hasOwnProperty("attemptsRemaining"))
                if (!$util.isInteger(message.attemptsRemaining))
                    return "attemptsRemaining: integer expected";
            return null;
        };

        /**
         * Creates a ResSubmitGuess message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ResSubmitGuess} ResSubmitGuess
         */
        ResSubmitGuess.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ResSubmitGuess)
                return object;
            var message = new $root.pokemonGuess.ResSubmitGuess();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            if (object.guessDetail != null) {
                if (typeof object.guessDetail !== "object")
                    throw TypeError(".pokemonGuess.ResSubmitGuess.guessDetail: object expected");
                message.guessDetail = $root.pokemonGuess.PlayerGuessDetail.fromObject(object.guessDetail);
            }
            if (object.attemptsRemaining != null)
                message.attemptsRemaining = object.attemptsRemaining | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResSubmitGuess message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {pokemonGuess.ResSubmitGuess} message ResSubmitGuess
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResSubmitGuess.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
                object.guessDetail = null;
                object.attemptsRemaining = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            if (message.guessDetail != null && message.hasOwnProperty("guessDetail"))
                object.guessDetail = $root.pokemonGuess.PlayerGuessDetail.toObject(message.guessDetail, options);
            if (message.attemptsRemaining != null && message.hasOwnProperty("attemptsRemaining"))
                object.attemptsRemaining = message.attemptsRemaining;
            return object;
        };

        /**
         * Converts this ResSubmitGuess to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ResSubmitGuess
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResSubmitGuess.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResSubmitGuess
         * @function getTypeUrl
         * @memberof pokemonGuess.ResSubmitGuess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResSubmitGuess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ResSubmitGuess";
        };

        return ResSubmitGuess;
    })();

    pokemonGuess.ResEndGame = (function() {

        /**
         * Properties of a ResEndGame.
         * @memberof pokemonGuess
         * @interface IResEndGame
         * @property {boolean|null} [success] ResEndGame success
         * @property {string|null} [errorMessage] ResEndGame errorMessage
         */

        /**
         * Constructs a new ResEndGame.
         * @memberof pokemonGuess
         * @classdesc Represents a ResEndGame.
         * @implements IResEndGame
         * @constructor
         * @param {pokemonGuess.IResEndGame=} [properties] Properties to set
         */
        function ResEndGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResEndGame success.
         * @member {boolean} success
         * @memberof pokemonGuess.ResEndGame
         * @instance
         */
        ResEndGame.prototype.success = false;

        /**
         * ResEndGame errorMessage.
         * @member {string} errorMessage
         * @memberof pokemonGuess.ResEndGame
         * @instance
         */
        ResEndGame.prototype.errorMessage = "";

        /**
         * Creates a new ResEndGame instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {pokemonGuess.IResEndGame=} [properties] Properties to set
         * @returns {pokemonGuess.ResEndGame} ResEndGame instance
         */
        ResEndGame.create = function create(properties) {
            return new ResEndGame(properties);
        };

        /**
         * Encodes the specified ResEndGame message. Does not implicitly {@link pokemonGuess.ResEndGame.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {pokemonGuess.IResEndGame} message ResEndGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResEndGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified ResEndGame message, length delimited. Does not implicitly {@link pokemonGuess.ResEndGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {pokemonGuess.IResEndGame} message ResEndGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResEndGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResEndGame message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.ResEndGame} ResEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResEndGame.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.ResEndGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.errorMessage = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResEndGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.ResEndGame} ResEndGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResEndGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResEndGame message.
         * @function verify
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResEndGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a ResEndGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.ResEndGame} ResEndGame
         */
        ResEndGame.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.ResEndGame)
                return object;
            var message = new $root.pokemonGuess.ResEndGame();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a ResEndGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {pokemonGuess.ResEndGame} message ResEndGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResEndGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.errorMessage = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this ResEndGame to JSON.
         * @function toJSON
         * @memberof pokemonGuess.ResEndGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResEndGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResEndGame
         * @function getTypeUrl
         * @memberof pokemonGuess.ResEndGame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResEndGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.ResEndGame";
        };

        return ResEndGame;
    })();

    pokemonGuess.NotifyGameState = (function() {

        /**
         * Properties of a NotifyGameState.
         * @memberof pokemonGuess
         * @interface INotifyGameState
         * @property {pokemonGuess.GameState|null} [state] NotifyGameState state
         * @property {Array.<pokemonGuess.IPlayerInfo>|null} [players] NotifyGameState players
         * @property {pokemonGuess.IGameSettings|null} [settings] NotifyGameState settings
         * @property {number|Long|null} [startTimestamp] NotifyGameState startTimestamp
         * @property {number|Long|null} [remainingTimeSeconds] NotifyGameState remainingTimeSeconds
         * @property {string|null} [hostId] NotifyGameState hostId
         * @property {number|null} [updatedReason] NotifyGameState updatedReason
         * @property {string|null} [updatedPlayerId] NotifyGameState updatedPlayerId
         */

        /**
         * Constructs a new NotifyGameState.
         * @memberof pokemonGuess
         * @classdesc Represents a NotifyGameState.
         * @implements INotifyGameState
         * @constructor
         * @param {pokemonGuess.INotifyGameState=} [properties] Properties to set
         */
        function NotifyGameState(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGameState state.
         * @member {pokemonGuess.GameState} state
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.state = 0;

        /**
         * NotifyGameState players.
         * @member {Array.<pokemonGuess.IPlayerInfo>} players
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.players = $util.emptyArray;

        /**
         * NotifyGameState settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.settings = null;

        /**
         * NotifyGameState startTimestamp.
         * @member {number|Long} startTimestamp
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotifyGameState remainingTimeSeconds.
         * @member {number|Long} remainingTimeSeconds
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.remainingTimeSeconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotifyGameState hostId.
         * @member {string} hostId
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.hostId = "";

        /**
         * NotifyGameState updatedReason.
         * @member {number} updatedReason
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.updatedReason = 0;

        /**
         * NotifyGameState updatedPlayerId.
         * @member {string} updatedPlayerId
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         */
        NotifyGameState.prototype.updatedPlayerId = "";

        /**
         * Creates a new NotifyGameState instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {pokemonGuess.INotifyGameState=} [properties] Properties to set
         * @returns {pokemonGuess.NotifyGameState} NotifyGameState instance
         */
        NotifyGameState.create = function create(properties) {
            return new NotifyGameState(properties);
        };

        /**
         * Encodes the specified NotifyGameState message. Does not implicitly {@link pokemonGuess.NotifyGameState.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {pokemonGuess.INotifyGameState} message NotifyGameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.pokemonGuess.PlayerInfo.encode(message.players[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.startTimestamp != null && Object.hasOwnProperty.call(message, "startTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startTimestamp);
            if (message.remainingTimeSeconds != null && Object.hasOwnProperty.call(message, "remainingTimeSeconds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.remainingTimeSeconds);
            if (message.hostId != null && Object.hasOwnProperty.call(message, "hostId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.hostId);
            if (message.updatedReason != null && Object.hasOwnProperty.call(message, "updatedReason"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.updatedReason);
            if (message.updatedPlayerId != null && Object.hasOwnProperty.call(message, "updatedPlayerId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updatedPlayerId);
            return writer;
        };

        /**
         * Encodes the specified NotifyGameState message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {pokemonGuess.INotifyGameState} message NotifyGameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameState message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.NotifyGameState} NotifyGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameState.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.NotifyGameState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.state = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.pokemonGuess.PlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.startTimestamp = reader.int64();
                        break;
                    }
                case 5: {
                        message.remainingTimeSeconds = reader.int64();
                        break;
                    }
                case 6: {
                        message.hostId = reader.string();
                        break;
                    }
                case 7: {
                        message.updatedReason = reader.int32();
                        break;
                    }
                case 8: {
                        message.updatedPlayerId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyGameState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.NotifyGameState} NotifyGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameState message.
         * @function verify
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.pokemonGuess.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                    return "startTimestamp: integer|Long expected";
            if (message.remainingTimeSeconds != null && message.hasOwnProperty("remainingTimeSeconds"))
                if (!$util.isInteger(message.remainingTimeSeconds) && !(message.remainingTimeSeconds && $util.isInteger(message.remainingTimeSeconds.low) && $util.isInteger(message.remainingTimeSeconds.high)))
                    return "remainingTimeSeconds: integer|Long expected";
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                if (!$util.isString(message.hostId))
                    return "hostId: string expected";
            if (message.updatedReason != null && message.hasOwnProperty("updatedReason"))
                if (!$util.isInteger(message.updatedReason))
                    return "updatedReason: integer expected";
            if (message.updatedPlayerId != null && message.hasOwnProperty("updatedPlayerId"))
                if (!$util.isString(message.updatedPlayerId))
                    return "updatedPlayerId: string expected";
            return null;
        };

        /**
         * Creates a NotifyGameState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.NotifyGameState} NotifyGameState
         */
        NotifyGameState.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.NotifyGameState)
                return object;
            var message = new $root.pokemonGuess.NotifyGameState();
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "WAITING":
            case 0:
                message.state = 0;
                break;
            case "IN_PROGRESS":
            case 1:
                message.state = 1;
                break;
            case "ENDED":
            case 2:
                message.state = 2;
                break;
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".pokemonGuess.NotifyGameState.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".pokemonGuess.NotifyGameState.players: object expected");
                    message.players[i] = $root.pokemonGuess.PlayerInfo.fromObject(object.players[i]);
                }
            }
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.NotifyGameState.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            if (object.startTimestamp != null)
                if ($util.Long)
                    (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
                else if (typeof object.startTimestamp === "string")
                    message.startTimestamp = parseInt(object.startTimestamp, 10);
                else if (typeof object.startTimestamp === "number")
                    message.startTimestamp = object.startTimestamp;
                else if (typeof object.startTimestamp === "object")
                    message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
            if (object.remainingTimeSeconds != null)
                if ($util.Long)
                    (message.remainingTimeSeconds = $util.Long.fromValue(object.remainingTimeSeconds)).unsigned = false;
                else if (typeof object.remainingTimeSeconds === "string")
                    message.remainingTimeSeconds = parseInt(object.remainingTimeSeconds, 10);
                else if (typeof object.remainingTimeSeconds === "number")
                    message.remainingTimeSeconds = object.remainingTimeSeconds;
                else if (typeof object.remainingTimeSeconds === "object")
                    message.remainingTimeSeconds = new $util.LongBits(object.remainingTimeSeconds.low >>> 0, object.remainingTimeSeconds.high >>> 0).toNumber();
            if (object.hostId != null)
                message.hostId = String(object.hostId);
            if (object.updatedReason != null)
                message.updatedReason = object.updatedReason | 0;
            if (object.updatedPlayerId != null)
                message.updatedPlayerId = String(object.updatedPlayerId);
            return message;
        };

        /**
         * Creates a plain object from a NotifyGameState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {pokemonGuess.NotifyGameState} message NotifyGameState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.state = options.enums === String ? "WAITING" : 0;
                object.settings = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.remainingTimeSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.remainingTimeSeconds = options.longs === String ? "0" : 0;
                object.hostId = "";
                object.updatedReason = 0;
                object.updatedPlayerId = "";
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.pokemonGuess.GameState[message.state] === undefined ? message.state : $root.pokemonGuess.GameState[message.state] : message.state;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.pokemonGuess.PlayerInfo.toObject(message.players[j], options);
            }
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (typeof message.startTimestamp === "number")
                    object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
                else
                    object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
            if (message.remainingTimeSeconds != null && message.hasOwnProperty("remainingTimeSeconds"))
                if (typeof message.remainingTimeSeconds === "number")
                    object.remainingTimeSeconds = options.longs === String ? String(message.remainingTimeSeconds) : message.remainingTimeSeconds;
                else
                    object.remainingTimeSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.remainingTimeSeconds) : options.longs === Number ? new $util.LongBits(message.remainingTimeSeconds.low >>> 0, message.remainingTimeSeconds.high >>> 0).toNumber() : message.remainingTimeSeconds;
            if (message.hostId != null && message.hasOwnProperty("hostId"))
                object.hostId = message.hostId;
            if (message.updatedReason != null && message.hasOwnProperty("updatedReason"))
                object.updatedReason = message.updatedReason;
            if (message.updatedPlayerId != null && message.hasOwnProperty("updatedPlayerId"))
                object.updatedPlayerId = message.updatedPlayerId;
            return object;
        };

        /**
         * Converts this NotifyGameState to JSON.
         * @function toJSON
         * @memberof pokemonGuess.NotifyGameState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGameState
         * @function getTypeUrl
         * @memberof pokemonGuess.NotifyGameState
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGameState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.NotifyGameState";
        };

        return NotifyGameState;
    })();

    pokemonGuess.NotifyPlayerDetail = (function() {

        /**
         * Properties of a NotifyPlayerDetail.
         * @memberof pokemonGuess
         * @interface INotifyPlayerDetail
         * @property {pokemonGuess.IPlayerDetailInfo|null} [playerDetail] NotifyPlayerDetail playerDetail
         */

        /**
         * Constructs a new NotifyPlayerDetail.
         * @memberof pokemonGuess
         * @classdesc Represents a NotifyPlayerDetail.
         * @implements INotifyPlayerDetail
         * @constructor
         * @param {pokemonGuess.INotifyPlayerDetail=} [properties] Properties to set
         */
        function NotifyPlayerDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyPlayerDetail playerDetail.
         * @member {pokemonGuess.IPlayerDetailInfo|null|undefined} playerDetail
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @instance
         */
        NotifyPlayerDetail.prototype.playerDetail = null;

        /**
         * Creates a new NotifyPlayerDetail instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {pokemonGuess.INotifyPlayerDetail=} [properties] Properties to set
         * @returns {pokemonGuess.NotifyPlayerDetail} NotifyPlayerDetail instance
         */
        NotifyPlayerDetail.create = function create(properties) {
            return new NotifyPlayerDetail(properties);
        };

        /**
         * Encodes the specified NotifyPlayerDetail message. Does not implicitly {@link pokemonGuess.NotifyPlayerDetail.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {pokemonGuess.INotifyPlayerDetail} message NotifyPlayerDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPlayerDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerDetail != null && Object.hasOwnProperty.call(message, "playerDetail"))
                $root.pokemonGuess.PlayerDetailInfo.encode(message.playerDetail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotifyPlayerDetail message, length delimited. Does not implicitly {@link pokemonGuess.NotifyPlayerDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {pokemonGuess.INotifyPlayerDetail} message NotifyPlayerDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyPlayerDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyPlayerDetail message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.NotifyPlayerDetail} NotifyPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPlayerDetail.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.NotifyPlayerDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.playerDetail = $root.pokemonGuess.PlayerDetailInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyPlayerDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.NotifyPlayerDetail} NotifyPlayerDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyPlayerDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyPlayerDetail message.
         * @function verify
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyPlayerDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerDetail != null && message.hasOwnProperty("playerDetail")) {
                var error = $root.pokemonGuess.PlayerDetailInfo.verify(message.playerDetail);
                if (error)
                    return "playerDetail." + error;
            }
            return null;
        };

        /**
         * Creates a NotifyPlayerDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.NotifyPlayerDetail} NotifyPlayerDetail
         */
        NotifyPlayerDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.NotifyPlayerDetail)
                return object;
            var message = new $root.pokemonGuess.NotifyPlayerDetail();
            if (object.playerDetail != null) {
                if (typeof object.playerDetail !== "object")
                    throw TypeError(".pokemonGuess.NotifyPlayerDetail.playerDetail: object expected");
                message.playerDetail = $root.pokemonGuess.PlayerDetailInfo.fromObject(object.playerDetail);
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyPlayerDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {pokemonGuess.NotifyPlayerDetail} message NotifyPlayerDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyPlayerDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.playerDetail = null;
            if (message.playerDetail != null && message.hasOwnProperty("playerDetail"))
                object.playerDetail = $root.pokemonGuess.PlayerDetailInfo.toObject(message.playerDetail, options);
            return object;
        };

        /**
         * Converts this NotifyPlayerDetail to JSON.
         * @function toJSON
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyPlayerDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyPlayerDetail
         * @function getTypeUrl
         * @memberof pokemonGuess.NotifyPlayerDetail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyPlayerDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.NotifyPlayerDetail";
        };

        return NotifyPlayerDetail;
    })();

    pokemonGuess.NotifySettingsChanged = (function() {

        /**
         * Properties of a NotifySettingsChanged.
         * @memberof pokemonGuess
         * @interface INotifySettingsChanged
         * @property {pokemonGuess.IGameSettings|null} [settings] NotifySettingsChanged settings
         * @property {string|null} [changedById] NotifySettingsChanged changedById
         */

        /**
         * Constructs a new NotifySettingsChanged.
         * @memberof pokemonGuess
         * @classdesc Represents a NotifySettingsChanged.
         * @implements INotifySettingsChanged
         * @constructor
         * @param {pokemonGuess.INotifySettingsChanged=} [properties] Properties to set
         */
        function NotifySettingsChanged(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifySettingsChanged settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.NotifySettingsChanged
         * @instance
         */
        NotifySettingsChanged.prototype.settings = null;

        /**
         * NotifySettingsChanged changedById.
         * @member {string} changedById
         * @memberof pokemonGuess.NotifySettingsChanged
         * @instance
         */
        NotifySettingsChanged.prototype.changedById = "";

        /**
         * Creates a new NotifySettingsChanged instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {pokemonGuess.INotifySettingsChanged=} [properties] Properties to set
         * @returns {pokemonGuess.NotifySettingsChanged} NotifySettingsChanged instance
         */
        NotifySettingsChanged.create = function create(properties) {
            return new NotifySettingsChanged(properties);
        };

        /**
         * Encodes the specified NotifySettingsChanged message. Does not implicitly {@link pokemonGuess.NotifySettingsChanged.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {pokemonGuess.INotifySettingsChanged} message NotifySettingsChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifySettingsChanged.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.changedById != null && Object.hasOwnProperty.call(message, "changedById"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.changedById);
            return writer;
        };

        /**
         * Encodes the specified NotifySettingsChanged message, length delimited. Does not implicitly {@link pokemonGuess.NotifySettingsChanged.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {pokemonGuess.INotifySettingsChanged} message NotifySettingsChanged message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifySettingsChanged.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifySettingsChanged message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.NotifySettingsChanged} NotifySettingsChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifySettingsChanged.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.NotifySettingsChanged();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.changedById = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifySettingsChanged message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.NotifySettingsChanged} NotifySettingsChanged
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifySettingsChanged.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifySettingsChanged message.
         * @function verify
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifySettingsChanged.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.changedById != null && message.hasOwnProperty("changedById"))
                if (!$util.isString(message.changedById))
                    return "changedById: string expected";
            return null;
        };

        /**
         * Creates a NotifySettingsChanged message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.NotifySettingsChanged} NotifySettingsChanged
         */
        NotifySettingsChanged.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.NotifySettingsChanged)
                return object;
            var message = new $root.pokemonGuess.NotifySettingsChanged();
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.NotifySettingsChanged.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            if (object.changedById != null)
                message.changedById = String(object.changedById);
            return message;
        };

        /**
         * Creates a plain object from a NotifySettingsChanged message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {pokemonGuess.NotifySettingsChanged} message NotifySettingsChanged
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifySettingsChanged.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.settings = null;
                object.changedById = "";
            }
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            if (message.changedById != null && message.hasOwnProperty("changedById"))
                object.changedById = message.changedById;
            return object;
        };

        /**
         * Converts this NotifySettingsChanged to JSON.
         * @function toJSON
         * @memberof pokemonGuess.NotifySettingsChanged
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifySettingsChanged.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifySettingsChanged
         * @function getTypeUrl
         * @memberof pokemonGuess.NotifySettingsChanged
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifySettingsChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.NotifySettingsChanged";
        };

        return NotifySettingsChanged;
    })();

    pokemonGuess.NotifyGameStarted = (function() {

        /**
         * Properties of a NotifyGameStarted.
         * @memberof pokemonGuess
         * @interface INotifyGameStarted
         * @property {pokemonGuess.IGameSettings|null} [settings] NotifyGameStarted settings
         * @property {number|Long|null} [startTimestamp] NotifyGameStarted startTimestamp
         * @property {Array.<pokemonGuess.IPlayerInfo>|null} [players] NotifyGameStarted players
         */

        /**
         * Constructs a new NotifyGameStarted.
         * @memberof pokemonGuess
         * @classdesc Represents a NotifyGameStarted.
         * @implements INotifyGameStarted
         * @constructor
         * @param {pokemonGuess.INotifyGameStarted=} [properties] Properties to set
         */
        function NotifyGameStarted(properties) {
            this.players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGameStarted settings.
         * @member {pokemonGuess.IGameSettings|null|undefined} settings
         * @memberof pokemonGuess.NotifyGameStarted
         * @instance
         */
        NotifyGameStarted.prototype.settings = null;

        /**
         * NotifyGameStarted startTimestamp.
         * @member {number|Long} startTimestamp
         * @memberof pokemonGuess.NotifyGameStarted
         * @instance
         */
        NotifyGameStarted.prototype.startTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * NotifyGameStarted players.
         * @member {Array.<pokemonGuess.IPlayerInfo>} players
         * @memberof pokemonGuess.NotifyGameStarted
         * @instance
         */
        NotifyGameStarted.prototype.players = $util.emptyArray;

        /**
         * Creates a new NotifyGameStarted instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {pokemonGuess.INotifyGameStarted=} [properties] Properties to set
         * @returns {pokemonGuess.NotifyGameStarted} NotifyGameStarted instance
         */
        NotifyGameStarted.create = function create(properties) {
            return new NotifyGameStarted(properties);
        };

        /**
         * Encodes the specified NotifyGameStarted message. Does not implicitly {@link pokemonGuess.NotifyGameStarted.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {pokemonGuess.INotifyGameStarted} message NotifyGameStarted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStarted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                $root.pokemonGuess.GameSettings.encode(message.settings, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.startTimestamp != null && Object.hasOwnProperty.call(message, "startTimestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.startTimestamp);
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    $root.pokemonGuess.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NotifyGameStarted message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameStarted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {pokemonGuess.INotifyGameStarted} message NotifyGameStarted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStarted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameStarted message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.NotifyGameStarted} NotifyGameStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStarted.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.NotifyGameStarted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.settings = $root.pokemonGuess.GameSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.startTimestamp = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        message.players.push($root.pokemonGuess.PlayerInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyGameStarted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.NotifyGameStarted} NotifyGameStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStarted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameStarted message.
         * @function verify
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameStarted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                var error = $root.pokemonGuess.GameSettings.verify(message.settings);
                if (error)
                    return "settings." + error;
            }
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (!$util.isInteger(message.startTimestamp) && !(message.startTimestamp && $util.isInteger(message.startTimestamp.low) && $util.isInteger(message.startTimestamp.high)))
                    return "startTimestamp: integer|Long expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i) {
                    var error = $root.pokemonGuess.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a NotifyGameStarted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.NotifyGameStarted} NotifyGameStarted
         */
        NotifyGameStarted.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.NotifyGameStarted)
                return object;
            var message = new $root.pokemonGuess.NotifyGameStarted();
            if (object.settings != null) {
                if (typeof object.settings !== "object")
                    throw TypeError(".pokemonGuess.NotifyGameStarted.settings: object expected");
                message.settings = $root.pokemonGuess.GameSettings.fromObject(object.settings);
            }
            if (object.startTimestamp != null)
                if ($util.Long)
                    (message.startTimestamp = $util.Long.fromValue(object.startTimestamp)).unsigned = false;
                else if (typeof object.startTimestamp === "string")
                    message.startTimestamp = parseInt(object.startTimestamp, 10);
                else if (typeof object.startTimestamp === "number")
                    message.startTimestamp = object.startTimestamp;
                else if (typeof object.startTimestamp === "object")
                    message.startTimestamp = new $util.LongBits(object.startTimestamp.low >>> 0, object.startTimestamp.high >>> 0).toNumber();
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".pokemonGuess.NotifyGameStarted.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i) {
                    if (typeof object.players[i] !== "object")
                        throw TypeError(".pokemonGuess.NotifyGameStarted.players: object expected");
                    message.players[i] = $root.pokemonGuess.PlayerInfo.fromObject(object.players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyGameStarted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {pokemonGuess.NotifyGameStarted} message NotifyGameStarted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameStarted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.players = [];
            if (options.defaults) {
                object.settings = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.settings != null && message.hasOwnProperty("settings"))
                object.settings = $root.pokemonGuess.GameSettings.toObject(message.settings, options);
            if (message.startTimestamp != null && message.hasOwnProperty("startTimestamp"))
                if (typeof message.startTimestamp === "number")
                    object.startTimestamp = options.longs === String ? String(message.startTimestamp) : message.startTimestamp;
                else
                    object.startTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.startTimestamp) : options.longs === Number ? new $util.LongBits(message.startTimestamp.low >>> 0, message.startTimestamp.high >>> 0).toNumber() : message.startTimestamp;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = $root.pokemonGuess.PlayerInfo.toObject(message.players[j], options);
            }
            return object;
        };

        /**
         * Converts this NotifyGameStarted to JSON.
         * @function toJSON
         * @memberof pokemonGuess.NotifyGameStarted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameStarted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGameStarted
         * @function getTypeUrl
         * @memberof pokemonGuess.NotifyGameStarted
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGameStarted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.NotifyGameStarted";
        };

        return NotifyGameStarted;
    })();

    pokemonGuess.NotifyGameEnded = (function() {

        /**
         * Properties of a NotifyGameEnded.
         * @memberof pokemonGuess
         * @interface INotifyGameEnded
         * @property {string|null} [answerId] NotifyGameEnded answerId
         * @property {string|null} [answerName] NotifyGameEnded answerName
         * @property {Array.<pokemonGuess.IPlayerRank>|null} [rankings] NotifyGameEnded rankings
         * @property {pokemonGuess.GameState|null} [nextState] NotifyGameEnded nextState
         */

        /**
         * Constructs a new NotifyGameEnded.
         * @memberof pokemonGuess
         * @classdesc Represents a NotifyGameEnded.
         * @implements INotifyGameEnded
         * @constructor
         * @param {pokemonGuess.INotifyGameEnded=} [properties] Properties to set
         */
        function NotifyGameEnded(properties) {
            this.rankings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGameEnded answerId.
         * @member {string} answerId
         * @memberof pokemonGuess.NotifyGameEnded
         * @instance
         */
        NotifyGameEnded.prototype.answerId = "";

        /**
         * NotifyGameEnded answerName.
         * @member {string} answerName
         * @memberof pokemonGuess.NotifyGameEnded
         * @instance
         */
        NotifyGameEnded.prototype.answerName = "";

        /**
         * NotifyGameEnded rankings.
         * @member {Array.<pokemonGuess.IPlayerRank>} rankings
         * @memberof pokemonGuess.NotifyGameEnded
         * @instance
         */
        NotifyGameEnded.prototype.rankings = $util.emptyArray;

        /**
         * NotifyGameEnded nextState.
         * @member {pokemonGuess.GameState} nextState
         * @memberof pokemonGuess.NotifyGameEnded
         * @instance
         */
        NotifyGameEnded.prototype.nextState = 0;

        /**
         * Creates a new NotifyGameEnded instance using the specified properties.
         * @function create
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {pokemonGuess.INotifyGameEnded=} [properties] Properties to set
         * @returns {pokemonGuess.NotifyGameEnded} NotifyGameEnded instance
         */
        NotifyGameEnded.create = function create(properties) {
            return new NotifyGameEnded(properties);
        };

        /**
         * Encodes the specified NotifyGameEnded message. Does not implicitly {@link pokemonGuess.NotifyGameEnded.verify|verify} messages.
         * @function encode
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {pokemonGuess.INotifyGameEnded} message NotifyGameEnded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameEnded.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.answerId != null && Object.hasOwnProperty.call(message, "answerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.answerId);
            if (message.answerName != null && Object.hasOwnProperty.call(message, "answerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.answerName);
            if (message.rankings != null && message.rankings.length)
                for (var i = 0; i < message.rankings.length; ++i)
                    $root.pokemonGuess.PlayerRank.encode(message.rankings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.nextState != null && Object.hasOwnProperty.call(message, "nextState"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nextState);
            return writer;
        };

        /**
         * Encodes the specified NotifyGameEnded message, length delimited. Does not implicitly {@link pokemonGuess.NotifyGameEnded.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {pokemonGuess.INotifyGameEnded} message NotifyGameEnded message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameEnded.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameEnded message from the specified reader or buffer.
         * @function decode
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pokemonGuess.NotifyGameEnded} NotifyGameEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameEnded.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pokemonGuess.NotifyGameEnded();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.answerId = reader.string();
                        break;
                    }
                case 2: {
                        message.answerName = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.rankings && message.rankings.length))
                            message.rankings = [];
                        message.rankings.push($root.pokemonGuess.PlayerRank.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.nextState = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyGameEnded message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pokemonGuess.NotifyGameEnded} NotifyGameEnded
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameEnded.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameEnded message.
         * @function verify
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameEnded.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.answerId != null && message.hasOwnProperty("answerId"))
                if (!$util.isString(message.answerId))
                    return "answerId: string expected";
            if (message.answerName != null && message.hasOwnProperty("answerName"))
                if (!$util.isString(message.answerName))
                    return "answerName: string expected";
            if (message.rankings != null && message.hasOwnProperty("rankings")) {
                if (!Array.isArray(message.rankings))
                    return "rankings: array expected";
                for (var i = 0; i < message.rankings.length; ++i) {
                    var error = $root.pokemonGuess.PlayerRank.verify(message.rankings[i]);
                    if (error)
                        return "rankings." + error;
                }
            }
            if (message.nextState != null && message.hasOwnProperty("nextState"))
                switch (message.nextState) {
                default:
                    return "nextState: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a NotifyGameEnded message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pokemonGuess.NotifyGameEnded} NotifyGameEnded
         */
        NotifyGameEnded.fromObject = function fromObject(object) {
            if (object instanceof $root.pokemonGuess.NotifyGameEnded)
                return object;
            var message = new $root.pokemonGuess.NotifyGameEnded();
            if (object.answerId != null)
                message.answerId = String(object.answerId);
            if (object.answerName != null)
                message.answerName = String(object.answerName);
            if (object.rankings) {
                if (!Array.isArray(object.rankings))
                    throw TypeError(".pokemonGuess.NotifyGameEnded.rankings: array expected");
                message.rankings = [];
                for (var i = 0; i < object.rankings.length; ++i) {
                    if (typeof object.rankings[i] !== "object")
                        throw TypeError(".pokemonGuess.NotifyGameEnded.rankings: object expected");
                    message.rankings[i] = $root.pokemonGuess.PlayerRank.fromObject(object.rankings[i]);
                }
            }
            switch (object.nextState) {
            default:
                if (typeof object.nextState === "number") {
                    message.nextState = object.nextState;
                    break;
                }
                break;
            case "WAITING":
            case 0:
                message.nextState = 0;
                break;
            case "IN_PROGRESS":
            case 1:
                message.nextState = 1;
                break;
            case "ENDED":
            case 2:
                message.nextState = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NotifyGameEnded message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {pokemonGuess.NotifyGameEnded} message NotifyGameEnded
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameEnded.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rankings = [];
            if (options.defaults) {
                object.answerId = "";
                object.answerName = "";
                object.nextState = options.enums === String ? "WAITING" : 0;
            }
            if (message.answerId != null && message.hasOwnProperty("answerId"))
                object.answerId = message.answerId;
            if (message.answerName != null && message.hasOwnProperty("answerName"))
                object.answerName = message.answerName;
            if (message.rankings && message.rankings.length) {
                object.rankings = [];
                for (var j = 0; j < message.rankings.length; ++j)
                    object.rankings[j] = $root.pokemonGuess.PlayerRank.toObject(message.rankings[j], options);
            }
            if (message.nextState != null && message.hasOwnProperty("nextState"))
                object.nextState = options.enums === String ? $root.pokemonGuess.GameState[message.nextState] === undefined ? message.nextState : $root.pokemonGuess.GameState[message.nextState] : message.nextState;
            return object;
        };

        /**
         * Converts this NotifyGameEnded to JSON.
         * @function toJSON
         * @memberof pokemonGuess.NotifyGameEnded
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameEnded.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyGameEnded
         * @function getTypeUrl
         * @memberof pokemonGuess.NotifyGameEnded
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyGameEnded.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pokemonGuess.NotifyGameEnded";
        };

        return NotifyGameEnded;
    })();

    return pokemonGuess;
})();

module.exports = $root;
