const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Call Back!"));

module.exports = router;