import User from "./user";

export default function ChatUsers({ users }) {
    const userList = users.map((user) => (
        <User key={user.displayName} username={user.username} displayName={user.displayName} />
    ));

    return (
        <div>
            <div>Chat participants</div>
            <div>{userList}</div>
        </div>
    );
}