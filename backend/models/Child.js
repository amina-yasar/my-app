import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Child = mongoose.model("Child", childSchema);
export default Child;
