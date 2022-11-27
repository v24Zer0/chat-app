import server from "./server.js"

server.on("connection", (socket) => {
    console.log(`User ${socket.id} connected`)

    socket.emit("hello", "world");
})