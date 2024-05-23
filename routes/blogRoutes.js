const express = require('express');
const { blogCreate_get, allPost_get } = require('../controller/blogController');
const { requireAuth } = require('../middleware/authMiddleware')

// use express router
const router = express.Router();

// create blog post router
router.get('/create', requireAuth, blogCreate_get);

// all blog post
router.get('/all-post', allPost_get);

module.exports = router
