import Room from "./room";
import styles from "../styles/chat_rooms.module.css";

export default function ChatRooms({ rooms, updateRoom }) {
    const roomList = rooms.map((room) => (
        <Room key={room.id} room={room} updateRoom={updateRoom} />
    ));

    return (
        <div className={styles.chat_rooms}>{roomList}</div>
    );
}