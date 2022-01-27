const express = require("express");
const { signupUser } = require("../controllers/auth/authController");
const router = express.Router();

router.post("/signup", signupUser);

module.exports = router;
