import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/register.jsx";
import LoginPage from "../pages/login.jsx";
import HomePage from "../pages/home.jsx";
import AuthHome from "./authHome.jsx";
import ErrorPage from "../pages/error.jsx";

function Routing() {
  return (
    <Routes>
      <Route
        path="/error"
        element={<ErrorPage />}
      />
      <Route
        path="/home"
        element={
          <AuthHome>
            <HomePage />
          </AuthHome>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Routing;
