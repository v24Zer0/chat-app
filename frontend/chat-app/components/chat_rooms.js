import Room from "./room";

export default function ChatRooms({ rooms, updateRoom }) {
    const roomList = rooms.map((room) => (
        <Room key={room.id} room={room} updateRoom={updateRoom} />
    ));

    return (
        <div>{roomList}</div>
    );
}