const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Importing routes
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");
const donateRoutes = require("./routes/donateRoutes");
const childrenRoutes = require('./routes/childrenRoutes');
const membersRoutes = require('./routes/membersRoutes');
const eventsRoutes = require('./routes/eventsRoutes');
const saveRoutes = require('./routes/saveRoutes');

// Using routes
app.use("/api/login", loginRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/donate", donateRoutes);
app.use('/api/save', saveRoutes);
app.use('/api/children', childrenRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/events', eventsRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
