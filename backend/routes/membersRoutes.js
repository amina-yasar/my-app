const express = require("express");
const router = express.Router();
const Member = require("./models/Member");
const auth = require("../middleware/auth");

// POST /api/members/add
router.post("/add", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Access denied" });

  const { name, role, email, phone } = req.body;
  if (!name) return res.status(400).json({ error: "Member name required" });

  try {
    const member = new Member({ name, role, email, phone });
    await member.save();
    res.json({ message: "Member added successfully", member });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all members
router.get("/", auth, async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
