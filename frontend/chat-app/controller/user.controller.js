export default class UserController {
    constructor() {}

    async login(username, password) {
        console.log(`Username: ${username}`);

        const res = await fetch("http://localhost:8000/login", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const user = await res.json();
        console.log(user);

        if(user.username !== "") {
            localStorage.setItem("chat-app-username", user.username);
            return true;
        }
        return false;
    }
}