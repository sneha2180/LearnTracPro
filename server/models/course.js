const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description:String,
    instructor:String,
    duration:Number,
    category:String,
    level:String,
    prerequisites:[String],
    chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
    queries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Query' }],
    resources:[String],
    image: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
