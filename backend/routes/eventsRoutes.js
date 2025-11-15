const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 events API Hit");
    console.log("Received Data:", req.body);
    res.json({ message: "events route hit successfully!" });
});

module.exports = router;
