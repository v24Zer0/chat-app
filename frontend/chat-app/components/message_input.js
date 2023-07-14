import { useState } from "react";
import styles from "../styles/message_input.module.css";

export default function MessageInput({ username, socket, roomID }) {
    const [message, setMessage] = useState("");

    return (
        <div className={styles.form_container}>
            <form id="form" action="" className={styles.message_input}>
                <input className={styles.text_input} type="text" onChange={(e) => setMessage(e.target.value)} value={message} /><button onClick={(e) => {
                    e.preventDefault(); 
                    
                    socket.emit("send", {
                        message: message,
                        createdBy: username,
                        displayName: username,
                        room_id: roomID
                    });
                    
                    setMessage("");
                }}>Send</button>
            </form>
        </div>
    );
}