export default class RoomController {
    constructor(service) {
        this.service = service;
    }

    retrieveRooms = (req, res) => {
        res.json({
            message: "Retrieve rooms"
        });
    }

    createRoom = (req, res) => {
        res.json({
            message: "Create room"
        });
    }
}