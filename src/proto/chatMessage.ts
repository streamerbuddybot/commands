/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.3
 * source: proto/type.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class Tags extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          color?: string;
          displayname?: string;
          emotes?: string[];
          firstMessage?: boolean;
          id?: string;
          mod?: boolean;
          returningChatter?: boolean;
          roomID?: string;
          subscriber?: boolean;
          tmiSentTS?: string;
          turbo?: boolean;
          userID?: string;
          userType?: string;
          vip?: boolean;
          broadcaster?: boolean;
        }
  ) {
    super();
    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [5], this.#one_of_decls);
    if (!Array.isArray(data) && typeof data == "object") {
      if ("color" in data && data.color != undefined) {
        this.color = data.color;
      }
      if ("displayname" in data && data.displayname != undefined) {
        this.displayname = data.displayname;
      }
      if ("emotes" in data && data.emotes != undefined) {
        this.emotes = data.emotes;
      }
      if ("firstMessage" in data && data.firstMessage != undefined) {
        this.firstMessage = data.firstMessage;
      }
      if ("id" in data && data.id != undefined) {
        this.id = data.id;
      }
      if ("mod" in data && data.mod != undefined) {
        this.mod = data.mod;
      }
      if ("returningChatter" in data && data.returningChatter != undefined) {
        this.returningChatter = data.returningChatter;
      }
      if ("roomID" in data && data.roomID != undefined) {
        this.roomID = data.roomID;
      }
      if ("subscriber" in data && data.subscriber != undefined) {
        this.subscriber = data.subscriber;
      }
      if ("tmiSentTS" in data && data.tmiSentTS != undefined) {
        this.tmiSentTS = data.tmiSentTS;
      }
      if ("turbo" in data && data.turbo != undefined) {
        this.turbo = data.turbo;
      }
      if ("userID" in data && data.userID != undefined) {
        this.userID = data.userID;
      }
      if ("userType" in data && data.userType != undefined) {
        this.userType = data.userType;
      }
      if ("vip" in data && data.vip != undefined) {
        this.vip = data.vip;
      }
      if ("broadcaster" in data && data.broadcaster != undefined) {
        this.broadcaster = data.broadcaster;
      }
    }
  }
  get color() {
    return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
  }
  set color(value: string) {
    pb_1.Message.setField(this, 3, value);
  }
  get displayname() {
    return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
  }
  set displayname(value: string) {
    pb_1.Message.setField(this, 4, value);
  }
  get emotes() {
    return pb_1.Message.getFieldWithDefault(this, 5, []) as string[];
  }
  set emotes(value: string[]) {
    pb_1.Message.setField(this, 5, value);
  }
  get firstMessage() {
    return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
  }
  set firstMessage(value: boolean) {
    pb_1.Message.setField(this, 6, value);
  }
  get id() {
    return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
  }
  set id(value: string) {
    pb_1.Message.setField(this, 7, value);
  }
  get mod() {
    return pb_1.Message.getFieldWithDefault(this, 8, false) as boolean;
  }
  set mod(value: boolean) {
    pb_1.Message.setField(this, 8, value);
  }
  get returningChatter() {
    return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
  }
  set returningChatter(value: boolean) {
    pb_1.Message.setField(this, 9, value);
  }
  get roomID() {
    return pb_1.Message.getFieldWithDefault(this, 10, "") as string;
  }
  set roomID(value: string) {
    pb_1.Message.setField(this, 10, value);
  }
  get subscriber() {
    return pb_1.Message.getFieldWithDefault(this, 11, false) as boolean;
  }
  set subscriber(value: boolean) {
    pb_1.Message.setField(this, 11, value);
  }
  get tmiSentTS() {
    return pb_1.Message.getFieldWithDefault(this, 12, "") as string;
  }
  set tmiSentTS(value: string) {
    pb_1.Message.setField(this, 12, value);
  }
  get turbo() {
    return pb_1.Message.getFieldWithDefault(this, 13, false) as boolean;
  }
  set turbo(value: boolean) {
    pb_1.Message.setField(this, 13, value);
  }
  get userID() {
    return pb_1.Message.getFieldWithDefault(this, 14, "") as string;
  }
  set userID(value: string) {
    pb_1.Message.setField(this, 14, value);
  }
  get userType() {
    return pb_1.Message.getFieldWithDefault(this, 15, "") as string;
  }
  set userType(value: string) {
    pb_1.Message.setField(this, 15, value);
  }
  get vip() {
    return pb_1.Message.getFieldWithDefault(this, 16, false) as boolean;
  }
  set vip(value: boolean) {
    pb_1.Message.setField(this, 16, value);
  }
  get broadcaster() {
    return pb_1.Message.getFieldWithDefault(this, 17, false) as boolean;
  }
  set broadcaster(value: boolean) {
    pb_1.Message.setField(this, 17, value);
  }
  static fromObject(data: {
    color?: string;
    displayname?: string;
    emotes?: string[];
    firstMessage?: boolean;
    id?: string;
    mod?: boolean;
    returningChatter?: boolean;
    roomID?: string;
    subscriber?: boolean;
    tmiSentTS?: string;
    turbo?: boolean;
    userID?: string;
    userType?: string;
    vip?: boolean;
    broadcaster?: boolean;
  }): Tags {
    const message = new Tags({});
    if (data.color != null) {
      message.color = data.color;
    }
    if (data.displayname != null) {
      message.displayname = data.displayname;
    }
    if (data.emotes != null) {
      message.emotes = data.emotes;
    }
    if (data.firstMessage != null) {
      message.firstMessage = data.firstMessage;
    }
    if (data.id != null) {
      message.id = data.id;
    }
    if (data.mod != null) {
      message.mod = data.mod;
    }
    if (data.returningChatter != null) {
      message.returningChatter = data.returningChatter;
    }
    if (data.roomID != null) {
      message.roomID = data.roomID;
    }
    if (data.subscriber != null) {
      message.subscriber = data.subscriber;
    }
    if (data.tmiSentTS != null) {
      message.tmiSentTS = data.tmiSentTS;
    }
    if (data.turbo != null) {
      message.turbo = data.turbo;
    }
    if (data.userID != null) {
      message.userID = data.userID;
    }
    if (data.userType != null) {
      message.userType = data.userType;
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
    const data: {
      color?: string;
      displayname?: string;
      emotes?: string[];
      firstMessage?: boolean;
      id?: string;
      mod?: boolean;
      returningChatter?: boolean;
      roomID?: string;
      subscriber?: boolean;
      tmiSentTS?: string;
      turbo?: boolean;
      userID?: string;
      userType?: string;
      vip?: boolean;
      broadcaster?: boolean;
    } = {};
    if (this.color != null) {
      data.color = this.color;
    }
    if (this.displayname != null) {
      data.displayname = this.displayname;
    }
    if (this.emotes != null) {
      data.emotes = this.emotes;
    }
    if (this.firstMessage != null) {
      data.firstMessage = this.firstMessage;
    }
    if (this.id != null) {
      data.id = this.id;
    }
    if (this.mod != null) {
      data.mod = this.mod;
    }
    if (this.returningChatter != null) {
      data.returningChatter = this.returningChatter;
    }
    if (this.roomID != null) {
      data.roomID = this.roomID;
    }
    if (this.subscriber != null) {
      data.subscriber = this.subscriber;
    }
    if (this.tmiSentTS != null) {
      data.tmiSentTS = this.tmiSentTS;
    }
    if (this.turbo != null) {
      data.turbo = this.turbo;
    }
    if (this.userID != null) {
      data.userID = this.userID;
    }
    if (this.userType != null) {
      data.userType = this.userType;
    }
    if (this.vip != null) {
      data.vip = this.vip;
    }
    if (this.broadcaster != null) {
      data.broadcaster = this.broadcaster;
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.color.length) writer.writeString(3, this.color);
    if (this.displayname.length) writer.writeString(4, this.displayname);
    if (this.emotes.length) writer.writeRepeatedString(5, this.emotes);
    if (this.firstMessage != false) writer.writeBool(6, this.firstMessage);
    if (this.id.length) writer.writeString(7, this.id);
    if (this.mod != false) writer.writeBool(8, this.mod);
    if (this.returningChatter != false) writer.writeBool(9, this.returningChatter);
    if (this.roomID.length) writer.writeString(10, this.roomID);
    if (this.subscriber != false) writer.writeBool(11, this.subscriber);
    if (this.tmiSentTS.length) writer.writeString(12, this.tmiSentTS);
    if (this.turbo != false) writer.writeBool(13, this.turbo);
    if (this.userID.length) writer.writeString(14, this.userID);
    if (this.userType.length) writer.writeString(15, this.userType);
    if (this.vip != false) writer.writeBool(16, this.vip);
    if (this.broadcaster != false) writer.writeBool(17, this.broadcaster);
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Tags {
    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
      message = new Tags();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 3:
          message.color = reader.readString();
          break;
        case 4:
          message.displayname = reader.readString();
          break;
        case 5:
          pb_1.Message.addToRepeatedField(message, 5, reader.readString());
          break;
        case 6:
          message.firstMessage = reader.readBool();
          break;
        case 7:
          message.id = reader.readString();
          break;
        case 8:
          message.mod = reader.readBool();
          break;
        case 9:
          message.returningChatter = reader.readBool();
          break;
        case 10:
          message.roomID = reader.readString();
          break;
        case 11:
          message.subscriber = reader.readBool();
          break;
        case 12:
          message.tmiSentTS = reader.readString();
          break;
        case 13:
          message.turbo = reader.readBool();
          break;
        case 14:
          message.userID = reader.readString();
          break;
        case 15:
          message.userType = reader.readString();
          break;
        case 16:
          message.vip = reader.readBool();
          break;
        case 17:
          message.broadcaster = reader.readBool();
          break;
        default:
          reader.skipField();
      }
    }
    return message;
  }
  serializeBinary(): Uint8Array {
    return this.serialize();
  }
  static deserializeBinary(bytes: Uint8Array): Tags {
    return Tags.deserialize(bytes);
  }
}
export class Request extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          username?: string;
          message?: string;
          channel?: string;
          userID?: string;
          channelID?: number;
          tags?: Tags;
        }
  ) {
    super();
    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
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
    return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
  }
  set username(value: string) {
    pb_1.Message.setField(this, 1, value);
  }
  get message() {
    return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
  }
  set message(value: string) {
    pb_1.Message.setField(this, 2, value);
  }
  get channel() {
    return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
  }
  set channel(value: string) {
    pb_1.Message.setField(this, 3, value);
  }
  get userID() {
    return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
  }
  set userID(value: string) {
    pb_1.Message.setField(this, 4, value);
  }
  get channelID() {
    return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
  }
  set channelID(value: number) {
    pb_1.Message.setField(this, 5, value);
  }
  get tags() {
    return pb_1.Message.getWrapperField(this, Tags, 6) as Tags;
  }
  set tags(value: Tags) {
    pb_1.Message.setWrapperField(this, 6, value);
  }
  get has_tags() {
    return pb_1.Message.getField(this, 6) != null;
  }
  static fromObject(data: {
    username?: string;
    message?: string;
    channel?: string;
    userID?: string;
    channelID?: number;
    tags?: ReturnType<typeof Tags.prototype.toObject>;
  }): Request {
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
    const data: {
      username?: string;
      message?: string;
      channel?: string;
      userID?: string;
      channelID?: number;
      tags?: ReturnType<typeof Tags.prototype.toObject>;
    } = {};
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
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.username.length) writer.writeString(1, this.username);
    if (this.message.length) writer.writeString(2, this.message);
    if (this.channel.length) writer.writeString(3, this.channel);
    if (this.userID.length) writer.writeString(4, this.userID);
    if (this.channelID != 0) writer.writeInt64(5, this.channelID);
    if (this.has_tags) writer.writeMessage(6, this.tags, () => this.tags.serialize(writer));
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Request {
    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
      message = new Request();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
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
          reader.readMessage(message.tags, () => (message.tags = Tags.deserialize(reader)));
          break;
        default:
          reader.skipField();
      }
    }
    return message;
  }
  serializeBinary(): Uint8Array {
    return this.serialize();
  }
  static deserializeBinary(bytes: Uint8Array): Request {
    return Request.deserialize(bytes);
  }
}
export class Response extends pb_1.Message {
  #one_of_decls: number[][] = [];
  constructor(
    data?:
      | any[]
      | {
          message?: string;
          channel?: string;
        }
  ) {
    super();
    pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
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
    return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
  }
  set message(value: string) {
    pb_1.Message.setField(this, 1, value);
  }
  get channel() {
    return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
  }
  set channel(value: string) {
    pb_1.Message.setField(this, 2, value);
  }
  static fromObject(data: { message?: string; channel?: string }): Response {
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
    const data: {
      message?: string;
      channel?: string;
    } = {};
    if (this.message != null) {
      data.message = this.message;
    }
    if (this.channel != null) {
      data.channel = this.channel;
    }
    return data;
  }
  serialize(): Uint8Array;
  serialize(w: pb_1.BinaryWriter): void;
  serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
    const writer = w || new pb_1.BinaryWriter();
    if (this.message.length) writer.writeString(1, this.message);
    if (this.channel.length) writer.writeString(2, this.channel);
    if (!w) return writer.getResultBuffer();
  }
  static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Response {
    const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
      message = new Response();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      switch (reader.getFieldNumber()) {
        case 1:
          message.message = reader.readString();
          break;
        case 2:
          message.channel = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }
    return message;
  }
  serializeBinary(): Uint8Array {
    return this.serialize();
  }
  static deserializeBinary(bytes: Uint8Array): Response {
    return Response.deserialize(bytes);
  }
}
interface GrpcUnaryServiceInterface<P, R> {
  (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
  (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
  (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
  (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
  (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
  (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
  (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
  (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
  (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
  (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
  (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
  (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
  (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
  (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedChatMessageServiceService {
  static definition = {
    SendMessage: {
      path: "/ChatMessageService/SendMessage",
      requestStream: false,
      responseStream: false,
      requestSerialize: (message: Request) => Buffer.from(message.serialize()),
      requestDeserialize: (bytes: Buffer) => Request.deserialize(new Uint8Array(bytes)),
      responseSerialize: (message: Response) => Buffer.from(message.serialize()),
      responseDeserialize: (bytes: Buffer) => Response.deserialize(new Uint8Array(bytes)),
    },
  };
  [method: string]: grpc_1.UntypedHandleCall;
  abstract SendMessage(call: grpc_1.ServerUnaryCall<Request, Response>, callback: grpc_1.sendUnaryData<Response>): void;
}
export class ChatMessageServiceClient extends grpc_1.makeGenericClientConstructor(
  UnimplementedChatMessageServiceService.definition,
  "ChatMessageService",
  {}
) {
  constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
    super(address, credentials, options);
  }
  SendMessage: GrpcUnaryServiceInterface<Request, Response> = (
    message: Request,
    metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<Response>,
    options?: grpc_1.CallOptions | grpc_1.requestCallback<Response>,
    callback?: grpc_1.requestCallback<Response>
  ): grpc_1.ClientUnaryCall => {
    return super.SendMessage(message, metadata, options, callback);
  };
}
