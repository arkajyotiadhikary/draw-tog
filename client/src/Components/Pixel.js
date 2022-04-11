import React, { useState } from "react";

const Pixel = (props) => {
    const { selectedColor } = props;

    const [pixelColor, setPixelColor] = useState("#fffff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    // methods
    const applyColor = () => {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
    };
    const changeColorOnHover = () => {
        setOldColor(oldColor);
        setPixelColor(selectedColor);
    };
    const resetColor = () => {
        if (canChangeColor) setPixelColor(oldColor);
    };

    return (
        <div
            className="pixel"
            onClick={applyColor}
            onMouseDown={changeColorOnHover}
            onMouseLeave={resetColor}
            style={{ backgroundColor: pixelColor }}
        />
    );
};

export default Pixel;
