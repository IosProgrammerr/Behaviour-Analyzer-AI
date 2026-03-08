import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();

        const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const password = event.target.password.value;
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                email: email,
                phone: phone,
                password: password
            })
        })
        .then(res => res.json())   // take response from backend
        .then(data => {
            console.log(data.message); // "User registered successfully" or "Registration failed"
            if (data.message === "User registered successfully") {
                return navigate("/login"); // Redirect to login page after successful registration
            } else {
                return navigate("/error"); // Redirect to error page if registration fails
            }
        });
      };
  return { handleSubmit };
}

export default RegisterUser;