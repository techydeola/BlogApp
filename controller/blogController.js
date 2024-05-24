const { Blog } = require('../model/blog');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');


// error handler
handleError = (err) => {
  let errors = { title: '', snippet: '', content: '' };

  // duplicate title error handler
  if (err.code === 11000) {
    errors.title = 'title already exist';
    return errors;
  }
}

// create blog get handler
const blogCreate_get = (req, res) => {
  res.status(200).render('create');
}

// create blog post handler
const blogCreate_post = async (req, res) => {
  const { title, snippet, content } = req.body;
  const image = {
    data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
    contentType: mime.lookup(req.file.filename)
  }
  const token = req.cookies.jwt;
  let author = null

  jwt.verify(token, 'deola blog secret', async (err, decodedToken) => {
    if (err) {
      console.log(err);
    }
    author = decodedToken.id;
  })

  try {
    const blog = await Blog.create({ title, snippet, content, author, image });
    res.status(200).json({ blog: true });
  }
  catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
}

// get all post
const allPost_get = (req, res) => {
  res.status(200).render('home');
}

module.exports = {
  blogCreate_get,
  allPost_get,
  blogCreate_post
}