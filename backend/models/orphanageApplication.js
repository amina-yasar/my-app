import mongoose from "mongoose";

const orphanageApplicationStructure = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  guardianName: { type: String },
  guardianContact: { type: String },
  address: { type: String },
  applicationDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
});

// Create the model
const OrphanageApplicationModel = mongoose.model(
  "OrphanageApplication",
  orphanageApplicationStructure
);

export default OrphanageApplicationModel;
