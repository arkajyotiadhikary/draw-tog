const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
// const cors = require("cors");
const io = socket(server, {
    cors: {
        origin: "https://localhost:8080",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

// app.use(cors());

const onConnection = (socket) => {
    socket.on("drawing", (data) => socket.broadcast.emit("drawing", data));
};
io.on("connection", onConnection);

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`server is running on port ${port}`));
