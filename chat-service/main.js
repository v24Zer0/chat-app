import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import ChatServer from "./server/ChatServer";

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const chatServer = new ChatServer(server, "*", null);
chatServer.init();

// const io = new Server(server, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

// io.on("connection", (socket) => {
//     console.log(`[connection]: Socket ${socket.id} connected`);

//     // io.emit("new_user", {
//     //     username: "User_01",
//     //     displayName: socket.id
//     // });

//     socket.on("disconnect", () => {
//         console.log(`[disconnect]: Socket ${socket.id} disconnected`);
//     });

//     socket.on("change_room", (room) => {
//         // Leave previous room and emit event for socket that left previous room
//         // Join new room and emit new_user event
//         if(room.previous !== "") {
//             socket.leave(room.previous);
//             console.log(`Socket ${socket.id} left room ${room.previous}`);
//         }

//         // Join all channels on connection
//         socket.join(room.current);
//         console.log(`[join]: Socket ${socket.id} joined room ${room.current}`);
//     });

//     socket.on("send", (message) => {
//         // ToDo: Store new message
//         messageController.createMessage(message);
//         console.log(message)

//         // ToDo: Emit to specified room only
//         io.to(message.room_id).emit("receive", message);
//     });
// });

server.listen(8000, () => {
    console.log("Running on port 8000");
});