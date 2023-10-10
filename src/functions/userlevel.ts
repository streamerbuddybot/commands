import { Tags } from "../proto/chatMessage";
import { UserlevelEnum } from "../types/command";

export function checkUserlevel(userlevel: string, tags: Tags): boolean {
  // If the user is a mod or broadcaster, return true
  if (tags.broadcaster || tags.mod) {
    return true;
  }
  //switch statement to check the userlevel
  switch (userlevel) {
    // If the userlevel is everyone, return true
    case UserlevelEnum.Everyone:
      return true;

    // case UserlevelEnum.Follower:
    // return !!tags.;
    case UserlevelEnum.Vip:
      if (tags.vip) return true;
      return false;

    // case UserlevelEnum.Founder:
    //   return !!tags.founder;
    case UserlevelEnum.Subscriber:
      return tags.subscriber;
    case UserlevelEnum.Moderator:
      return tags.mod;
    case UserlevelEnum.Broadcaster:
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
