import React from "react";

// components
import DrawingPanel from "./DrawingPanel";
import EditorProps from "./EditorProps";

const Editor = () => {
    return (
        <div className="container-fluid ">
            <div className="editor d-flex">
                <div className="first-col">
                    <h1 className="title my-4 text-white">Draw Together</h1>
                    <EditorProps />
                </div>
                <DrawingPanel />
            </div>
        </div>
    );
};

export default Editor;
