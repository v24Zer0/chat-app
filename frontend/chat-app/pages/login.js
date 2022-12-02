import Link from "next/link";

export default function Login() {
    return (
        <div>
            <button>
                <Link href="/chat">To chat page</Link>
            </button>
            <form id="loginForm" action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
}