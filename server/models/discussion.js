const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  createdAt:  Date,
  updatedAt:Date,
  comments: [{
    userId: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
