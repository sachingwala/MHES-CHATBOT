const express = require("express");
const JournalEntry = require("../models/JournalEntry");
const router = express.Router();

// Fetch mental health progress data
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Fetch last 7 journal entries
    const journalEntries = await JournalEntry.find({ userId }).sort({ createdAt: -1 }).limit(7);
    
    // Prepare data for charts
    const progressData = journalEntries.map(entry => ({
      date: entry.createdAt,
      mood: entry.mood
    }));

    res.status(200).json({ success: true, progress: progressData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
