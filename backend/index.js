const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose"); // Import mongoose

const app = express();

// ----------------------
// MongoDB connection
// ----------------------
// Replace "Amna123" with your actual password
// If it contains special characters like @, #, ! → URL encode them
const mongoURL = "mongodb+srv://amna:Amna123@cluster0.zsdwpsl.mongodb.net/orphanageDB";

mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

// ----------------------
// Middleware
// ----------------------
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ----------------------
// Routes
// ----------------------
const loginRoutes = require("../routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");
const donateRoutes = require("./routes/donateRoutes");
const childrenRoutes = require("./routes/childrenRoutes");
const membersRoutes = require("./routes/membersRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const saveRoutes = require("./routes/saveRoutes");

// Use routes
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/donate", donateRoutes);
app.use("/api/save", saveRoutes);
app.use("/api/children", childrenRoutes);
app.use("/api/members", membersRoutes);
app.use("/api/events", eventsRoutes);

// ----------------------
// Start server
// ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
