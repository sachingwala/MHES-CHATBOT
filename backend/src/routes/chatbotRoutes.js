const express = require("express");
const ChatMessage = require("../models/ChatMessage");
const getAIResponse = require("../utils/aiHelper");

const router = express.Router();

// Handle user messages & AI responses
router.post("/", async (req, res) => {
  try {
    const { userId, message } = req.body;

    // Get AI response
    const response = await getAIResponse(message);

    // Save chat to database
    const chat = new ChatMessage({ userId, message, response });
    await chat.save();

    res.status(200).json({ success: true, response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Fetch chat history
router.get("/:userId", async (req, res) => {
  try {
    const chats = await ChatMessage.find({ userId }).sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ success: true, chats });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
