import { Tags } from "../proto/chatMessage";
import { UserlevelEnum } from "../types/command";

export function checkUserlevel(userlevel: string, tags: Tags): boolean {
  // If the user is broadcaster, return true
  if (tags.broadcaster) {
    return true;
  }
  //switch statement to check the userlevel
  switch (userlevel) {
    // If the userlevel is everyone, return true
    case UserlevelEnum.Everyone:
      return true;

    //if the userlevel is mod, check if the user is a mod
    case UserlevelEnum.Moderator:
      if (tags.mod) return true;
      return false;
   
    case UserlevelEnum.Vip:
      if (tags.vip) return true;
      return false;


    case UserlevelEnum.Subscriber:
      return tags.subscriber;
    case UserlevelEnum.Moderator:
      return tags.mod;
    case UserlevelEnum.Broadcaster:
      return !!tags.broadcaster;

    default:
      return false;
  }
}
