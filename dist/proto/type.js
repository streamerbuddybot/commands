"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tags_one_of_decls, _Request_one_of_decls, _Response_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageServiceClient = exports.UnimplementedChatMessageServiceService = exports.Response = exports.Request = exports.Tags = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.3
 * source: proto/type.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = __importStar(require("google-protobuf"));
const grpc_1 = __importStar(require("@grpc/grpc-js"));
class Tags extends pb_1.Message {
    constructor(data) {
        super();
        _Tags_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], __classPrivateFieldGet(this, _Tags_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("badge_info" in data && data.badge_info != undefined) {
                this.badge_info = data.badge_info;
            }
            if ("badges" in data && data.badges != undefined) {
                this.badges = data.badges;
            }
            if ("color" in data && data.color != undefined) {
                this.color = data.color;
            }
            if ("display_name" in data && data.display_name != undefined) {
                this.display_name = data.display_name;
            }
            if ("emotes" in data && data.emotes != undefined) {
                this.emotes = data.emotes;
            }
            if ("first_msg" in data && data.first_msg != undefined) {
                this.first_msg = data.first_msg;
            }
            if ("id" in data && data.id != undefined) {
                this.id = data.id;
            }
            if ("mod" in data && data.mod != undefined) {
                this.mod = data.mod;
            }
            if ("returning_chatter" in data && data.returning_chatter != undefined) {
                this.returning_chatter = data.returning_chatter;
            }
            if ("room_id" in data && data.room_id != undefined) {
                this.room_id = data.room_id;
            }
            if ("subscriber" in data && data.subscriber != undefined) {
                this.subscriber = data.subscriber;
            }
            if ("tmi_sent_ts" in data && data.tmi_sent_ts != undefined) {
                this.tmi_sent_ts = data.tmi_sent_ts;
            }
            if ("turbo" in data && data.turbo != undefined) {
                this.turbo = data.turbo;
            }
            if ("user_id" in data && data.user_id != undefined) {
                this.user_id = data.user_id;
            }
            if ("user_type" in data && data.user_type != undefined) {
                this.user_type = data.user_type;
            }
            if ("vip" in data && data.vip != undefined) {
                this.vip = data.vip;
            }
            if ("broadcaster" in data && data.broadcaster != undefined) {
                this.broadcaster = data.broadcaster;
            }
        }
        if (!this.badge_info)
            this.badge_info = new Map();
        if (!this.badges)
            this.badges = new Map();
    }
    get badge_info() {
        return pb_1.Message.getField(this, 1);
    }
    set badge_info(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get badges() {
        return pb_1.Message.getField(this, 2);
    }
    set badges(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get color() {
        return pb_1.Message.getFieldWithDefault(this, 3, "");
    }
    set color(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get display_name() {
        return pb_1.Message.getFieldWithDefault(this, 4, "");
    }
    set display_name(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get emotes() {
        return pb_1.Message.getFieldWithDefault(this, 5, []);
    }
    set emotes(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get first_msg() {
        return pb_1.Message.getFieldWithDefault(this, 6, false);
    }
    set first_msg(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get id() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set id(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get mod() {
        return pb_1.Message.getFieldWithDefault(this, 8, false);
    }
    set mod(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get returning_chatter() {
        return pb_1.Message.getFieldWithDefault(this, 9, false);
    }
    set returning_chatter(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get room_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, "");
    }
    set room_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get subscriber() {
        return pb_1.Message.getFieldWithDefault(this, 11, false);
    }
    set subscriber(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get tmi_sent_ts() {
        return pb_1.Message.getFieldWithDefault(this, 12, "");
    }
    set tmi_sent_ts(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get turbo() {
        return pb_1.Message.getFieldWithDefault(this, 13, false);
    }
    set turbo(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get user_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, "");
    }
    set user_id(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get user_type() {
        return pb_1.Message.getFieldWithDefault(this, 15, "");
    }
    set user_type(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get vip() {
        return pb_1.Message.getFieldWithDefault(this, 16, false);
    }
    set vip(value) {
        pb_1.Message.setField(this, 16, value);
    }
    get broadcaster() {
        return pb_1.Message.getFieldWithDefault(this, 17, false);
    }
    set broadcaster(value) {
        pb_1.Message.setField(this, 17, value);
    }
    static fromObject(data) {
        const message = new Tags({});
        if (typeof data.badge_info == "object") {
            message.badge_info = new Map(Object.entries(data.badge_info));
        }
        if (typeof data.badges == "object") {
            message.badges = new Map(Object.entries(data.badges));
        }
        if (data.color != null) {
            message.color = data.color;
        }
        if (data.display_name != null) {
            message.display_name = data.display_name;
        }
        if (data.emotes != null) {
            message.emotes = data.emotes;
        }
        if (data.first_msg != null) {
            message.first_msg = data.first_msg;
        }
        if (data.id != null) {
            message.id = data.id;
        }
        if (data.mod != null) {
            message.mod = data.mod;
        }
        if (data.returning_chatter != null) {
            message.returning_chatter = data.returning_chatter;
        }
        if (data.room_id != null) {
            message.room_id = data.room_id;
        }
        if (data.subscriber != null) {
            message.subscriber = data.subscriber;
        }
        if (data.tmi_sent_ts != null) {
            message.tmi_sent_ts = data.tmi_sent_ts;
        }
        if (data.turbo != null) {
            message.turbo = data.turbo;
        }
        if (data.user_id != null) {
            message.user_id = data.user_id;
        }
        if (data.user_type != null) {
            message.user_type = data.user_type;
        }
        if (data.vip != null) {
            message.vip = data.vip;
        }
        if (data.broadcaster != null) {
            message.broadcaster = data.broadcaster;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.badge_info != null) {
            data.badge_info = (Object.fromEntries)(this.badge_info);
        }
        if (this.badges != null) {
            data.badges = (Object.fromEntries)(this.badges);
        }
        if (this.color != null) {
            data.color = this.color;
        }
        if (this.display_name != null) {
            data.display_name = this.display_name;
        }
        if (this.emotes != null) {
            data.emotes = this.emotes;
        }
        if (this.first_msg != null) {
            data.first_msg = this.first_msg;
        }
        if (this.id != null) {
            data.id = this.id;
        }
        if (this.mod != null) {
            data.mod = this.mod;
        }
        if (this.returning_chatter != null) {
            data.returning_chatter = this.returning_chatter;
        }
        if (this.room_id != null) {
            data.room_id = this.room_id;
        }
        if (this.subscriber != null) {
            data.subscriber = this.subscriber;
        }
        if (this.tmi_sent_ts != null) {
            data.tmi_sent_ts = this.tmi_sent_ts;
        }
        if (this.turbo != null) {
            data.turbo = this.turbo;
        }
        if (this.user_id != null) {
            data.user_id = this.user_id;
        }
        if (this.user_type != null) {
            data.user_type = this.user_type;
        }
        if (this.vip != null) {
            data.vip = this.vip;
        }
        if (this.broadcaster != null) {
            data.broadcaster = this.broadcaster;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.badge_info) {
            writer.writeMessage(1, this.badge_info, () => {
                writer.writeString(1, key);
                writer.writeString(2, value);
            });
        }
        for (const [key, value] of this.badges) {
            writer.writeMessage(2, this.badges, () => {
                writer.writeString(1, key);
                writer.writeString(2, value);
            });
        }
        if (this.color.length)
            writer.writeString(3, this.color);
        if (this.display_name.length)
            writer.writeString(4, this.display_name);
        if (this.emotes.length)
            writer.writeRepeatedString(5, this.emotes);
        if (this.first_msg != false)
            writer.writeBool(6, this.first_msg);
        if (this.id.length)
            writer.writeString(7, this.id);
        if (this.mod != false)
            writer.writeBool(8, this.mod);
        if (this.returning_chatter != false)
            writer.writeBool(9, this.returning_chatter);
        if (this.room_id.length)
            writer.writeString(10, this.room_id);
        if (this.subscriber != false)
            writer.writeBool(11, this.subscriber);
        if (this.tmi_sent_ts.length)
            writer.writeString(12, this.tmi_sent_ts);
        if (this.turbo != false)
            writer.writeBool(13, this.turbo);
        if (this.user_id.length)
            writer.writeString(14, this.user_id);
        if (this.user_type.length)
            writer.writeString(15, this.user_type);
        if (this.vip != false)
            writer.writeBool(16, this.vip);
        if (this.broadcaster != false)
            writer.writeBool(17, this.broadcaster);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Tags();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.badge_info, reader, reader.readString, reader.readString));
                    break;
                case 2:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.badges, reader, reader.readString, reader.readString));
                    break;
                case 3:
                    message.color = reader.readString();
                    break;
                case 4:
                    message.display_name = reader.readString();
                    break;
                case 5:
                    pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                    break;
                case 6:
                    message.first_msg = reader.readBool();
                    break;
                case 7:
                    message.id = reader.readString();
                    break;
                case 8:
                    message.mod = reader.readBool();
                    break;
                case 9:
                    message.returning_chatter = reader.readBool();
                    break;
                case 10:
                    message.room_id = reader.readString();
                    break;
                case 11:
                    message.subscriber = reader.readBool();
                    break;
                case 12:
                    message.tmi_sent_ts = reader.readString();
                    break;
                case 13:
                    message.turbo = reader.readBool();
                    break;
                case 14:
                    message.user_id = reader.readString();
                    break;
                case 15:
                    message.user_type = reader.readString();
                    break;
                case 16:
                    message.vip = reader.readBool();
                    break;
                case 17:
                    message.broadcaster = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Tags.deserialize(bytes);
    }
}
exports.Tags = Tags;
_Tags_one_of_decls = new WeakMap();
class Request extends pb_1.Message {
    constructor(data) {
        super();
        _Request_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Request_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("username" in data && data.username != undefined) {
                this.username = data.username;
            }
            if ("message" in data && data.message != undefined) {
                this.message = data.message;
            }
            if ("channel" in data && data.channel != undefined) {
                this.channel = data.channel;
            }
            if ("userID" in data && data.userID != undefined) {
                this.userID = data.userID;
            }
            if ("channelID" in data && data.channelID != undefined) {
                this.channelID = data.channelID;
            }
            if ("tags" in data && data.tags != undefined) {
                this.tags = data.tags;
            }
        }
    }
    get username() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set username(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get message() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set message(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get channel() {
        return pb_1.Message.getFieldWithDefault(this, 3, "");
    }
    set channel(value) {
        pb_1.Message.setField(this, 3, value);
    }
    get userID() {
        return pb_1.Message.getFieldWithDefault(this, 4, "");
    }
    set userID(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get channelID() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set channelID(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get tags() {
        return pb_1.Message.getWrapperField(this, Tags, 6);
    }
    set tags(value) {
        pb_1.Message.setWrapperField(this, 6, value);
    }
    get has_tags() {
        return pb_1.Message.getField(this, 6) != null;
    }
    static fromObject(data) {
        const message = new Request({});
        if (data.username != null) {
            message.username = data.username;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.channel != null) {
            message.channel = data.channel;
        }
        if (data.userID != null) {
            message.userID = data.userID;
        }
        if (data.channelID != null) {
            message.channelID = data.channelID;
        }
        if (data.tags != null) {
            message.tags = Tags.fromObject(data.tags);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.username != null) {
            data.username = this.username;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.channel != null) {
            data.channel = this.channel;
        }
        if (this.userID != null) {
            data.userID = this.userID;
        }
        if (this.channelID != null) {
            data.channelID = this.channelID;
        }
        if (this.tags != null) {
            data.tags = this.tags.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.username.length)
            writer.writeString(1, this.username);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.channel.length)
            writer.writeString(3, this.channel);
        if (this.userID.length)
            writer.writeString(4, this.userID);
        if (this.channelID != 0)
            writer.writeInt64(5, this.channelID);
        if (this.has_tags)
            writer.writeMessage(6, this.tags, () => this.tags.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Request();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.username = reader.readString();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    message.channel = reader.readString();
                    break;
                case 4:
                    message.userID = reader.readString();
                    break;
                case 5:
                    message.channelID = reader.readInt64();
                    break;
                case 6:
                    reader.readMessage(message.tags, () => message.tags = Tags.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Request.deserialize(bytes);
    }
}
exports.Request = Request;
_Request_one_of_decls = new WeakMap();
class Response extends pb_1.Message {
    constructor(data) {
        super();
        _Response_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _Response_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("message" in data && data.message != undefined) {
                this.message = data.message;
            }
            if ("channel" in data && data.channel != undefined) {
                this.channel = data.channel;
            }
        }
    }
    get message() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set message(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get channel() {
        return pb_1.Message.getFieldWithDefault(this, 2, "");
    }
    set channel(value) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data) {
        const message = new Response({});
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.channel != null) {
            message.channel = data.channel;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.channel != null) {
            data.channel = this.channel;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.message.length)
            writer.writeString(1, this.message);
        if (this.channel.length)
            writer.writeString(2, this.channel);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Response();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.message = reader.readString();
                    break;
                case 2:
                    message.channel = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return Response.deserialize(bytes);
    }
}
exports.Response = Response;
_Response_one_of_decls = new WeakMap();
class UnimplementedChatMessageServiceService {
}
exports.UnimplementedChatMessageServiceService = UnimplementedChatMessageServiceService;
UnimplementedChatMessageServiceService.definition = {
    SendMessage: {
        path: "/ChatMessageService/SendMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (message) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes) => Request.deserialize(new Uint8Array(bytes)),
        responseSerialize: (message) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes) => Response.deserialize(new Uint8Array(bytes))
    }
};
class ChatMessageServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedChatMessageServiceService.definition, "ChatMessageService", {}) {
    constructor(address, credentials, options) {
        super(address, credentials, options);
        this.SendMessage = (message, metadata, options, callback) => {
            return super.SendMessage(message, metadata, options, callback);
        };
    }
}
exports.ChatMessageServiceClient = ChatMessageServiceClient;