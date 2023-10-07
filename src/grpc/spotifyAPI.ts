import * as grpc from "@grpc/grpc-js";
import { SpotifyServiceClient } from "../proto/spotifyAPI";
import * as config from "../config.json";

const host = config.grpcClients.spotifyAPI.host;
const port = config.grpcClients.spotifyAPI.port;
const connectionString = `${host}:${port}`;

const spotifyAPI = new SpotifyServiceClient(connectionString, grpc.credentials.createInsecure());

export { spotifyAPI };
