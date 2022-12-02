import Message from "./message";

export default function MessageList({ messages }) {
    const messageItems = messages.map((message) => (
        <Message key={message.id} message={message.message} displayName={message.displayName} />
    ));

    return (
        <div>{messageItems}</div>
    );
}