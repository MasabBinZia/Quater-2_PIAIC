export default function conditionalRendering2() {
  const isLoggedIn: boolean = false;

  return (
    <>
      <div
        className={`text-5xl px-12  ${
          isLoggedIn ? "bg-green-400" : "bg-red-400"
        }`}
      >
        <h1>Admin</h1>
      </div>
    </>
  );
}
