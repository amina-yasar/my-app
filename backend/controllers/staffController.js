import User from "../models/User.js";
import Staff from "../models/Staff.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  });
};

export const addStaff = async (req, res) => {
  try {
    const { fullname, email, password, address, role, phone, createdBy } = req.body;

    const existing = await Staff.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    // Always hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStaff = new Staff({
      fullname,
      email,
      password: hashedPassword,  // hashed password
      plainPassword: password,   // optional
      address,
      role,
      phone,
      createdBy,
    });

    const saved = await newStaff.save();

    // Generate token
    const token = generateToken(saved._id, saved.role);

    // Return user + token (like loginStaff)
    res.status(201).json({
      user: {
        _id: saved._id,
        fullname: saved.fullname,
        email: saved.email,
        role: saved.role,
        phone: saved.phone,
        address: saved.address,
      },
      token,
    });
  } catch (err) {
    console.error("addStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL STAFF
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find().sort({ createdAt: -1 }).select("-password");
    res.json(staff);
  } catch (err) {
    console.error("getStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET STAFF BY ID
export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id).select("-password");
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.json(staff);
  } catch (err) {
    console.error("getStaffById error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getAdminProfile = async (req, res) => { 
  try { const admin = 
    { _id: "admin123", fullname: "Amina Yasir", email: "aminayasir@gmail.com", role: "admin", phone: "03001234567", address: "Your Address Here", }; 
  res.json(admin); } catch (err)
   { console.error("getAdminProfile error:", err); res.status(500).json({ error: "Server error" }); } };

// UPDATE STAFF + RETURN NEW TOKEN
export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, password, phone, address, role } = req.body;

    if (!fullname || !email || !role || !phone) {
      return res.status(400).json({ error: "Please fill required fields" });
    }

    const updatedData = { fullname, email, phone, address, role };
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const updatedStaff = await Staff.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedStaff) return res.status(404).json({ error: "Staff not found" });

    // Generate new token
    const token = generateToken(updatedStaff._id, updatedStaff.role);

    res.json({
      message: "Staff updated successfully",
      staff: updatedStaff,
      token,
    });
  } catch (err) {
    console.error("updateStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE STAFF
export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Staff.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Staff not found" });
    res.json({ message: "Staff deleted successfully" });
  } catch (err) {
    console.error("deleteStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// LOGIN STAFF
export const loginStaff = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    const staff = await Staff.findOne({ email });
    if (!staff) return res.status(404).json({ error: "Staff not found" });

    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken(staff._id, staff.role);

    res.json({
      user: {
        _id: staff._id,
        fullname: staff.fullname,
        email: staff.email,
        role: staff.role,
        phone: staff.phone,
        address: staff.address,
      },
      token,
    });
  } catch (err) {
    console.error("loginStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET LOGGED-IN STAFF PROFILE
export const getProfile = async (req, res) => {
  try {
    const staff = await Staff.findById(req.user.id).select("-password");
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.json(staff);
  } catch (err) {
    console.error("getProfile error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const updateStaffProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, password, phone, address, role } = req.body;

    if (!fullname || !email || !password || !phone || !address || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      { 
        fullname, 
        email, 
        password: hashedPassword, 
        plainPassword: password, // <-- store plain password
        phone, 
        address, 
        role 
      },
      { new: true }
    );

    if (!updatedStaff) return res.status(404).json({ error: "Staff not found" });

    res.status(200).json(updatedStaff); // Return updated staff including plainPassword
  } catch (err) {
    console.error("updateStaffProfile error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
