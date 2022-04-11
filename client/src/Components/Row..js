import React from "react";
import Pixel from "./Pixel";

const Row = (props) => {
    const { width, selectedColor } = props;
    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
    }

    return <div className="row d-flex h-100">{pixels}</div>;
};

export default Row;
