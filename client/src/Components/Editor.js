import "../Styles/Editor.scss";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

// components
import DrawingPanel from "./DrawingPanel";

const Editor = () => {
    const [panelWidth, setPanelWidth] = useState(20);
    const [panelHeight, setPanelHeight] = useState(20);
    const [hideOption, setHideOption] = useState(false);
    const [hideDrawingOption, setHideDrawingOption] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setselectedColor] = useState("f44336");

    // methods

    const initializeDrawingPanel = () => {
        setHideOption(!hideOption);
        setHideDrawingOption(!hideDrawingOption);

        buttonText === "start drawing"
            ? setButtonText("reset")
            : setButtonText("start drawing");
    };

    const changeColor = (color) => {
        setselectedColor(color.hex);
    };

    return (
        <div id="editor">
            <h1>Pixel Editor</h1>
            <div className="d-flex justify-content-center">
                <div className="card-body">
                    {hideDrawingOption && (
                        <h2 className="card-title">Enter Panel Dimensions</h2>
                    )}
                    {hideDrawingOption && (
                        <div
                            id="options"
                            className="d-flex justify-content-around align-items-center mt-5"
                        >
                            <div className="option">
                                <input
                                    type="number"
                                    className="panelInput form-control"
                                    defaultValue={panelWidth}
                                    style={{ width: "4rem" }}
                                    onChange={(e) =>
                                        setPanelHeight(e.target.value)
                                    }
                                />
                                <span>Width</span>
                            </div>
                            <div className="option">
                                <input
                                    type="number"
                                    className="panelInput form-control"
                                    defaultValue={panelHeight}
                                    style={{ width: "4rem" }}
                                    onChange={(e) =>
                                        setPanelHeight(e.target.value)
                                    }
                                />
                                <span>Height</span>
                            </div>
                        </div>
                    )}
                    <button
                        className="btn btn-primary my-5"
                        onClick={initializeDrawingPanel}
                    >
                        {buttonText}
                    </button>

                    {hideOption && (
                        <div>
                            <div className="d-flex justify-content-center align-items-center m-2">
                                <SketchPicker
                                    color={selectedColor}
                                    onChangeComplete={changeColor}
                                />
                            </div>
                            <DrawingPanel
                                width={panelWidth}
                                height={panelHeight}
                                selectedColor={selectedColor}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Editor;
