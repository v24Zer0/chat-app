import Link from "next/link";
import { useState } from "react";
import UserController from "../controller/user.controller";
import { useRouter } from "next/router"

const userController = new UserController();

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        const success = await userController.login(username, password);
        console.log(success);

        if(success) {
            router.push("/chat");
        }
    }

    return (
        <div>
            <button>
                <Link href="/chat">To chat page</Link>
            </button>
            <form id="loginForm" action="">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
            <button onClick={() => localStorage.removeItem("chat-app-username")}>Clear</button>
        </div>
    );
}