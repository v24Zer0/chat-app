const rooms = [
    {
        id: "room_id1",
        name: "room 1"
    },
    {
        id: "room_id2",
        name: "room 2"
    },
    {
        id: "room_id3",
        name: "room 3"
    }
];

export default class RoomController {
    constructor() {}

    async createRoom(room) {
        return room;
    }

    async retrieveRooms(userID, callback) {
        // const data = await fetch("/rooms/userID");
        callback(rooms);
    }
}