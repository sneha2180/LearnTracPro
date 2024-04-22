const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    courseId:String,
    title: String,
    content: String
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
