import express from "express";
import { saveData } from "../controllers/saveController.js";

const router = express.Router();
router.post("/", saveData);

export default router;
