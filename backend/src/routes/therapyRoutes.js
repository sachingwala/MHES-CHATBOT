const express = require("express");
const router = express.Router();
const TherapySession = require("../models/TherapySession");

// Book a Therapy Session
router.post("/book", async (req, res) => {
  try {
    const { userId, therapistId, date, time } = req.body;
    const session = new TherapySession({ userId, therapistId, date, time });

    await session.save();
    res.status(201).json({ message: "Session booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to book session" });
  }
});

module.exports = router;
