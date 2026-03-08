import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthHome = ({ children = null }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check session validity
    fetch("http://localhost:3000/home", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  if (!isAuthenticated) {
    return <div>Loading...</div>; // Show a loading state while checking session
  }

  return <>{children}</>;
};

export default AuthHome;
