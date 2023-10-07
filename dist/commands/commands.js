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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = void 0;
const commandDB_1 = require("../databases/commandDB");
const userlevel_1 = require("../functions/userlevel");
const checkVariable_1 = __importDefault(require("../functions/checkVariable"));
const DatabaseFunctionCheck_1 = __importDefault(require("../functions/DatabaseFunctionCheck"));
function handleCommand(command) {
    return __awaiter(this, void 0, void 0, function* () {
        // Destructure the command object
        const { channel, message, username, channelID, tags, userID } = command;
        // If any of the required properties are missing, return
        if (!message || !channel || !username || !channelID || !userID || !tags)
            return;
        // split the message into a string array
        const parts = message.trim().split(" ");
        const firstWord = parts[0];
        //TODO add a artibute for if the command is in cooldown
        // Get the command from the database
        const commandResponse = yield commandDB_1.commandStorage.getCommand(channelID, firstWord);
        // If the command doesn't exist or is disabled, return
        if (!commandResponse || !commandResponse.enabled)
            return;
        // Check if the user has the correct userlevel
        const permission = yield (0, userlevel_1.checkUserlevel)(commandResponse.userlevel, tags);
        if (!permission)
            return;
        const cooldown = commandResponse.cooldown;
        let responseMessage = commandResponse.message;
        //if the command has no function
        if (!commandResponse.function) {
            // console.log(responseMessage)
            const responseMessageArray = yield (0, checkVariable_1.default)(responseMessage, channel, channelID, +userID, parts, username, tags);
            //return the message
            return responseMessageArray.join(" ");
        }
        //if the command has a function
        const intergartion = commandResponse.function;
        const response = yield (0, DatabaseFunctionCheck_1.default)(intergartion, channel, channelID, +userID, parts, username, responseMessage);
        const responseMessageArray = yield (0, checkVariable_1.default)(response, channel, channelID, +userID, parts, username, tags);
        return responseMessageArray.join(" ");
    });
}
exports.handleCommand = handleCommand;
