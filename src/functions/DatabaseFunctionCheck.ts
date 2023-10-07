import { requestCallback } from "@grpc/grpc-js";
import { spotifyAPI } from "../grpc/spotifyAPI";
import { SendSpotifyRequestResponse, SendSongRequestRequest } from "../proto/spotifyAPI";

export default async function (
  Function: string,
  channel: string,
  channelID: number,
  viewerID: number,
  parts: string[],
  user: string,
  responseMessage: string
): Promise<string> {
  const intergartion = Function.split(".");

  switch (intergartion[0]) {
    //spotify functions
    case "spotify":
      const payload = new SendSongRequestRequest({ data: JSON.stringify({ channel, channelID, viewerID, parts, user, responseMessage, Function }) });
      const response = await new Promise<SendSpotifyRequestResponse>((resolve, reject) => {
        spotifyAPI["SendEvent"](payload, (err, response) => {
          if (err) return reject(err);
          if (!response) return reject("no response");

          const { status, message } = response.toObject();
          if (status !== 200) return reject(message);

          resolve(response);
        });
      });
      const { message } = response.toObject();
      if(!message) return "no message"
      return message;
    default:
      return `function ${Function} not found`;
  }
}
