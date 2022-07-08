import React from "react";

// components
import TopBar from "./Row1/TopBar";
import ToolBar from "./Row2/ToolBar";
import DrawingPanel from "./DrawingPanel";
import EditorProps from "./EditorProps";

const Editor = () => {
    return (
        <div>
            <TopBar />
            <ToolBar />
        </div>
    );
};

export default Editor;
