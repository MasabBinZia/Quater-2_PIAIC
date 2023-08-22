"use client";
import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    function test() {
      if (counter === 0) {
        setCounter(Math.random() * 200);
      }
    }
    test();
  }, [counter]);

  return (
    <div className="flex flex-col  justify-center items-center> "
    >
      <h2>{counter}</h2>
      <h1 onClick={() => setCounter(0)}>UseLayoutEffect</h1>
    </div>
  );
};

export default UseLayoutEffect;
