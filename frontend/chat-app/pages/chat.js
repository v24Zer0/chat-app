import Link from "next/link" 
import { useEffect, useState } from "react";
import MessageList from "../components/message_list";
import { io } from "socket.io-client";
import MessageInput from "../components/message_input";

export default function Chat() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const s = io("http://localhost:8000");
        setSocket(s);

        s.on("connect", () => {
            console.log(`Socket ${s.id} connected`);
        });

        s.on("receive", (message) => {
            messages.push(message);
            console.log(messages);
            setMessages([...messages]);
        });
        
        return () => s.disconnect();
    }, []);

    return (
        <div>
            <Link href="/login">To login page</Link>
            <MessageList messages={messages} />
            <MessageInput socket={socket} />
        </div>
    );
}