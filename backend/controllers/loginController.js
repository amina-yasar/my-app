import User from "../models/User.js";
import Staff from "../models/Staff.js";

export const loginUser = async (req, res) => {
  console.log("🔥 login API Hit");
  console.log("Received body:", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // 1️⃣ Admin login (hardcoded)
    if (email === "aminayasir@gmail.com" && password === "123456") {
      return res.json({
        message: "Admin login successful",
        user: {
          _id: "admin123",
          fullname: "Admin",
          email,
          role: "admin",
        },
      });
    }

    // 2️⃣ Staff login
    const staff = await Staff.findOne({ email });
    if (staff) {
      if (staff.password !== password) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      return res.json({
        message: "Staff login successful",
        user: {
          _id: staff._id,
          fullname: staff.fullname,
          email: staff.email,
          phone: staff.phone || "",
          address: staff.address || "",
          role: "staff",
        },
      });
    }

    // 3️⃣ Normal user login
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    return res.json({
      message: "User login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: "user",
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
