export default class ChatService {
    connect(socketServer, socket) {
        console.log(`[connection]: Socket ${socket.id} connected`);
    }

    disconnect(socketServer, socket) {
        console.log(`[disconnect]: Socket ${socket.id} disconnected`);
    }

    join(socketServer, socket, data) {
        console.log("[join]: UserID joined room RoomID");
    }

    newMessage(socketServer, socket, data) {
        // socketServer.to("").emit("new_message", message);
    }

    receiveNewMessage(socketServer, socket, data) {
        // socketServer.emit()
    }
}