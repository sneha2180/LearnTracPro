const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/students/studentRoutes");
const chapterRoutes = require("./routes/chapters/chapterRoutes");
const tutorRoutes = require("./routes/tutors/tutorRoutes");
const courseRoutes = require("./routes/courses/courseRoutes");
const categoryRoutes = require("./routes/categories/categoryRoutes");
const queryRoutes = require("./routes/query/queryRoutes");
const blogRoutes = require("./routes/blogs/blogRoutes");
const discussionRoutes = require("./routes/discussions/discussionRoutes");
const app = express();
app.use(express.json());
const readline =require("readline") ;
const { Configuration, OpenAIApi } = require('openai');
const OpenAIChat = require("./common/OpenAIChat");
require('dotenv').config();

const uri = process.env.DB_URL;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  const openai = new OpenAIChat();
  // app.post("/openai", async (req, res) => {
  //   const content = req.body.message;
  //   try {
  //     const completion = await openai.generateChatResponse(content)
  //     return completion;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });
  app.get('/chat', async (req, res) => {
    try {
      const query = req.query.query || '';
      const decodedQuery = decodeURIComponent(query);
      const completion = await openai.generateChatResponse(decodedQuery)
      console.log(completion)
      res.json({ response: completion});
    } catch (error) {
      console.error("Error generating chat response:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.use("/student", studentRoutes);
app.use("/tutor", tutorRoutes);
app.use("/course", courseRoutes);
app.use("/blog", blogRoutes);
app.use("/discussion", discussionRoutes);
app.use("/chapter", chapterRoutes);
app.use("/", queryRoutes);
app.use("/category", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
