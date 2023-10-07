"use strict";
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
const spotifyAPI_1 = require("../grpc/spotifyAPI");
const spotifyAPI_2 = require("../proto/spotifyAPI");
function default_1(Function, channel, channelID, viewerID, parts, user, responseMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        const intergartion = Function.split(".");
        switch (intergartion[0]) {
            //spotify functions
            case "spotify":
                const payload = new spotifyAPI_2.SendSongRequestRequest({ data: JSON.stringify({ channel, channelID, viewerID, parts, user, responseMessage, Function }) });
                const response = yield new Promise((resolve, reject) => {
                    spotifyAPI_1.spotifyAPI["SendEvent"](payload, (err, response) => {
                        if (err)
                            return reject(err);
                        if (!response)
                            return reject("no response");
                        const { status, message } = response.toObject();
                        if (status !== 200)
                            return reject(message);
                        resolve(response);
                    });
                });
                const { message } = response.toObject();
                if (!message)
                    return "no message";
                return message;
            default:
                return `function ${Function} not found`;
        }
    });
}
exports.default = default_1;
