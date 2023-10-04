import { commandStorage } from "../databases/commandDB";
import { checkUserlevel } from "../functions/userlevel";
import { ChatMessage } from "../types/command"; // Update import statement for Tags type
import { Tags } from "../proto/chatMessage"; // Update import statement for Tags type
import extractVariables from "../functions/checkVariable";
import DatabaseVariableCheck from "../functions/DatabaseVariableCheck";

async function handleCommand(command: ChatMessage) {
  // Destructure the command object
  const { channel, message, username, channelID, tags, userID } = command;

  // If any of the required properties are missing, return
  if (!message || !channel || !username || !channelID || !userID || !tags) return;

  // split the message into a string array
  const parts = message.trim().split(" ");
  const firstWord = parts[0];

  //TODO add a artibute for if the command is in cooldown

  // Get the command from the database
  const commandResponse = await commandStorage.getCommand(channelID, firstWord);

  // If the command doesn't exist or is disabled, return
  if (!commandResponse || !commandResponse.enabled) return;

  // Check if the user has the correct userlevel
  const permission = await checkUserlevel(commandResponse.userlevel, tags as Tags);
  if (!permission) return;

  const cooldown = commandResponse.cooldown;
  let responseMessage = commandResponse.message;

  //if the command has no function
  if (!commandResponse.function) {
    // console.log(responseMessage)
    const responseMessageArray = await extractVariables(responseMessage, channel, channelID, +userID, parts, username, tags as Tags);

    //return the message
    return responseMessageArray.join(" ");
  }
}

export { handleCommand };
