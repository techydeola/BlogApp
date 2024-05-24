const express = require('express');
const { blogCreate_get, allPost_get, blogCreate_post } = require('../controller/blogController');
const { requireAuth } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware');

// use express router
const router = express.Router();

// get request router
router.get('/create', requireAuth, blogCreate_get);
router.get('/all-post', allPost_get);

// post request router
router.post('/create', upload.single('image'), blogCreate_post);

module.exports = router
