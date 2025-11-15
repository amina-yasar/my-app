const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 save API Hit");
    console.log("Received Data:", req.body);

    res.json({ message: "save route hit successfully!" });
});

module.exports = router;
