const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Child", childSchema);
