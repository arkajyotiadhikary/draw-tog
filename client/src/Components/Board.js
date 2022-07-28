import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import "../Styles/Board.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

// logo
import logo from "./image/coollogo_com-149942598.png";

const Board = () => {
    const canvasRef = useRef(null);
    const colorsRef = useRef(null);
    const socketRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const test = colorsRef.current;
        const context = canvas.getContext("2d");
        const colors = document.getElementsByClassName("color");
        const current = {
            color: "black",
        };

        const onColorUpdate = (e) => {
            current.color = e.target.className.split(" ")[1];
        };

        for (let i = 0; i < colors.length; i++) {
            colors[i].addEventListener("click", onColorUpdate, false);
        }
        let drawing = false;

        const drawLine = (x0, y0, x1, y1, color, emit) => {
            context.beginPath();
            context.moveTo(x0, y0);
            context.lineTo(x1, y1);
            context.strokeStyle = color;
            current.color !== "white"
                ? (context.lineWidth = 2)
                : (context.lineWidth = 4);
            context.stroke();
            context.closePath();

            if (!emit) {
                return;
            }
            const w = canvas.width;
            const h = canvas.height;

            socketRef.current.emit("drawing", {
                x0: x0 / w,
                y0: y0 / h,
                x1: x1 / w,
                y1: y1 / h,
                color,
            });
        };

        const onMouseDown = (e) => {
            drawing = true;
            current.x = e.clientX || e.touches[0].clientX;
            current.y = e.clientY || e.touches[0].clientY;
        };

        const onMouseMove = (e) => {
            if (!drawing) {
                return;
            }
            drawLine(
                current.x,
                current.y,
                e.clientX || e.touches[0].clientX,
                e.clientY || e.touches[0].clientY,
                current.color,
                true
            );
            current.x = e.clientX || e.touches[0].clientX;
            current.y = e.clientY || e.touches[0].clientY;
        };

        const onMouseUp = (e) => {
            if (!drawing) {
                return;
            }
            drawing = false;
            drawLine(
                current.x,
                current.y,
                e.clientX || e.touches[0].clientX,
                e.clientY || e.touches[0].clientY,
                current.color,
                true
            );
        };

        const throttle = (callback, delay) => {
            let previousCall = new Date().getTime();
            return function () {
                const time = new Date().getTime();

                if (time - previousCall >= delay) {
                    previousCall = time;
                    callback.apply(null, arguments);
                }
            };
        };

        canvas.addEventListener("mousedown", onMouseDown, false);
        canvas.addEventListener("mouseup", onMouseUp, false);
        canvas.addEventListener("mouseout", onMouseUp, false);
        canvas.addEventListener("mousemove", throttle(onMouseMove, 10), false);

        canvas.addEventListener("touchstart", onMouseDown, false);
        canvas.addEventListener("touchend", onMouseUp, false);
        canvas.addEventListener("touchcancel", onMouseUp, false);
        canvas.addEventListener("touchmove", throttle(onMouseMove, 10), false);

        const onResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", onResize, false);
        onResize();

        const onDrawingEvent = (data) => {
            const w = canvas.width;
            const h = canvas.height;
            drawLine(
                data.x0 * w,
                data.y0 * h,
                data.x1 * w,
                data.y1 * h,
                data.color
            );
        };

        socketRef.current = io.connect("/", {
            transports: ["websocket"],
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "abcd",
            },
        });
        socketRef.current.on("drawing", onDrawingEvent);
    }, []);

    return (
        <div>
            <img
                className="logo disabled"
                src={logo}
                alt="logo"
                style={{
                    position: "absolute",
                    zIndex: 10,
                    height: "5rem",
                    margin: "2rem",
                }}
            />
            <canvas ref={canvasRef} className="whiteboard" />

            <div
                ref={colorsRef}
                className="colors d-flex align-items-end justify-content-center"
            >
                <div className="color-holder d-flex justify-content-center">
                    <div className="color black" />
                    <div className="color red" />
                    <div className="color green" />
                    <div className="color blue" />
                    <div className="color yellow" />
                    <div className="color white d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                            className="disabled"
                            icon={faEraser}
                            style={{ height: "1.5rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;
