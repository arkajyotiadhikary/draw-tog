import React, { useEffect, useState } from "react";
import { CompactPicker } from "react-color";
import DrawingTools from "./DrawingTools";
import { editor } from "../redux/actions/editor";
import { useDispatch } from "react-redux";

const EditorProps = () => {
    const dispatch = useDispatch();

    const [selectedColor, setSelectedColor] = useState({
        color: "brown",
    });

    // useEffect(() => {}, [selectedColor]);

    const handleChange = (e) => {
        dispatch(editor(e.hex));
    };

    return (
        <div>
            <CompactPicker onChangeComplete={handleChange} />
            <DrawingTools />
        </div>
    );
};
export default EditorProps;
