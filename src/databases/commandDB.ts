import { Query } from "node-appwrite";
import { database } from "../utils/appwrite";
import { CommandStorage } from "../types/database/commandStorage";

class Commands {
  async getCommand(collectionID: number | string, command: string) {
    try {
      const res = await database.listDocuments<CommandStorage>("643e77f341e4deeac803", collectionID.toString(), [Query.equal("command", command)]);

      return res.documents[0];
    } catch (error) {
      console.log(error);
    }
  }
}

const commandStorage = new Commands();

export { commandStorage };
