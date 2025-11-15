const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 Register API Hit");
    console.log("Received Data:", req.body);

    res.json({ message: "Register route hit successfully!" });
});

module.exports = router;
