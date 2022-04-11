import React, { useRef } from "react";
import Row from "./Row.";

const DrawingPanel = (props) => {
    const { height, width, selectedColor } = props;

    const panelRef = useRef(null);

    let rows = [];

    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
    }
    return (
        <div className="container d-flex justify-content-center">
            <div id="drawingPanel" style={{ height: "22rem", width: "25rem" }}>
                <div id="pixels" className="h-100 d-flex" ref={panelRef}>
                    {rows}
                </div>
            </div>
        </div>
    );
};

export default DrawingPanel;
