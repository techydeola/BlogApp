const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

// blog Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title cannot be blank'],
    unique: [true, 'title already exist']
  },
  title: {
    type: String,
    required: [true, 'snippet cannot be blank'],
  },
  content: {
    type: String,
    required: true
  },
  blogID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);

module.exports = {
  Blog
}
