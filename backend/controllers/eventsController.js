// backend/controllers/eventsController.js
import Event from "../models/Event.js";

export const addEvent = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;
    if (!title || !date || !location) {
      return res.status(400).json({ error: "title, date and location are required" });
    }

    const event = new Event({
      title,
      date: new Date(date),
      location,
      description,
    });

    const saved = await event.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("addEvent error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error("getEvents error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, date, location, description } = req.body;

    if (!title || !date || !location) {
      return res.status(400).json({ error: "title, date and location are required" });
    }

    const updated = await Event.findByIdAndUpdate(
      id,
      { title, date: new Date(date), location, description },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ error: "Event not found" });

    res.json(updated);
  } catch (err) {
    console.error("updateEvent error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete event" });
  }
};