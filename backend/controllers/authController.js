import User from "../models/User.js";
import Staff from "../models/Staff.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// ------------------ REGISTER USER ------------------
export const registerUser = async (req, res) => {
  const { fullname, email, password, address, phone, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      address,
      phone,
      role,
    });

    res.status(201).json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: err.message });
  }
};

// ------------------ LOGIN USER / STAFF / ADMIN ------------------
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Admin login
    if (email === "aminayasir@gmail.com" && password === "123456") {
      return res.json({
        user: {
          _id: "admin123",
          fullname: "Admin",
          email,
          role: "admin",
        },
        token: generateToken("admin123"),
      });
    }

    // Staff login
    const staff = await Staff.findOne({ email });
    if (staff) {
      const isMatch = await bcrypt.compare(password, staff.password);
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

      return res.json({
        user: {
          _id: staff._id,
          fullname: staff.fullname,
          email: staff.email,
          role: staff.role,
        },
        token: generateToken(staff._id),
      });
    }

    // Normal User login
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isUserMatch = await bcrypt.compare(password, user.password);
    if (!isUserMatch) return res.status(401).json({ message: "Invalid credentials" });

    return res.json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
