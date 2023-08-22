"use client";
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const incrremeter = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(incrremeter);
  }, [counter]);

  return (
    <section className="gap-12 flex flex-col justify-center items-center">
      {/* useEffect */}
      <div>
        <h2>{counter}</h2>
        <h1
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
          className="text-2xl"
        >
          Use Effect
        </h1>
        <input
          className="text-black border-2 border-gray-400"
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <h2>{input}</h2>
      </div>
    </section>
  );
}
