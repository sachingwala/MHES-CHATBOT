const mongoose = require("mongoose");

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  score: { type: Number, required: true }, // Score from AI-based assessment
  notes: { type: String },
  recordedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Progress", ProgressSchema);
