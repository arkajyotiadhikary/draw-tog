import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import { io } from "socket.io-client";
const socket = io("http://localhost:8000/", {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

// Components

function App() {
    socket.on("connect", () => {
        console.log(socket.id);
    });
    return (
        <div className="App container-fluid">
            <Router>
                <Routes></Routes>
            </Router>
        </div>
    );
}

export default App;
