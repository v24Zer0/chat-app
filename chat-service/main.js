import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import crypto from "crypto";
import MessageController from "./controller/message.controller.js";
import RoomController from "./controller/room.controller.js";
import MessageService from "./service/message.service.js";
import MessageRepo from "./repo/message.repo.js";
import UserController from "./controller/user.controller.js";
import UserRepo from "./repo/user.repo.js";
import UserService from "./service/user.service.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const messageRepo = new MessageRepo();
const messageService = new MessageService(messageRepo);
const messageController = new MessageController(messageService);

const roomController = new RoomController(null);

const userRepo = new UserRepo();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hello"});
});

app.get("/messages/:roomID", messageController.retrieveMessages);

app.get("/rooms/:userID", roomController.retrieveRooms);
app.post("/room", roomController.createRoom);

app.post("/login", userController.login);

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
        // ToDo: Store new message
        messageController.createMessage(message);
        console.log(message)

        // ToDo: Emit to specified room only
        io.to(message.room_id).emit("receive", message);
    });
});

server.listen(8000, () => {
    console.log("Running on port 8000");
});