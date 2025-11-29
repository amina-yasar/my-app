import Staff from "../models/Staff.js";

// CREATE STAFF
export const addStaff = async (req, res) => {
  try {
    const { fullname, email, password, address, role, phone, createdBy } = req.body;

    if (!fullname || !email || !password || !role || !phone) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    const existing = await Staff.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    const newStaff = new Staff({ fullname, email, password, address, role, phone, createdBy });
    const saved = await newStaff.save();

    res.status(201).json(saved); // full staff object
  } catch (err) {
    console.error("addStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET STAFF BY ID
export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.status(200).json(staff); // return full staff object
  } catch (err) {
    console.error("getStaffById error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET ALL STAFF
export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find().sort({ createdAt: -1 });
    res.json(staff);
  } catch (err) {
    console.error("getStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE STAFF
export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, password, address, role, phone } = req.body;

    if (!fullname || !email || !role || !phone) {
      return res.status(400).json({ error: "Please fill required fields" });
    }

    const updated = await Staff.findByIdAndUpdate(
      id,
      { fullname, email, password, address, role, phone },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ error: "Staff not found" });

    res.json(updated);
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

// ADMIN PROFILE
export const getAdminProfile = async (req, res) => {
  try {
    const admin = {
      _id: "admin123",
      fullname: "Amina Yasir",
      email: "aminayasir@gmail.com",
      role: "admin",
      phone: "03001234567",
      address: "Your Address Here",
    };
    res.json(admin);
  } catch (err) {
    console.error("getAdminProfile error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE STAFF PROFILE
export const updateStaffProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, password, phone, address, role } = req.body;

    if (!fullname || !email || !password || !phone || !address || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedStaff = await Staff.findByIdAndUpdate(
      id,
      { fullname, email, password, phone, address, role },
      { new: true }
    );

    if (!updatedStaff) return res.status(404).json({ error: "Staff not found" });

    res.status(200).json(updatedStaff);
  } catch (err) {
    console.error("updateStaffProfile error:", err);
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

    if (staff.password !== password)
      return res.status(400).json({ error: "Invalid password" });

    // Return full staff object
    res.json(staff);
  } catch (err) {
    console.error("loginStaff error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
