import Child from "../models/Child.js";

// Fetch all children
export const getChildren = async (req, res) => {
  try {
    const children = await Child.find();
    res.json(children);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new child
export const addChild = async (req, res) => {
  const { name, age, gender } = req.body;
  if (!name || !age || !gender) return res.status(400).json({ error: "All fields required" });

  try {
    const newChild = new Child({ name, age, gender });
    const savedChild = await newChild.save();
    res.status(201).json(savedChild);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Delete child by ID
export const deleteChild = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Child.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Child not found" });
    }

    res.json({ message: "Child deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update child by ID
export const updateChild = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender } = req.body;

  try {
    const updated = await Child.findByIdAndUpdate(
      id,
      { name, age, gender },
      { new: true } // return updated document
    );

    if (!updated) return res.status(404).json({ message: "Child not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

