import Message from "./message";
import styles from "../styles/message_list.module.css"

export default function MessageList({ messages, username }) {
    const messageItems = messages.map((message) => (
        <Message key={message.id} message={message} username={username} />
    ));

    return (
        <div className={styles.message_list}>{messageItems}</div>
    );
}