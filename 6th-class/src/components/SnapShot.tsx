"use client";
import React, { useState } from "react";

const SnapShot = () => {
  const [number, setNumber] = useState(0);
  const handleCount = () => {
    setNumber((num) => num + 1);
    setNumber((num) => num + 1);
    setNumber((num) => num + 1);
  };
  return (
    <div className="flex gap-4 justify-center items-center">
      <h1 className="font-bold text-2xl">{number}</h1>
      <button
        className="h-10 w-10 px-2 py-2 bg-red-800 rounded-full"
        onClick={handleCount}
      >
        +3
      </button>
    </div>
  );
};

export default SnapShot;
