const ChatMessage = require("../models/ChatMessage");
const getAIResponse = require("../config/openai");

exports.sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const aiResponse = await getAIResponse(message);

    const chatMessage = new ChatMessage({ user: userId, message, response: aiResponse });
    await chatMessage.save();

    res.status(200).json({ message, response: aiResponse });
  } catch (error) {
    res.status(500).json({ error: "Error processing message" });
  }
};
