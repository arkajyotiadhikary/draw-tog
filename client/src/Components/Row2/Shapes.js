import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Shapes = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div
                className="Shapes justify-content-center align-items-center bg-primary "
                style={{ width: "14.0625vw" }}
            >
                <div>
                    <div className="d-flex align-items-center justify-content-around">
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                    </div>
                    <div className="d-flex align-items-center justify-content-around my-2">
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                    </div>
                    <div className="d-flex align-items-center justify-content-around">
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon icon={faSquare} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Shapes;
