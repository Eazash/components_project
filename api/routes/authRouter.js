const express = require("express");
const {
	signupUser,
	loginUser,
	logoutUser,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware").auth;
const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/logout", authMiddleware, logoutUser);

module.exports = router;
