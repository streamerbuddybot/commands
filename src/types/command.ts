export interface Tags {
  badge_info?: any; // You can create specific interfaces for badge_info and badges if their structure is known
  badges?: any; // You can create specific interfaces for badge_info and badges if their structure is known
  color?: string;
  display_name?: string;
  emotes?: any[]; // You can create specific interfaces for emotes if their structure is known
  first_msg?: boolean;
  id?: string;
  mod?: boolean;
  returning_chatter?: boolean;
  room_id?: string;
  subscriber?: boolean;
  tmi_sent_ts?: string;
  turbo?: boolean;
  user_id?: string;
  user_type?: string;
  vip?: boolean;
  broadcaster?: boolean;
}

export interface ChatMessage {
  username?: string;
  message?: string;
  channel?: string;
  userID?: string;
  channelID?: number;
  tags?: Tags;
}

export interface Command {
  command: string;
  message: string;
  cooldown: number;
  enabled: boolean;
  channelID: number;
  userlevel: string;
  function: string | null;
  description: string;
}

export enum UserlevelEnum {
  Everyone = "everyone",
  Follower = "follower",
  Vip = "vip",
  Founder = "founder",
  Subscriber = "subscriber",
  Moderator = "moderator",
  Broadcaster = "broadcaster",
  Verified = "verified",
  Prime = "prime",
  Artist = "artist",
  TwitchStaff = "staff",
}
