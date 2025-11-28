import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date
});

export default mongoose.model("Event", eventSchema);
