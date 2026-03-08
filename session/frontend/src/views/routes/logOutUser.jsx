import { useNavigate } from "react-router-dom";
function LogoutUser() {
  const navigate = useNavigate();
  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.message);
        if (data.message === "Logout successful") {
          alert("Logout successful");
          navigate("/login");
        }
      });
  };
  return { handleLogout };
}
export default LogoutUser;