const UserDetails = require("../model/userDetails");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt:", { username, password }); // Debugging log

  try {
    const user = await UserDetails.findOne({ name: username });

    if (!user) {
      console.log("User not found"); // Debugging log
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      console.log("Incorrect password"); // Debugging log
      return res.status(401).json({ message: "Wrong Password" });
    }

    // Set session variables
    req.session.userId = user._id;
    req.session.username = user.name;

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error); // Debugging log
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { loginUser };
