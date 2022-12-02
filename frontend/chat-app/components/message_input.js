import { useState } from "react";

export default function MessageInput({ socket }) {
    const [message, setMessage] = useState("");

    return (
        <div>
            <form id="form" action="">
                <input type="text" onChange={(e) => setMessage(e.target.value)} value={message} /><button onClick={(e) => {
                    e.preventDefault(); 
                    
                    socket.emit("send", {
                        message: message,
                        createdBy: "User_01",
                        displayName: socket.id
                    });
                    
                    setMessage("");
                }}>Send</button>
            </form>
        </div>
    );
}