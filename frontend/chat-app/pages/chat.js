import Link from "next/link" 
import { useEffect, useState } from "react";
import MessageList from "../components/message_list";
import { io } from "socket.io-client";

export default function Chat() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const s = io("http://localhost:8000");
        setSocket(s);

        return () => s.disconnect();
    }, [setSocket]);

    return (
        <div>
            <div>
                <Link href="/login">To login page</Link>
            </div>
            {socket ? <MessageList socket={socket} /> : <div></div>}
        </div>
    );
}