// backend/models/Event.js
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, default: "" },
}, {
  timestamps: true
});

export default mongoose.model("Event", EventSchema);
