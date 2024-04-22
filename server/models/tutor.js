const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String
});

const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
