"use client";
export default function EventResponse() {
  let age = 21;
  const handleClick = () => {
    alert("You Clicked me!");
  };
  return (
    <div className="px-12 mt-8">
      <button
        className="bg-red-800 w-[200px] h-10 rounded-full "
        onClick={handleClick}
      >
        Click Me! {age}
      </button>
    </div>
  );
}
