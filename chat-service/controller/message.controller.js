const messages = [
    {
        id: "message_1",
        createdBy: "",
        createdAt: "",
        displayName: "User 1",
        message: "First message",
        room_id: "room_id1"
    },
    {
        id: "message_2",
        createdBy: "",
        createdAt: "",
        displayName: "User 1",
        message: "Message 2",
        room_id: "room_id1"
    },
    {
        id: "message_3",
        createdBy: "",
        createdAt: "",
        displayName: "User 1",
        message: "Message 3",
        room_id: "room_id1"
    },
    {
        id: "message_4",
        createdBy: "",
        createdAt: "",
        displayName: "User 1",
        message: "4th message of room 1",
        room_id: "room_id1"
    },
    {
        id: "message_5",
        createdBy: "",
        createdAt: "",
        displayName: "User 1",
        message: "Room 1 message 5",
        room_id: "room_id1"
    },
    {
        id: "message_6",
        createdBy: "",
        createdAt: "",
        displayName: "User 2",
        message: "My first message",
        room_id: "room_id2"
    },
    {
        id: "message_7",
        createdBy: "",
        createdAt: "",
        displayName: "User 2",
        message: "A second message",
        room_id: "room_id2"
    },
    {
        id: "message_8",
        createdBy: "",
        createdAt: "",
        displayName: "User 3",
        message: "First message",
        room_id: "room_id3"
    },
    {
        id: "message_9",
        createdBy: "",
        createdAt: "",
        displayName: "User 3",
        message: "Second message",
        room_id: "room_id3"
    }
];

export default class MessageController {
    constructor(service) {
        this.service = service;
    }

    async createMessage(message, roomID) {
        return {
            id: "",  
            createdBy: "",
            displayName: "",  
            message: message,
            roomID: roomID 
        };
    }

    async retrieveMessages(roomID, callback) {
        const roomMessages = [];
        
        messages.forEach(message => {
            if(message.room_id === roomID) {
                roomMessages.push(message);
            }
        });

        callback(roomMessages);
    }
}