import Donation from "../models/Donation.js";

// Add new donation
export const donate = async (req, res) => {
  try {
    const { name, email, amount } = req.body;
    if (!name || !amount) {
      return res.status(400).json({ error: "Name and amount are required" });
    }

    const newDonation = new Donation({ name, email, amount });
    await newDonation.save();

    res.status(201).json({ message: "Donation successful", donation: newDonation });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};

// Get all donations
export const getDonors = async (req, res) => {
  try {
    const donors = await Donation.find().sort({ date: -1 });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};