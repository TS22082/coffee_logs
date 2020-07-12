const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");

// Login route
// Route: http://localhost:3000/auth/login
// Type: POST

router.post("auth/login", authController.login);

// Login route
// Route: http://localhost:3000/auth/register
// Type: POST

router.post("auth/register", authController.register);

// Login route
// Route: http://localhost:3000/auth/register
// Type: POST

router.get("auth/register", authController.register);

module.exports = router;
