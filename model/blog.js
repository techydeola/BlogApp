const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

// blog Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'field cannot be blank'],
    unique: [true, 'title already exist']
  },
  snippet: {
    type: String,
    required: [true, 'field cannot be blank'],
  },
  content: {
    type: String,
    required: [true, 'field cannot be blank']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  image: {
    data: Buffer,
    contentType: String,
  }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);

module.exports = {
  Blog
}
