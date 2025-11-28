export const saveData = async (req, res) => {
  const { data } = req.body;
  if (!data) return res.status(400).json({ error: "No data provided" });

  // TODO: Save data to DB
  res.json({ message: "Data saved successfully", data });
};
