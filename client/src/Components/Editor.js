import "../Styles/Editor.scss";
import React, { useState } from "react";

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(20);
    const [panelHeight, setPanelHeight] = useState(20);
    const [hideOption, setHideOption] = useState(false);
    const [hideDrawingOption, setHideDrawingOption] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setselectedColor] = useState("f44336");

    return (
        <div id="editor">
            <h1>Pixel Editor</h1>
            {hideDrawingOption && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingOption && (
                <div id="options" className="d-flex">
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                        />
                    </div>
                    <div className="option">
                        <input
                            type="number"
                            className="panelInput"
                            defaultValue={panelWidth}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Editor;
