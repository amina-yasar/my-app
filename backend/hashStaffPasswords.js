import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Staff from "./models/Staff.js";

const mongoURL = "mongodb+srv://amna:Amna123@cluster0.zsdwpsl.mongodb.net/orphanageDB";

const hashPasswords = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB connected");

    const staffList = await Staff.find();
    for (let s of staffList) {
      // Only hash if password is missing or not hashed
      const plain = s.plainPassword || s.password; // fallback
      if (!s.password || !s.password.startsWith("$2")) {
        s.password = await bcrypt.hash(plain, 10);
        await s.save();
        console.log(`Hashed password for ${s.email}`);
      }
    }

    console.log("All staff passwords hashed successfully!");
    await mongoose.disconnect();
  } catch (err) {
    console.error("Error hashing passwords:", err);
  }
};

hashPasswords();
