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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const chatMessage_1 = require("../proto/chatMessage");
const commands_1 = require("../commands/commands");
const config = __importStar(require("../config.json"));
const server = new grpc.Server();
const port = config.grpcServer.port;
const host = config.grpcServer.host;
function grpcServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const serviceImpl = {
            SendMessage: (call, callback) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const channel = (_a = call.request) === null || _a === void 0 ? void 0 : _a.channel;
                const response = call.request.toObject();
                if (!response)
                    return callback(null, new chatMessage_1.Response({ channel: channel, message: "test" }));
                const returnReponse = yield (0, commands_1.handleCommand)(response);
                callback(null, new chatMessage_1.Response({ channel: channel, message: returnReponse }));
            }),
        };
        server.addService(chatMessage_1.ChatMessageServiceClient.service, serviceImpl);
        server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
            server.start();
            console.log("server running on port", `${host}:${port}`);
        });
    });
}
exports.default = grpcServer;