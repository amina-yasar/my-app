import User from "../models/User.js";

export const registerUser = async (req, res) => {
  console.log("🔥 Register API Hit");
  console.log("Received body:", req.body);

  try {
    const { name, email, password, phone, address, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "Name, email, password, and role are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ name, email, password, phone, address, role });
    await newUser.save();  // This actually writes to DB

    console.log("User saved successfully!");
    res.status(201).json({ message: "User registered successfully", user: newUser });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};
