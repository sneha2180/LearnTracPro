const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/students/studentRoutes');
const chapterRoutes = require('./routes/chapters/chapterRoutes');
const tutorRoutes = require('./routes/tutors/tutorRoutes');
const courseRoutes = require('./routes/courses/courseRoutes');
const categoryRoutes = require('./routes/categories/categoryRoutes');
const queryRoutes = require('./routes/query/queryRoutes');
const blogRoutes = require('./routes/blogs/blogRoutes');
const discussionRoutes = require('./routes/discussions/discussionRoutes');
const app = express();
app.use(express.json());

const uri = "mongodb+srv://sandraantony2002:3kBDgrGjlSZ1eYMW@learntracpro.mspmwz0.mongodb.net/?retryWrites=true&w=majority&appName=learntracpro";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.use('/student', studentRoutes);
app.use('/tutor', tutorRoutes);
app.use('/course', courseRoutes);
app.use('/blog', blogRoutes);
app.use('/discussion', discussionRoutes);
app.use('/', chapterRoutes);
app.use('/', queryRoutes);
app.use('/category', categoryRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
