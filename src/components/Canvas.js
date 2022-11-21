import React, { useEffect, useRef } from "react";
import setupCanvas from "./setupCanvas";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    setupCanvas(canvas, context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;