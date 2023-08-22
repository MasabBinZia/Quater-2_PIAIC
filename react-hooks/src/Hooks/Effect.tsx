"use client";
import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Code we want to run
    console.log("Count is", count);

    //optional return fucnction
    return () => {
      console.log("cleanup");
    };
  }, [count]); //the depeendency array
  return (
    <div>
      <h1 className="text-3xl">UseEffect</h1>
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

export default Effect;
