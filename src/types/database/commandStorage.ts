import { Models } from "node-appwrite";
import { Command } from "../command";


export interface CommandStorage extends Models.Document, Command {}

export interface CommandsStorage extends Models.DocumentList<CommandStorage> {}
