const { OpenAI } = require("openai");
require("dotenv").config();


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const analyzeMood = async (message) => {
  try {
    const prompt = `Analyze the following message and determine if the user is experiencing stress, anxiety, or depression: "${message}"`;
    
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt,
      max_tokens: 50,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return "Unable to analyze mood";
  }
};

module.exports = analyzeMood;
