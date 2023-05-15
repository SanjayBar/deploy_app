"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
const DynamicKonvaComponents = dynamic(
  async () => {
    const data = await import("react-konva");
    return data.Stage;
  },
  { ssr: false }
);

const Hello = () => {
  const [loading, setLoading] = useState(false);
  const [Stage, setStage] = useState(null);

  return (
    <div>
      <h1>hh</h1>
      <h1 onClick={() => DynamicKonvaComponents}>dsds</h1>
    </div>
  );
};

export default Hello;
