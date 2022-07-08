import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faFill,
    faA,
    faEraser,
    faEyeDropper,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Tools = () => {
    return (
        <div
            className="Tools bg-warning px-3"
            style={{ width: "9.375vw", height: "14vh" }}
        >
            <div className="row align-items-center" style={{ height: "7vh" }}>
                <div className="col-4">
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faFill} />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faA} />
                </div>
            </div>
            <div className="row align-items-center" style={{ height: "7vh" }}>
                <div className="col-4">
                    <FontAwesomeIcon icon={faEraser} />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faEyeDropper} />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    );
};

export default Tools;
