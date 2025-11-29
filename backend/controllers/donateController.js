import Donation from "../models/Donation.js";

// Add donor
export const donate = async (req, res) => {
  try {
    const { name, email, amount } = req.body;
    if (!name || !amount) return res.status(400).json({ error: "Name and amount are required" });

    const newDonation = new Donation({ name, email, amount });
    await newDonation.save();

    res.status(201).json({ message: "Donation successful", donation: newDonation });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};

// Get all donors
export const getDonors = async (req, res) => {
  try {
    const donors = await Donation.find().sort({ date: -1 });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};

// DELETE donor
export const deleteDonor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Donation.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ error: "Donor not found" });

    res.json({ message: "Donor deleted successfully", donor: deleted });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};
// Update donor
export const updateDonor = async (req, res) => {
  const { id } = req.params;
  const { name, email, amount } = req.body;

  try {
    const updated = await Donation.findByIdAndUpdate(
      id,
      { name, email, amount },
      { new: true } // return updated document
    );

    if (!updated) return res.status(404).json({ error: "Donor not found" });

    res.status(200).json({ message: "Donor updated successfully", donation: updated });
  } catch (err) {
    res.status(500).json({ error: err.message || "Server error" });
  }
};
