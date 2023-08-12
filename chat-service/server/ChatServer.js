import { Server } from "socket.io";

export default class ChatServer {
    constructor(server, origin, chatController) {
        this.io = new Server(server, {
            cors: {
                origin: origin
            }
        });

        this.chatController = chatController;
    }

    init() {
        this.io.on("connection", (socket) => {
            console.log(`[connection]: Socket ${socket.id} connected`);
        
            socket.on("disconnect", () => {
                console.log(`[disconnect]: Socket ${socket.id} disconnected`);
            });
        
            // Socket joins all rooms on connection

            socket.on("change_room", (room) => {
                // Leave previous room and emit event for socket that left previous room
                // Join new room and emit new_user event
                if(room.previous !== "") {
                    socket.leave(room.previous);
                    console.log(`Socket ${socket.id} left room ${room.previous}`);
                }
        
                // Join all channels on connection
                socket.join(room.current);
                console.log(`[join]: Socket ${socket.id} joined room ${room.current}`);
            });
        
            socket.on("send", (message) => {        
                // Emit to specified room only
                this.io.to(message.room_id).emit("receive", message);
            });
        });
    }
}