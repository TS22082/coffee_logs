const express = require("express");
const router = express.Router();
const {
  getProfile,
  createProfile,
} = require("../controllers/profile-controller");

router.post("/profile/new", createProfile);

module.exports = router;
