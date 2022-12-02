import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

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

io.on("connection", (socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected`);
    });

    socket.on("send", (message) => {
        console.log(message);
        message.id = "messageID";
        io.emit("receive", message);
    });
});

server.listen(8000, () => {
    console.log("Running on port 8000");
});