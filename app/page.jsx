"use client";
import React from "react";

import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Transformer, Image, Rect, Circle } from "react-konva";

const ResizableImage = ({}) => {
  const imageRef = useRef(null);
  const transformerRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  const [image, setImage] = useState(null);

  const imageobj = new window.Image();
  imageobj.src = "https://konvajs.org/assets/yoda.jpg";

  imageobj.onload = () => {
    setImage(imageobj);
  };

  const handleSelect = () => {
    setIsSelected(true);
  };

  const handleDeselect = () => {
    setIsSelected(false);
  };

  if (!image) {
    return null;
  }

  return (
    <>
      <Image
        image={image}
        onClick={handleSelect}
        onTap={handleSelect}
        onDblClick={handleDeselect}
        onDblTap={handleDeselect}
        width={100}
        height={100}
        draggable
        ref={imageRef}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef}
          node={imageRef.current}
          rotateEnabled={false}
          keepRatio={false}
          boundBoxFunc={(oldBox, newBox) => {
            // Limit the minimum size of the image
            if (newBox.width < 20 || newBox.height < 20) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const App = () => {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={500} height={500}>
      <Layer>
        <Rect width={50} height={50} fill='red' draggable />
        <Circle x={200} y={200} stroke='black' radius={50} draggable />
        <ResizableImage />
      </Layer>
    </Stage>
  );
};

export default App;
