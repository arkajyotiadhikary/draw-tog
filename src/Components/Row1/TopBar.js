import React from "react";

const TopBar = () => {
    return (
        <div className="topbar d-flex" style={{ height: "5.5vh" }}>
            <button className="btn text-white" style={{ fontSize: "0.8rem" }}>
                File
            </button>
            <button className="btn text-white" style={{ fontSize: "0.8rem" }}>
                View
            </button>
            <button className="btn text-white" style={{ fontSize: "0.8rem" }}>
                Undo
            </button>
            <button className="btn text-white" style={{ fontSize: "0.8rem" }}>
                Redo
            </button>
        </div>
    );
};

export default TopBar;
