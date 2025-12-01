import User from "../models/User.js";
import Staff from "../models/Staff.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Helper function to generate JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

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
      const token = generateToken("admin123", "admin");
      return res.json({
        message: "Admin login successful",
        user: {
          _id: "admin123",
          fullname: "Admin",
          email,
          role: "admin",
        },
        token,
      });
    }

    // 2️⃣ Staff login
    const staff = await Staff.findOne({ email });
    if (staff) {
      const isMatch = await bcrypt.compare(password, staff.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      const token = generateToken(staff._id, "staff");

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
        token,
      });
    }

    // 3️⃣ Normal user login
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isUserMatch = await bcrypt.compare(password, user.password);
    if (!isUserMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const token = generateToken(user._id, "user");

    return res.json({
      message: "User login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: "user",
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id, "user");

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        role: "user",
      },
      token,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
