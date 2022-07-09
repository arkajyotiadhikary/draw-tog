/*
    TODO
     - Undo is not working properly.
     - On redo the color of the drawing changes to black.
*/

import React, { useRef, useState, useEffect } from "react";
import store from "../redux/store";
import { useSelector } from "react-redux";
const DrawingPanel = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [undoSteps, setUndoSteps] = useState({});
    const [redoStep, setRedoStep] = useState({});

    const [undo, setUndo] = useState(0);
    const [redo, setRedo] = useState(0);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;

        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        const temp = {
            ...undoSteps,
            [undo + 1]: [],
        };
        temp[undo + 1].push({ offsetX, offsetY });
        setUndoSteps(temp);
        setUndo(undo + 1);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        const temp = {
            ...undoSteps,
        };
        temp[undo].push({ offsetX, offsetY });
        setUndoSteps(temp);
    };

    const undoLastOperation = () => {
        if (undo > 0) {
            const data = undoSteps[undo];
            contextRef.current.strokeStyle = "white";
            contextRef.current.beginPath();
            contextRef.current.lineWidth = 5;
            contextRef.current.moveTo(data[0].offsetX, data[0].offsetY);
            data.forEach((item, index) => {
                if (index !== 0) {
                    contextRef.current.lineTo(item.offsetX, item.offsetY);
                    contextRef.current.stroke();
                }
            });
            contextRef.current.closePath();
            contextRef.current.strokeStyle = "black";
            const temp = {
                ...undoSteps,
                [undo]: [],
            };
            const te = {
                ...redoStep,
                [redo + 1]: [...data],
            };
            setUndo(undo - 1);
            setRedo(redo + 1);
            setRedoStep(te);
            setUndoSteps(temp);
        }
    };

    const redoLastOperation = () => {
        if (redo > 0) {
            const data = redoStep[redo];
            contextRef.current.strokeStyle = "black";
            contextRef.current.beginPath();
            contextRef.current.lineWidth = 5;
            contextRef.current.moveTo(data[0].offsetX, data[0].offsetY);
            data.forEach((item, index) => {
                if (index !== 0) {
                    contextRef.current.lineTo(item.offsetX, item.offsetY);
                    contextRef.current.stroke();
                }
            });
            contextRef.current.closePath();
            const temp = {
                ...redoStep,
                [redo]: [],
            };
            setUndo(undo + 1);
            setRedo(redo - 1);
            setRedoStep(temp);
            setUndoSteps({
                ...undoSteps,
                [undo + 1]: [...data],
            });
        }
    };

    return (
        <div>
            <canvas
                className="canvas bg-white "
                style={{ width: "70rem", height: "35rem" }}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            ></canvas>
            <div className="buttons d-flex">
                <button
                    className="btn btn-primary"
                    type="button"
                    disabled={undo === 0}
                    onClick={undoLastOperation}
                >
                    Undo
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    disabled={redo === 0}
                    onClick={redoLastOperation}
                >
                    Redo
                </button>
            </div>
        </div>
    );
};

export default DrawingPanel;
