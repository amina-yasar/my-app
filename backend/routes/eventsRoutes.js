import express from "express";
import { addEvent, getEvents, updateEvent, deleteEvent } from "../controllers/eventsController.js";

const router = express.Router();

router.post("/", addEvent);       // POST /api/events
router.get("/", getEvents);       // GET /api/events
router.put("/:id", updateEvent);  // PUT /api/events/:id
router.delete("/:id", deleteEvent); // DELETE /api/events/:id

export default router;
