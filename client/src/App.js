import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

// Components
import Editor from "./Components/Editor";

// store
import store from "./redux/store";

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
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/editor" element={<Editor />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
