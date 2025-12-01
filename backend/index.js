import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

// Import routes

import loginRoutes from "./routes/loginRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import donateRoutes from "./routes/donateRoutes.js";
import saveRoutes from "./routes/saveRoutes.js";
import childrenRoutes from "./routes/childrenRoutes.js";
import membersRoutes from "./routes/membersRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
const mongoURL = "mongodb+srv://amna:Amna123@cluster0.zsdwpsl.mongodb.net/orphanageDB";

mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection failed:", err.message));

// Routes (all open, no JWT protection)

app.use("/api/auth", authRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/donate", donateRoutes);
app.use("/api/save", saveRoutes);
app.use("/api/children", childrenRoutes);
app.use("/api/members", membersRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/staff", staffRoutes); // for other staff operations


// Example protected route
import { protect } from "./middleware/authMiddleware.js";
app.get("/api/staff/profile", protect, (req, res) => {
  res.json(req.user);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
