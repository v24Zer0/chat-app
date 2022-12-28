export default class MessageController {
    constructor(service) {
        this.service = service;
    }

    retrieveMessages = (req, res) => {
        const roomID = req.params["roomID"];
        console.log(`roomID: ${roomID}`);

        const messages = this.service.retrieveMessages(roomID);

        res.json({
            messages: messages
        });
    }

    createMessage(message) {
        this.service.createMessage(message);
    }
}