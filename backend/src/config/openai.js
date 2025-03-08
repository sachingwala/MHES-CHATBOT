const axios = require("axios");
require("dotenv").config();

const getAIResponse = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "system", content: "You are a mental health assistant." }, { role: "user", content: message }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI response", error);
    return "I'm sorry, I couldn't process your request.";
  }
};

module.exports = getAIResponse;
