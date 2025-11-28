import express from "express";
import {
  getChildrenCount,
  getStaffCount,
  getDonationsTotal,
  getEventsCount,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/children/count", getChildrenCount);
router.get("/staff/count", getStaffCount);
router.get("/donations/total", getDonationsTotal);
router.get("/events/count", getEventsCount);

export default router;
