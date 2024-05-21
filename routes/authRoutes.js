const express = require('express');
const { signup_get, login_get } = require('../controller/authController');

// use express router
const router = express.Router();


// signup router
router.get('/signup', signup_get);

// login router
router.get('/login', login_get);

module.exports = router;
