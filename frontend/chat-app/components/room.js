export default function Room({ room, updateRoom }) {
    return (
        <div onClick={() => updateRoom(room.id)}>{room.name}</div>
    );
}