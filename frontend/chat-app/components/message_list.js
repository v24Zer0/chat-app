import { useState } from "react";
import Message from "./message";

export default function MessageList({ messages }) {
    const messageItems = messages.map((message) => (
        <Message key={message} message={message} />
    ));

    return (
        <div>{messageItems}</div>
    );
}