const UserDetails = require("../model/userDetails");

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const newUser = new UserDetails({ name, email, phone, password });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res
      .status(500)
      .json({ message: "Failed to register user", error: error.message });
  }
};

module.exports = { registerUser };