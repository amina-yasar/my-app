import express from "express";
import { getEvents, addEvent } from "../controllers/eventsController.js";

const router = express.Router();
router.get("/", getEvents);
router.post("/", addEvent);

export default router;
