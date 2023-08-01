export default function conditionalRendering1() {
  const isLoggedIn: boolean = true;

  return (
    <>
      <div className="px-12 text-3xl font-bold text-blue-400">
        {isLoggedIn && <h1>Admin</h1>}
      </div>
    </>
  );
}
