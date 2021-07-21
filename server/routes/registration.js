const express = require("express");
const { postRegistration } = require("../controllers/registration");
const router = express.Router();

router.post("/",postRegistration);

module.exports = router;