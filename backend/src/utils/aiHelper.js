const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getAIResponse = async (message) => {
  try {
    const res = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
    });
    return res.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    return "Sorry, I am having trouble processing your request.";
  }
};

module.exports = getAIResponse;
