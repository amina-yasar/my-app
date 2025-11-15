const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    console.log("🔥 children API Hit");
    console.log("Received Data:", req.body);
    res.json({ message: "children route hit successfully!" });
});

module.exports = router;
