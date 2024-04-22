const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    courseId:String,
    name:String,
    content:String
})

const Query = mongoose.model('Query',querySchema);

module.exports = Query;