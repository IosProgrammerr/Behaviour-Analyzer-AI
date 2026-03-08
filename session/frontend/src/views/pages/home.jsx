import LogoutUser from "../routes/logOutUser";

function HomePage() {
  const { handleLogout } = LogoutUser();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>

      <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

export default HomePage;
