const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 members API Hit");
    console.log("Received Data:", req.body);
    res.json({ message: "members route hit successfully!" });
});

module.exports = router;
