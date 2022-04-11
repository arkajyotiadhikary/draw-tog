import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Components
import Editor from "./Components/Editor";

// Socket
import { io } from "socket.io-client";
const socket = io("http://localhost:8000/", {
    transports: ["websocket"],
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd",
    },
});

function App() {
    socket.on("connect", () => {
        console.log(socket.id);
    });
    return (
        <div className="App container-fluid">
            <Router>
                <Routes>
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
