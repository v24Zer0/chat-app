import server from "./server.js"

server.on("connection", (socket) => {
    console.log(`User ${socket.id} connected`)

    socket.emit("hello", "world");

    socket.on("send", (data) => {
        // data.message
        // data.room
        // data.createdBy
        // data.createdAt

        // socket.to(data.room).emit("receive", (data))
    })
})