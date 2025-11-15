const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 Donate API Hit");
    console.log("Received Data:", req.body);
    res.json({ message: "Donate route hit successfully!" });
});

module.exports = router;
