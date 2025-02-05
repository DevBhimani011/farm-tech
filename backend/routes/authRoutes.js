// src/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/verifyOtp", authController.verifyOtp);
//router.post("/checkAdmin", authController.checkAdmin);

module.exports = router;
