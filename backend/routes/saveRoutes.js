const express = require("express");
const router = express.Router();
const Save = require("./models/Save");

// POST /api/save
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !message) return res.status(400).json({ error: "Name and message required" });

  try {
    const saveData = new Save({ name, email, message });
    await saveData.save();
    res.json({ message: "Data saved successfully", saveData });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
