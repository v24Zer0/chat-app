import { Server } from "socket.io";
import ChatService from "../service/ChatService";
import { io } from "socket.io-client";

export default class ChatServer {
    constructor(server, origin, chatService) {
        this.io = new Server(server, {
            cors: {
                origin: origin
            }
        });

        this.externSocket = io("external-server");

        this.chatService = chatService;
    }

    init() {
        this.io.on("connection", (socket) => {
            this.chatService.connect(this.io, socket);

            // console.log(`[connection]: Socket ${socket.id} connected`);
        
            socket.on("disconnect", () => {
                this.chatService.disconnect(this.io, socket);
                // console.log(`[disconnect]: Socket ${socket.id} disconnected`);
            });
        
            // Socket joins all rooms
            socket.on("join", (data) => {
                this.chatService.join(this.io, socket, data);
            });

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

        // emit message to sockets connected to room
        this.externSocket.on("new_message", (data) => {});
    }

    close() {
        this.externSocket.disconnect();
        this.io.close();
    }
}