"use client";
import { Stage, Layer, Circle } from "react-konva";

function Canvas(props: any) {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle x={200} y={100} radius={50} fill='green' draggable />
      </Layer>
    </Stage>
  );
}

export default Canvas;
