const OpenAI = require("openai");

class OpenAIChat {
  constructor() {
    this.openai = new OpenAI({
      apiKey: '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'
    });
  }

  async generateChatResponse(content) {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [{ role: "user", content }],
        model: "gpt-3.5-turbo",
      });
      console.log(completion.choices[0]);
    } catch (error) {
      console.error("Error generating chat response:", error);
      throw error;
    }
  }
}
module.exports = OpenAIChat;
// const myInstance = new OpenAIChat();
// myInstance.generateChatResponse("Who are you");
