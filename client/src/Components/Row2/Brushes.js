import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Brushes = () => {
    return (
        <div className="Brashes bg-danger " style={{ width: "3.125vw" }}>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "9vh" }}
            >
                <FontAwesomeIcon className="w-100" icon={faPaintBrush} />
            </div>
            <div>
                <button className="btn btn-sm">
                    <FontAwesomeIcon className="w-100" icon={faArrowDown} />
                </button>
            </div>
        </div>
    );
};
export default Brushes;
