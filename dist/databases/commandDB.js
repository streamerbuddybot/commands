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
exports.commandStorage = void 0;
const node_appwrite_1 = require("node-appwrite");
const appwrite_1 = require("../utils/appwrite");
class Commands {
    getCommand(collectionID, command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield appwrite_1.database.listDocuments("643e77f341e4deeac803", collectionID.toString(), [node_appwrite_1.Query.equal("command", command)]);
                return res.documents[0];
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const commandStorage = new Commands();
exports.commandStorage = commandStorage;
