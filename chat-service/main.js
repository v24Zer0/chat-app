import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import crypto from "crypto";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(cors());

app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.get("/messages/:roomID", (req, res) => {
    const roomID = req.params["roomID"];
    console.log(`roomID: ${roomID}`);
    
    res.json({
        messages: []
    });
});

io.on("connection", (socket) => {
    console.log(`Socket ${socket.id} connected`);

    // io.emit("new_user", {
    //     username: "User_01",
    //     displayName: socket.id
    // });

    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected`);
    });

    socket.on("change_room", (room) => {
        // Leave previous room and emit event for socket that left previous room
        // Join new room and emit new_user event
        if(room.previous !== "") {
            socket.leave(room.previous);
            console.log(`Socket ${socket.id} left room ${room.previous}`);
        }

        socket.join(room.current);
        console.log(`Socket ${socket.id} joined room ${room.current}`);
    });

    socket.on("send", (message) => {
        console.log(message);

        // ToDo: Update id generation
        message.id = crypto.randomBytes(10).toString("hex");

        // ToDo: Store new message

        // ToDo: Emit to specified room only
        io.to(message.roomID).emit("receive", message);
    });
});

server.listen(8000, () => {
    console.log("Running on port 8000");
});