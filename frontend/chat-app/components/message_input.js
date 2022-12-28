import { useState } from "react";

export default function MessageInput({ socket, roomID }) {
    const [message, setMessage] = useState("");

    return (
        <div>
            <form id="form" action="">
                <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} /><button onClick={(e) => {
                    e.preventDefault(); 
                    
                    socket.emit("send", {
                        message: message,
                        createdBy: socket.id,
                        displayName: socket.id,
                        room_id: roomID
                    });
                    
                    setMessage("");
                }}>Send</button>
            </form>
        </div>
    );
}