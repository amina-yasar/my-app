import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "staff" },
  address: { type: String },
  phone: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" }, // <-- new field
}, { timestamps: true });

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
