"use client";
import State from "@/components/State";
import { useState } from "react";

export default function AddSub() {
  const [count, setCount] = useState<number>(0);
  const handleCount = (calc: number) => {
    setCount(calc);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center py-24">
      <State
        handleCount={(count) => setCount(count + 1)}
        count={count}
        name="Increment"
      />
      <State
        handleCount={(count) => setCount(count - 1)}
        count={count}
        name="Decrement"
      />
    </div>
  );
}
