import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWindowMinimize,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Size = () => {
    return (
        <div className="Size bg-danger" style={{ width: "3.9vw" }}>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "9vh" }}
            >
                <FontAwesomeIcon className="w-100" icon={faWindowMinimize} />
            </div>
            <div>
                <button className="btn btn-sm">
                    <FontAwesomeIcon className="w-100" icon={faArrowDown} />
                </button>
            </div>
        </div>
    );
};

export default Size;
