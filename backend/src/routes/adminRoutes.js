const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get All Users (Admin)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
