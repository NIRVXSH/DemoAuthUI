const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// mock login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  setTimeout(() => {
    if (username === "test" && password === "1234") {
      res.json({ token: "mock-token-123" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }, 1000);
});

// mock register API
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  setTimeout(() => {
    if (username === "test") {
    res.json({ message: `User ${username} registered successfully` });
    } else {
      res.status(400).json({ error: "Username already exists" });
    }
  }, 1000);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});
