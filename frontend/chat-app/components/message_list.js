import Message from "./message";

export default function MessageList({ messages, username }) {
    const messageItems = messages.map((message) => (
        <Message key={message.id} message={message} username={username} />
    ));

    return (
        <div>{messageItems}</div>
    );
}