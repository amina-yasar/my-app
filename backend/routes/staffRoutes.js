import express from "express";
import { addStaff, getStaff, updateStaff, getStaffById, deleteStaff, getAdminProfile, updateStaffProfile, getProfile } from "../controllers/staffController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

// Staff CRUD
router.post("/", addStaff);
router.get("/", getStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);
router.get("/:id", getStaffById); // fetch staff by ID
router.put("/profile/:id", updateStaffProfile); // Update staff profile
router.get("/:id", getProfile);

router.get("/profile", protect, getProfile);
router.post("/", updateStaffProfile);  // POST /api/staff
// router.get("/:id", getStaffById); // GET /api/staff/:id


// Admin profile
router.get("/admin/profile", getAdminProfile);
//GET staff by ID
router.get("/:id", async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.json(staff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
