const express = require("express");
const router = express.Router();
const Donation = require("./models/Donation");
const auth = require("../middleware/auth");

// POST /api/donate
router.post("/", auth, async (req, res) => {
  const { donorName, email, amount } = req.body;

  if (!donorName || !amount) return res.status(400).json({ error: "Donor name and amount required" });

  try {
    const donation = new Donation({ donorName, email, amount });
    await donation.save();
    res.json({ message: "Donation recorded successfully", donation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all donations (admin only)
router.get("/", auth, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Access denied" });

  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
