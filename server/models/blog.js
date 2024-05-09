const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content:String,
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  image:String
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;