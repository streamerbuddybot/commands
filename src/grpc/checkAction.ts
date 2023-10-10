import * as grpc from "@grpc/grpc-js";
import { ActionServiceClient } from "../proto/checkAction";
import * as config from "../config.json";

const host = config.checkAction.dns;
const port = config.checkAction.port;
const connectionString = `${host}:${port}`;

const checkAction = new ActionServiceClient(connectionString, grpc.credentials.createInsecure());

export { checkAction };
