"use client";
import React, { useState } from "react";

interface StateProps {}

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl">UseState</h1>
      <h1>Count:{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="p-5 bg-slate-600 rounded-3xl"
      >
        Incerement
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="p-5 bg-slate-600 rounded-3xl"
      >
        Decerement
      </button>
    </div>
  );
};

export default State;
