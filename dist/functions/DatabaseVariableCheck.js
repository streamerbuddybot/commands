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
function default_1(varable, channel, channelID, userID, parts, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const intergartion = varable.split(".");
        switch (intergartion[0]) {
            case "random":
                switch (intergartion[1]) {
                    case "number":
                        const min = 0;
                        const max = 100;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                }
            case "user":
                switch (intergartion[1]) {
                    case "name":
                        return user;
                    case "id":
                        return userID;
                }
        }
    });
}
exports.default = default_1;
