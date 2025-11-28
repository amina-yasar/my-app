import express from "express";
import { getMembers } from "../controllers/membersController.js";

const router = express.Router();

// No JWT protection
router.get("/", getMembers);

export default router;
