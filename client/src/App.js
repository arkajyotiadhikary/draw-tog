import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

// Components
import Editor from "./Components/Editor";
import Board from "./Components/Board";
// store
import store from "./redux/store";

// Socket

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/" element={<Board />} />
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
