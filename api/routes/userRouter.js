const express = require("express");
const { getUsers } = require("../controllers/user/userController");
const router = express.Router();

router.get("/", getUsers);

module.exports = router;
