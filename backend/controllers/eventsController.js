export const getEvents = async (req, res) => {
  // TODO: Fetch events from DB
  res.json({ message: "Events data fetched successfully", events: [] });
};

export const addEvent = async (req, res) => {
  const { title, date } = req.body;
  if (!title || !date) return res.status(400).json({ error: "All fields required" });

  // TODO: Save event to DB
  res.json({ message: "Event created successfully", event: { title, date } });
};
