import Child from "../models/Child.js";
import Staff from "../models/Staff.js";
import Donation from "../models/Donation.js";
import Event from "../models/Event.js";

// Get total number of children
export const getChildrenCount = async (req, res) => {
  try {
    const count = await Child.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get children count" });
  }
};

// Get total number of staff
export const getStaffCount = async (req, res) => {
  try {
    const count = await Staff.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get staff count" });
  }
};

// Get total donation amount
export const getDonationsTotal = async (req, res) => {
  try {
    const result = await Donation.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const total = result[0]?.total || 0;
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: "Failed to get donations total" });
  }
};
// Get total number of events (all events, not just future ones)
export const getEventsCount = async (req, res) => {
  try {
    const count = await Event.countDocuments(); // <-- removed date filter
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get events count" });
  }
};
