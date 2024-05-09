import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
  organization: "org-2BacFidJ0Ht6Cqio3DywBaFe",
  apiKey: "sk-proj-v54uToMIV42FI9NQuMHXT3BlbkFJjmEtosBBVJhFqU6c6SaJ",
});

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });
