import express from "express";
import {
  addStaff,
  getStaff,
  updateStaff,
  getStaffById,
  deleteStaff,
  getAdminProfile,
  updateStaffProfile,
  getProfile,
} from "../controllers/staffController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ----------------------------- FIXED ORDER ----------------------------- */

// Admin Profile
router.get("/admin/profile", getAdminProfile);

// Logged-in Staff Profile (protected)
router.get("/profile", protect, getProfile);

// Update Staff Profile by ID (optional)
router.put("/profile/:id", updateStaffProfile);

// Staff CRUD
router.post("/", addStaff);
router.get("/", getStaff);

// SPECIFIC ID ROUTE MUST BE LAST
router.get("/:id", getStaffById);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

/* ----------------------------------------------------------------------- */

export default router;
