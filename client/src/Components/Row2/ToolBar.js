import React from "react";

// COMPONENTS
import Tools from "./Tools";
import Brushes from "./Brushes";
import Shapes from "./Shapes";
import Size from "./Size";
import Colors from "./color/Colors";

const ToolBar = () => {
    return (
        <div
            className="toolbar d-flex justify-content-around bg-primary"
            style={{ height: "14vh" }}
        >
            <Tools />
            <Brushes />
            <Shapes />
            <Size />
            <div
                className="Title d-flex justify-content-center align-items-center bg-dark text-white"
                style={{ width: "39.06vw" }}
            >
                <h1>Draw Together</h1>
            </div>
            <Colors />
        </div>
    );
};

export default ToolBar;
