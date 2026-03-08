import { useNavigate } from "react-router-dom";
import LogUser from "../routes/logUser";
function LoginPage() {
  const navigate = useNavigate();
  const { handleSubmit } = LogUser();
  return (
    <div className="login-page d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "25rem" }}>
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              // required
            />
          </div>
          <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <button 
          type="button"
          className="btn btn-primary w-100"
            onClick={() => navigate("/register")}>
            Register
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;