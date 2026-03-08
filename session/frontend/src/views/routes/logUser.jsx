import { useNavigate } from "react-router-dom";

const LogUser = () => {
  const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:"include",
        body: JSON.stringify({ username, password })
      })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);

            if (data.message === "Login successful") {
              navigate("/home");
            } else if (data.message === "Wrong Password") {
              alert("Wrong password");
            } else if (data.message === "Invalid credentials") {
              alert("Invalid credentials");
            }
        });
    };

    return { handleSubmit};
  };

export default LogUser;