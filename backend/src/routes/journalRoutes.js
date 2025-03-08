const express = require("express");
const JournalEntry = require("../models/JournalEntry");

const router = express.Router();

// Create a New Journal Entry
router.post("/", async (req, res) => {
  try {
    const { userId, title, content, mood } = req.body;
    const newEntry = new JournalEntry({ userId, title, content, mood });

    await newEntry.save();
    res.status(201).json({ success: true, journal: newEntry });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get All Journal Entries for a User
router.get("/:userId", async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, entries });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Delete a Journal Entry
router.delete("/:entryId", async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.entryId);
    res.status(200).json({ success: true, message: "Entry deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
