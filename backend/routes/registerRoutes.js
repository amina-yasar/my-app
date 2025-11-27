const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("./models/User");

// POST /api/register
router.post("/", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) return res.status(400).json({ error: "All fields are required" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, passwordHash, role });
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
