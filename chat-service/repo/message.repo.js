import mockMessages from "../mock/mock_messages.js";

export default class MessageRepo {
    constructor() {
        this.messages = mockMessages;
    }

    retrieveMessages(roomID) {
        const messages = [];

        console.log(this.messages);

        this.messages.forEach((message) => {
            if(message.room_id === roomID){
                messages.push(message);
            }
        }); 

        return messages;
    }

    createMessage(message) {
        this.messages.push(message);
        console.log(this.messages.length);
        return true;
    }
}