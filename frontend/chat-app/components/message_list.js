import { useEffect, useState } from "react";
import Message from "./message";

export default function MessageList({ socket }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    
    const messageItems = messages.map((message) => (
        <Message key={message} message={message} />
    ));

    socket.on("receive", (message) => {
        setMessages([...messages, message])
    });

    return (
        <div>
            <div>{messageItems}</div>
            <form id="form" action="">
                <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} /><button onClick={(e) => {
                    e.preventDefault(); 
                    socket.emit("send", message);
                    setMessage("");
                }}>Send</button>
            </form>
        </div>
    );
}