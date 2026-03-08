import RegisterUser from "../routes/registerUser";

function RegisterPage() {
     const { handleSubmit } = RegisterUser();
    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone number" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
                </div>
                 {/*onClick={RegisterUser}*/}
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;