const express = require("express");
const router = express.Router();
const Child = require("./models/Child");
const auth = require("../middleware/auth"); // JWT middleware

// POST /api/children/add
router.post("/add", auth, async (req, res) => {
  const { name, age, description } = req.body;

  if (!name) return res.status(400).json({ error: "Child name is required" });

  try {
    const newChild = new Child({ name, age, description });
    await newChild.save();

    res.json({ message: "Child added successfully", child: newChild });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
