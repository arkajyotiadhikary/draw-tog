import React, { useRef, useState, useEffect } from "react";
import store from "../redux/store";
import { useSelector } from "react-redux";
const DrawingPanel = () => {
    // refs
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const selectedColor = useSelector((state) => state.editor.color);

    console.log("selected color", selectedColor);

    // states
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState(selectedColor);
    const [lineOpacity, setLineOpacity] = useState(0.1);

    useEffect(() => {
        setLineColor(selectedColor);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.linejoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth, selectedColor]);

    // Methods
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };
    const endDrawing = (e) => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };
    const draw = (e) => {
        if (!isDrawing) return;
        ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current.stroke();
    };

    return (
        <div className="drawing-panel border m-4 bg-white">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                width={"800px"}
                height={"600px"}
            ></canvas>
        </div>
    );
};

export default DrawingPanel;
