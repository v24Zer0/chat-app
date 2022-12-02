// Message:
//  createdAt
//  message
//  username
//  displayName 

export default function Message({ message, displayName }) {
    return (
        <div>
            <div>
                {displayName}
            </div>
            <div>
                {message}
            </div>
        </div>
    );
}