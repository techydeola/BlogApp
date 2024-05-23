const express = require('express');
const { signup_get, login_get, signup_post, login_post, logout_get } = require('../controller/authController');

// use express router
const router = express.Router();


// signup router for GET request
router.get('/signup', signup_get);

// login router for GET request
router.get('/login', login_get);

// signup router for POST request
router.post('/signup', signup_post);

// login router for POST request
router.post('/login', login_post);

// logout
router.get('/logout', logout_get);

module.exports = router;
