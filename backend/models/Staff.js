import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const staffSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,       // hashed
  plainPassword: String,  // original (only for admin view)
  role: String,
  phone: String,
  address: String,
}, { timestamps: true });


// Pre-save hook to hash password
staffSchema.pre("save", async function () {
  if (!this.isModified("password")) return ;
  this.password = await bcrypt.hash(this.password, 10);
  ;
});


// Method to compare password
staffSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
