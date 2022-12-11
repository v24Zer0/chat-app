export default function User({ username, displayName }) {
    return (
        <div>
            <div>{username}</div>
            <div>{displayName}</div>
        </div>
    );
}