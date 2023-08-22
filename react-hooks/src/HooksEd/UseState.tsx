"use client";
import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  };

  return (
    <section className="gap-12 flex flex-col justify-center items-center">
      {/* useState*/}
      <div className="">
        <button className="p-5 m-5 bg-red-500 rounded-full" onClick={Increment}>
          Increment
        </button>
        <h1 className="text-center">{count}</h1>
      </div>
    </section>
  );
}
