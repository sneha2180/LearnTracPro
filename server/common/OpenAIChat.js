const OpenAI = require("openai");

require('dotenv').config();
class OpenAIChat {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateChatResponse(content) {
    try {
      console.log(process.env.API_KEY)
      const completion = await this.openai.chat.completions.create({
        messages: [{ role: "user", content }],
        model: "gpt-3.5-turbo",
      });
      return completion.choices[0];
    } catch (error) {
      console.error("Error generating chat response:", error);
      throw error;
    }
  }
}
module.exports = OpenAIChat;
// const myInstance = new OpenAIChat();
// myInstance.generateChatResponse("Who are you");
