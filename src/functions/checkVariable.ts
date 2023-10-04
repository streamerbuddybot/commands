import { Tags } from "../proto/chatMessage";
import DatabaseVariableCheck from "./DatabaseVariableCheck";

const variableRegex = /\${(.*?)}/g;

export default async function checkvariable(
  message: string,
  channel: string,
  channelID: number,
  userID: number,
  parts: string[],
  user: string,
  tags: Tags
) {
  let messageArray = message.trim().split(" ");
  const newArray = await Promise.all(
    messageArray.map(async (word, index) => {
      //if it has a variable
      if (word.match(variableRegex)) {
        //get inside of the variable
        const variable = word.match(variableRegex)![0].replace("${", "").replace("}", "");
        //get the value of from the database
        const value = await DatabaseVariableCheck(variable, channel, channelID, userID, parts, user);
        //replace the variable with the value
        const newWord = word.replace(variableRegex, value?.toString() || "");
        return newWord;
      } else {
        return word;
      }
    })
  );

  return newArray;
}
