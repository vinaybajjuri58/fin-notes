const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to backend of notes-taking app",
  });
});
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
