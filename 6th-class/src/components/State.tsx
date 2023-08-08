"use client";

interface Iprops {
  name: string;
  count: number;
  handleCount: (count: number) => void;
}

const State = ({ count, name, handleCount }: Iprops) => {
  return (
    <>
      <button
        className="px-4 py-4 bg-blue-600 rounded-full font-bold"
        onClick={() => {
          handleCount(count);
        }}
      >
        {name} {count}
      </button>
    </>
  );
};

export default State;
