import express from "express";
import { donate, getDonors, deleteDonor, updateDonor } from "../controllers/donateController.js";
import { createCheckoutSession } from "../api/create-payment-intent.js";
const router = express.Router(); // ⚠️ Make sure this line exists BEFORE using router

router.post("/create-checkout-session", createCheckoutSession);
// Routes
router.post("/", donate);           // Add donor
router.get("/", getDonors);         // Get all donors
router.put("/:id", updateDonor);    // Update donor
router.delete("/:id", deleteDonor); // Delete donor

export default router;
