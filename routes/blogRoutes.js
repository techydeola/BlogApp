const express = require('express');
const { blog_post } = require('../controller/blogController');

// use express router
const router = express.Router();

// blog post router
router.post('/create', blog_post);

module.exports = router
