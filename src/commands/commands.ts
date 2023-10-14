import { commandStorage } from "../databases/commandDB";
import { checkUserlevel } from "../functions/userlevel";
import { ChatMessage } from "../types/command"; // Update import statement for Tags type
import { Tags } from "../proto/chatMessage"; // Update import statement for Tags type
import { checkVariable } from "../grpc/checkVariable";
import { CheckVariableRequest } from "../proto/checkVariable";
import { checkAction } from "../grpc/checkAction";
import { ActionData, ActionRequest, ActionResponse } from "../proto/checkAction";

async function handleCommand(command: ChatMessage) {
  // Destructure the command object
  const { channel, message, username, channelID, tags, userID } = command;


  console.log(`[${channel}] ${username}: ${message}`);

  // If any of the required properties are missing, return
  if (!message || !channel || !username || !channelID || !userID || !tags) return 

  // split the message into a string array
  const parts = message.trim().split(" ");
  const firstWord = parts[0];
  const restOfMessage = parts.slice(1).join(" ");

  //TODO add a artibute for if the command is in cooldown

  // Get the command from the database
  const commandResponse = await commandStorage.getCommand(channelID, firstWord);

  // If the command doesn't exist or is disabled, return
  if (!commandResponse || !commandResponse.enabled) return;

  // Check if the user has the correct userlevel
  const permission = await checkUserlevel(commandResponse.userlevel, tags as Tags);
  if (!permission) return "You don't have permission to use this command"

  const cooldown = commandResponse.cooldown;
  let responseMessage = commandResponse.message;

  //if the command has no function
  if (!commandResponse.function) {
    // console.log(responseMessage)

    const payload = new CheckVariableRequest({
      channelID: channelID,
      message: responseMessage,
      channel: channel,
      userID: userID,
      user: username,
    });

    // check for variables

    const response = await new Promise<string>((resolve, reject) => {
      checkVariable.checkVariable(payload, (err, response) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        if (!response) {
          reject("No response");
          return;
        }

        resolve(response.message);
      });
    });

    //return the message
    return response;
  }

  //if the command has a function
  const action = commandResponse.function;

  const x = new ActionData({
    channelID: channelID,
    channelName: channel,
    message: responseMessage,
    userID: +userID!,
    userinput: restOfMessage,
    username: username,
  });


  const payload = new ActionRequest({Action: action, Actiondata: x});

  const response = await new Promise<string>((resolve, reject) => {
    checkAction.SendAction(payload, (err, response) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      if (!response) {
        reject("No response");
        return;
      }

      resolve(response.message);
    });
  });

  return response;
}

export { handleCommand };
