const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const userDetailController = require("./controllers/userDeatailController");
const logUserController = require("./controllers/logUserController");
const logoutuserController = require("./controllers/logoutuserController");
const homeController = require("./controllers/homeController");
const app = express();
const port = 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase",
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true
  })
);
app.use(express.json());
app.use(session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: false
}));
app.post("/register", userDetailController.registerUser);
app.post("/login", logUserController.loginUser);
app.post("/logout", logoutuserController.logoutUser);
app.get("/home", homeController.HomePage);
let sessions = []
app.post("/api/session", (req, res) => {
  const { site, duration } = req.body

  sessions.push({ site, duration })

  res.json({ status: "saved" })
})


// open this in browser to see data
app.get("/api/session", (req, res) => {
  res.json(sessions)
})

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});