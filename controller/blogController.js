// create blog get handler
const blogCreate_get = (req, res) => {
  res.send('create your blog');
}

// get all post
const allPost_get = (req, res) => {
  res.status(200).render('home');
}

module.exports = {
  blogCreate_get,
  allPost_get
}