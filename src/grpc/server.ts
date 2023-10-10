import * as grpc from "@grpc/grpc-js";
import { Request, Response, UnimplementedChatMessageServiceService, ChatMessageServiceClient } from "../proto/chatMessage";
import { handleCommand } from "../commands/commands";
import * as config from "../config.json";

const server = new grpc.Server();
const port = config.commands.port;
const host = config.commands.host;

async function grpcServer() {
  const serviceImpl = {
    SendMessage: async (call: grpc.ServerUnaryCall<Request, Response>, callback: grpc.sendUnaryData<Response>) => {
      const channel = call.request?.channel;
      const response = call.request!.toObject();
      if (!response) return callback(null, new Response({ channel: channel, message: "Failed" }));

      const returnReponse = await handleCommand(response);

      callback(null, new Response({ channel: channel, message: returnReponse }));
    },
  };
  server.addService(ChatMessageServiceClient.service, serviceImpl);
  server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start();
    console.log("server running on port", `${host}:${port}`);
  });
}

export default grpcServer;
