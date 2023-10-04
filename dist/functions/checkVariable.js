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
const DatabaseVariableCheck_1 = __importDefault(require("./DatabaseVariableCheck"));
const variableRegex = /\${(.*?)}/g;
function checkvariable(message, channel, channelID, userID, parts, user, tags) {
    return __awaiter(this, void 0, void 0, function* () {
        let messageArray = message.trim().split(" ");
        const newArray = yield Promise.all(messageArray.map((word, index) => __awaiter(this, void 0, void 0, function* () {
            //if it has a variable
            if (word.match(variableRegex)) {
                //get inside of the variable
                const variable = word.match(variableRegex)[0].replace("${", "").replace("}", "");
                //get the value of from the database
                const value = yield (0, DatabaseVariableCheck_1.default)(variable, channel, channelID, userID, parts, user);
                //replace the variable with the value
                const newWord = word.replace(variableRegex, (value === null || value === void 0 ? void 0 : value.toString()) || "");
                return newWord;
            }
            else {
                return word;
            }
        })));
        return newArray;
    });
}
exports.default = checkvariable;
