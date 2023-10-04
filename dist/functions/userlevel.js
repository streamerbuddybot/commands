"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserlevel = void 0;
const command_1 = require("../types/command");
function checkUserlevel(userlevel, tags) {
    // If the user is a mod or broadcaster, return true
    if (tags.broadcaster || tags.mod) {
        return true;
    }
    //switch statement to check the userlevel
    switch (userlevel) {
        // If the userlevel is everyone, return true
        case command_1.UserlevelEnum.Everyone:
            return true;
        // case UserlevelEnum.Follower:
        // return !!tags.;
        case command_1.UserlevelEnum.Vip:
            if (tags.vip)
                return true;
            return false;
        // case UserlevelEnum.Founder:
        //   return !!tags.founder;
        case command_1.UserlevelEnum.Subscriber:
            return tags.subscriber;
        case command_1.UserlevelEnum.Moderator:
            return tags.mod;
        case command_1.UserlevelEnum.Broadcaster:
            return !!tags.broadcaster;
        // case UserlevelEnum.Verified:
        // case UserlevelEnum.Prime:
        //   return !!tags.prime;
        // case UserlevelEnum.Artist:
        //   return !!tags.artist;
        // case UserlevelEnum.TwitchStaff:
        //   return !!tags.staff;
        default:
            return false;
    }
}
exports.checkUserlevel = checkUserlevel;
