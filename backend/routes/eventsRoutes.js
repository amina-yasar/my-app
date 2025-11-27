const express = require("express");
const router = express.Router();
const Event = require("./models/Event");
const auth = require("../middleware/auth");

// POST /api/events/add
router.post("/add", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Access denied" });

  const { title, description, date, location } = req.body;
  if (!title || !date) return res.status(400).json({ error: "Event title and date required" });

  try {
    const event = new Event({ title, description, date, location });
    await event.save();
    res.json({ message: "Event added successfully", event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all events
router.get("/", auth, async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
