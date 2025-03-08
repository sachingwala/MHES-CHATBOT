const mongoose = require("mongoose");

const TherapySessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "completed"], default: "pending" },
});

module.exports = mongoose.model("TherapySession", TherapySessionSchema);
