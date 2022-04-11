import React from "react";

// components
import DrawingPanel from "./DrawingPanel";
import EditorProps from "./EditorProps";

const Editor = () => {
    return (
        <div className="container-fluid">
            <div className="editor d-flex">
                <EditorProps />
                <DrawingPanel />
            </div>
        </div>
    );
};

export default Editor;
