const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    enrolledCourses:[String]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
