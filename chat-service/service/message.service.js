import crypto from "crypto";

export default class MessageService {
    constructor(repo) {
        this.repo = repo;
    }

    retrieveMessages(roomID) {
        return this.repo.retrieveMessages(roomID);
    }

    createMessage(message) {
        message.id = crypto.randomBytes(10).toString("hex");
        return this.repo.createMessage(message);
    }
}