// routes/_dataStore.js
// Simple in-memory stores for development/demo.
// NOTE: not persistent. Replace with a DB (Mongo/Postgres) in production.

const bcrypt = require("bcryptjs");

// pre-create an admin user for testing: email admin@a.com password: admin123
const adminPasswordHash = bcrypt.hashSync("admin123", 10);

const users = [
  {
    id: "1",
    name: "Admin",
    email: "admin@a.com",
    passwordHash: adminPasswordHash,
    role: "admin"
  }
];

const donations = []; // { id, userId, amount, message, createdAt }
const children = [
  { id: "c1", name: "Ali", age: 7, bio: "Loves drawing", photoUrl: "" }
];
const members = [
  { id: "m1", name: "Amina", role: "caregiver" }
];
const events = [
  { id: "e1", title: "Fundraiser", date: "2025-12-01", description: "Annual fundraiser" }
];

module.exports = { users, donations, children, members, events };
