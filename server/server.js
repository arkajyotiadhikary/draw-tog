const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 8000;
// const index = require("./routes/index");

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {
    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
    console.log("New client connected");
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
