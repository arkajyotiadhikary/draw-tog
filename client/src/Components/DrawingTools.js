import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faEraser } from "@fortawesome/free-solid-svg-icons";

const DrawingTools = () => {
    return (
        <div className="d-flex justify-content-around mt-2">
            <button className="btn btn-primary text-white" id="tool-pencil">
                <FontAwesomeIcon icon={faPaintBrush} />
            </button>
            <button className="btn btn-primary text-white" id="tool-pencil">
                <FontAwesomeIcon icon={faEraser} />
            </button>
        </div>
    );
};

export default DrawingTools;
