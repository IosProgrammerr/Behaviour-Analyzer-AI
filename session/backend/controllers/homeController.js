const HomePage = async (req, res) => {
  if (req.session && req.session.userId) {
    res.json({ message: "Welcome to the Home Page!" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { HomePage };
