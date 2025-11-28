import express from "express";
import { donate, getDonors } from "../controllers/donateController.js";

const router = express.Router();

router.post("/", donate);     // Add donor
router.get("/", getDonors);   // Get all donors

export default router;