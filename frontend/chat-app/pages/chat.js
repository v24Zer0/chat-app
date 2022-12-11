import Link from "next/link" 
import { useEffect, useState } from "react";
import MessageList from "../components/message_list";
import { io } from "socket.io-client";
import MessageInput from "../components/message_input";
import ChatUsers from "../components/chat_users";
import ChatRooms from "../components/chat_rooms";
import RoomController from "../../../chat-service/controller/room.controller";
import MessageController from "../../../chat-service/controller/message.controller";

const roomController = new RoomController();
const messageController = new MessageController();

let previousRoom = "";

export default function Chat() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState("");
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        const s = io("http://localhost:8000");
        setSocket(s);

        s.on("connect", () => {
            console.log(`Socket ${s.id} connected`);
        });

        // fetch rooms
        roomController.retrieveRooms("user_1", handleFetchRooms);
        
        return () => s.disconnect();
    }, []);

    useEffect(() => {
        if(socket && currentRoom !== "") {
            socket.on("receive", (message) => {
                // const newMessages = getMessages();
                // messages.push(message);
                setMessages([...messages, message]);
            });
        }
    }, [socket, messages]);

    useEffect(() => {
        if(currentRoom !== "") {
            console.log("Room changed")
            console.log(previousRoom);
            // join socket to new room

            socket.emit("change_room", {
                previous: previousRoom,
                current: currentRoom
            });

            // fetch messages
            messageController.retrieveMessages(currentRoom, handleFetchMessages);
        }
    }, [currentRoom]);

    function handleFetchMessages(newMessages) {
        setMessages([...newMessages]);
    }

    function handleFetchRooms(newRooms) {
        setRooms([...newRooms]);
    }

    function handleRoomChange(room_id) {
        previousRoom = currentRoom;
        setCurrentRoom(room_id);
    }

    return (
        <div>
            <Link href="/login">To login page</Link>
            <MessageList messages={messages} username={socket ? socket.id : ""} />
            {currentRoom !== "" ? <MessageInput socket={socket} roomID={currentRoom} /> : <div></div>}
            <ChatRooms rooms={rooms} updateRoom={handleRoomChange} />
            {/* <ChatUsers users={users} /> */}
        </div>
    );
}