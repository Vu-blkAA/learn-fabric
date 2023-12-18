import React, { useEffect } from "react";
import logo from "./logo.svg";
import { fabric } from "fabric";
import "./App.css";

function App() {
  useEffect(() => {
    const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
    var ctx = canvasEl.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "red";
      ctx.translate(100, 100);
      ctx.rotate((Math.PI / 180) * 45);
      ctx.fillRect(-10, -10, 20, 20);
    }

    // const canvas = new fabric.Canvas("canvas");
    // const rect = new fabric.Rect({
    //   left: 100,
    //   top: 100,
    //   fill: "red",
    //   width: 20,
    //   height: 20
    // });

    // canvas.add(rect)
  }, []);

  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

export default App;
