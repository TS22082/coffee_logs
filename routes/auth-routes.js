const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const { login, register, logout } = require("../controllers/auth-controller");

// Login route
// Route: http://localhost:3000/auth/login
// Type: POST

router.post("/auth/login", passport.authenticate("local"), login);

// Login route
// Route: http://localhost:3000/auth/register
// Type: POST

router.post("/auth/register", register);

// Login route
// Route: http://localhost:3000/auth/register
// Type: POST

router.get("/auth/logout", logout);

module.exports = router;
