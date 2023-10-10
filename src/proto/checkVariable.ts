/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: proto/handleMessage.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
 import * as pb_1 from "google-protobuf";
 import * as grpc_1 from "@grpc/grpc-js";
 export class CheckVariableRequest extends pb_1.Message {
     #one_of_decls: number[][] = [];
     constructor(data?: any[] | {
         channelID?: number;
         message?: string;
         channel?: string;
         user?: string;
         userID?: string;
     }) {
         super();
         pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
         if (!Array.isArray(data) && typeof data == "object") {
             if ("channelID" in data && data.channelID != undefined) {
                 this.channelID = data.channelID;
             }
             if ("message" in data && data.message != undefined) {
                 this.message = data.message;
             }
             if ("channel" in data && data.channel != undefined) {
                 this.channel = data.channel;
             }
             if ("user" in data && data.user != undefined) {
                 this.user = data.user;
             }
             if ("userID" in data && data.userID != undefined) {
                 this.userID = data.userID;
             }
         }
     }
     get channelID() {
         return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
     }
     set channelID(value: number) {
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
     get user() {
         return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
     }
     set user(value: string) {
         pb_1.Message.setField(this, 4, value);
     }
     get userID() {
         return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
     }
     set userID(value: string) {
         pb_1.Message.setField(this, 5, value);
     }
     static fromObject(data: {
         channelID?: number;
         message?: string;
         channel?: string;
         user?: string;
         userID?: string;
     }): CheckVariableRequest {
         const message = new CheckVariableRequest({});
         if (data.channelID != null) {
             message.channelID = data.channelID;
         }
         if (data.message != null) {
             message.message = data.message;
         }
         if (data.channel != null) {
             message.channel = data.channel;
         }
         if (data.user != null) {
             message.user = data.user;
         }
         if (data.userID != null) {
             message.userID = data.userID;
         }
         return message;
     }
     toObject() {
         const data: {
             channelID?: number;
             message?: string;
             channel?: string;
             user?: string;
             userID?: string;
         } = {};
         if (this.channelID != null) {
             data.channelID = this.channelID;
         }
         if (this.message != null) {
             data.message = this.message;
         }
         if (this.channel != null) {
             data.channel = this.channel;
         }
         if (this.user != null) {
             data.user = this.user;
         }
         if (this.userID != null) {
             data.userID = this.userID;
         }
         return data;
     }
     serialize(): Uint8Array;
     serialize(w: pb_1.BinaryWriter): void;
     serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
         const writer = w || new pb_1.BinaryWriter();
         if (this.channelID != 0)
             writer.writeInt32(1, this.channelID);
         if (this.message.length)
             writer.writeString(2, this.message);
         if (this.channel.length)
             writer.writeString(3, this.channel);
         if (this.user.length)
             writer.writeString(4, this.user);
         if (this.userID.length)
             writer.writeString(5, this.userID);
         if (!w)
             return writer.getResultBuffer();
     }
     static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CheckVariableRequest {
         const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CheckVariableRequest();
         while (reader.nextField()) {
             if (reader.isEndGroup())
                 break;
             switch (reader.getFieldNumber()) {
                 case 1:
                     message.channelID = reader.readInt32();
                     break;
                 case 2:
                     message.message = reader.readString();
                     break;
                 case 3:
                     message.channel = reader.readString();
                     break;
                 case 4:
                     message.user = reader.readString();
                     break;
                 case 5:
                     message.userID = reader.readString();
                     break;
                 default: reader.skipField();
             }
         }
         return message;
     }
     serializeBinary(): Uint8Array {
         return this.serialize();
     }
     static deserializeBinary(bytes: Uint8Array): CheckVariableRequest {
         return CheckVariableRequest.deserialize(bytes);
     }
 }
 export class CheckVariableResponse extends pb_1.Message {
     #one_of_decls: number[][] = [];
     constructor(data?: any[] | {
         status?: number;
         responseMessage?: string;
         message?: string;
     }) {
         super();
         pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
         if (!Array.isArray(data) && typeof data == "object") {
             if ("status" in data && data.status != undefined) {
                 this.status = data.status;
             }
             if ("responseMessage" in data && data.responseMessage != undefined) {
                 this.responseMessage = data.responseMessage;
             }
             if ("message" in data && data.message != undefined) {
                 this.message = data.message;
             }
         }
     }
     get status() {
         return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
     }
     set status(value: number) {
         pb_1.Message.setField(this, 1, value);
     }
     get responseMessage() {
         return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
     }
     set responseMessage(value: string) {
         pb_1.Message.setField(this, 2, value);
     }
     get message() {
         return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
     }
     set message(value: string) {
         pb_1.Message.setField(this, 3, value);
     }
     static fromObject(data: {
         status?: number;
         responseMessage?: string;
         message?: string;
     }): CheckVariableResponse {
         const message = new CheckVariableResponse({});
         if (data.status != null) {
             message.status = data.status;
         }
         if (data.responseMessage != null) {
             message.responseMessage = data.responseMessage;
         }
         if (data.message != null) {
             message.message = data.message;
         }
         return message;
     }
     toObject() {
         const data: {
             status?: number;
             responseMessage?: string;
             message?: string;
         } = {};
         if (this.status != null) {
             data.status = this.status;
         }
         if (this.responseMessage != null) {
             data.responseMessage = this.responseMessage;
         }
         if (this.message != null) {
             data.message = this.message;
         }
         return data;
     }
     serialize(): Uint8Array;
     serialize(w: pb_1.BinaryWriter): void;
     serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
         const writer = w || new pb_1.BinaryWriter();
         if (this.status != 0)
             writer.writeUint32(1, this.status);
         if (this.responseMessage.length)
             writer.writeString(2, this.responseMessage);
         if (this.message.length)
             writer.writeString(3, this.message);
         if (!w)
             return writer.getResultBuffer();
     }
     static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CheckVariableResponse {
         const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CheckVariableResponse();
         while (reader.nextField()) {
             if (reader.isEndGroup())
                 break;
             switch (reader.getFieldNumber()) {
                 case 1:
                     message.status = reader.readUint32();
                     break;
                 case 2:
                     message.responseMessage = reader.readString();
                     break;
                 case 3:
                     message.message = reader.readString();
                     break;
                 default: reader.skipField();
             }
         }
         return message;
     }
     serializeBinary(): Uint8Array {
         return this.serialize();
     }
     static deserializeBinary(bytes: Uint8Array): CheckVariableResponse {
         return CheckVariableResponse.deserialize(bytes);
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
 export abstract class UnimplementedvariableServiceService {
     static definition = {
         checkVariable: {
             path: "/variableService/checkVariable",
             requestStream: false,
             responseStream: false,
             requestSerialize: (message: CheckVariableRequest) => Buffer.from(message.serialize()),
             requestDeserialize: (bytes: Buffer) => CheckVariableRequest.deserialize(new Uint8Array(bytes)),
             responseSerialize: (message: CheckVariableResponse) => Buffer.from(message.serialize()),
             responseDeserialize: (bytes: Buffer) => CheckVariableResponse.deserialize(new Uint8Array(bytes))
         }
     };
     [method: string]: grpc_1.UntypedHandleCall;
     abstract checkVariable(call: grpc_1.ServerUnaryCall<CheckVariableRequest, CheckVariableResponse>, callback: grpc_1.sendUnaryData<CheckVariableResponse>): void;
 }
 export class variableServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedvariableServiceService.definition, "variableService", {}) {
     constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
         super(address, credentials, options);
     }
     checkVariable: GrpcUnaryServiceInterface<CheckVariableRequest, CheckVariableResponse> = (message: CheckVariableRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<CheckVariableResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<CheckVariableResponse>, callback?: grpc_1.requestCallback<CheckVariableResponse>): grpc_1.ClientUnaryCall => {
         return super.checkVariable(message, metadata, options, callback);
     };
 }
 