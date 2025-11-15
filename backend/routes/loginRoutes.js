const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 Login API Hit");
    console.log("Received Data:", req.body);

    res.json({ message: "Login route hit successfully!" });
});

module.exports = router;
