import express from "express";
import { getloginUser, createloginUser } from "../controllers/OrphanageController.js";

const router = express.Router();

router.get("/", getloginUser);
router.post("/", createloginUser);

export default router;
