// Message:
//  createdAt
//  message
//  username
//  displayName 

import styles from '../styles/message.module.css'

export default function Message({ message, username }) {
    return (
        <div className={username === message.createdBy ? styles.message_sent : styles.message_received }>
            <div className={styles.message_sender}>
                User: {message.createdBy}
            </div>
            <div>
                {message.message}
            </div>
        </div>
    );
}