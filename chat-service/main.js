import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import ChatServer from "./server/ChatServer.js";
import ChatService from "./service/ChatService.js";

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const chatService = new ChatService();

const chatServer = new ChatServer(server, "*", chatService);
chatServer.init();

server.listen(8000, () => {
    console.log("Running on port 8000");
});