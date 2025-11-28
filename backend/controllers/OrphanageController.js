// controllers/orphanageController.js
import OrphanageApplication from "./models/OrphanageApplication.js";

// Create (POST /api/children)
export const createApplication = async (req, res) => {
  try {
    const { name, age, gender, guardianName, guardianContact, address } = req.body;
    if (!name || !age || !gender) {
      return res.status(400).json({ error: "name, age and gender are required" });
    }

    const newApp = new OrphanageApplication({
      name,
      age,
      gender,
      guardianName,
      guardianContact,
      address
    });

    await newApp.save();
    return res.status(201).json({ message: "Application created", application: newApp });
  } catch (err) {
    console.error("createApplication error:", err);
    return res.status(500).json({ error: "Server error", details: err.message });
  }
};

// Read all (GET /api/children)
export const getApplications = async (req, res) => {
  try {
    const apps = await OrphanageApplication.find().sort({ applicationDate: -1 });
    return res.json({ message: "Applications fetched", applications: apps });
  } catch (err) {
    console.error("getApplications error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Read one (GET /api/children/:id)
export const getApplicationById = async (req, res) => {
  try {
    const app = await OrphanageApplication.findById(req.params.id);
    if (!app) return res.status(404).json({ error: "Application not found" });
    return res.json({ application: app });
  } catch (err) {
    console.error("getApplicationById error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Update (PUT /api/children/:id)
export const updateApplication = async (req, res) => {
  try {
    const update = req.body;
    const app = await OrphanageApplication.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!app) return res.status(404).json({ error: "Application not found" });
    return res.json({ message: "Updated", application: app });
  } catch (err) {
    console.error("updateApplication error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Delete (DELETE /api/children/:id)
export const deleteApplication = async (req, res) => {
  try {
    const app = await OrphanageApplication.findByIdAndDelete(req.params.id);
    if (!app) return res.status(404).json({ error: "Application not found" });
    return res.json({ message: "Deleted", application: app });
  } catch (err) {
    console.error("deleteApplication error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
