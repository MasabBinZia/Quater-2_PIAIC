"use client";
import React, { useReducer } from "react";

const initialState = { bgColor: "blue" };
const reducer = (state: any, action: any) => {
  switch (action) {
    case "black":
      return { bgColor: "#000" };
    case "red":
      return { bgColor: "red" };
    default:
      return { bgColor: "intial" };
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex flex-col w-80 justify-center items-center">
      <h1 style={{ backgroundColor: state.bgColor }}>Hello reducer</h1>
      <div className="flex flex-col">
        <button onClick={() => dispatch("red")}>turn to Red</button>
        <button onClick={() => dispatch("black")}>turn to Black</button>
      </div>
    </div>
  );
};

export default UseReducer;
