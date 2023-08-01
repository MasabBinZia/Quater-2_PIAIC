export default function conditionalRendering() {
  const isLoggedIn: boolean = true;

  return (
    <>
      <div className="px-12 text-3xl font-bold ">
        {isLoggedIn ? (
          <>
            <h1>Admin</h1>
            <h1>Admin2</h1>
          </>
        ) : (
          <h1>Login</h1>
        )}
      </div>
    </>
  );
}
