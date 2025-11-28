import User from "../models/User.js";

export const loginUser = async (req, res) => {
  console.log("🔥 login API Hit");
  console.log("Received body:", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Special admin check
    if (email === "aminayasir@gmail.com" && password === "123456") {
      return res.json({
        message: "Admin login successful",
        user: {
          name: "Admin",
          email,
          role: "admin"
        },
        redirect: "/adminportal" // frontend can use this to redirect
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user,
      redirect: "/collections" // default redirect for normal users
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};
