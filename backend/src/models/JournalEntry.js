const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  mood: { type: String, enum: ["happy", "sad", "anxious", "neutral"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JournalEntry", JournalEntrySchema);
