const { User } = require('../model/user');
const jwt = require('jsonwebtoken');

// handle error
handleError = (err) => {
  let errors = { email: '', password: '' };

  // login error handler
  if (err.message === 'incorrect email') {
    errors.email = 'email does not exixst';
  }
  if (err.message === 'incorrect password') {
    errors.password = 'password is incorrect';
  }

  // duplicate email error handler
  if (err.code === 11000) {
    errors.email = 'email already exist';
    return errors;
  }

  // field validator error handler
  if (err.message.includes('user validation failed')) {
    (Object.values(err.errors)).forEach(({properties}) => {
      errors[properties.path] = properties.message; 
    });
  }
  return errors;
}

// create web token
const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
  return jwt.sign({ id }, 'deola blog secret', {
    expiresIn: maxAge
  });
}

// signup controller handler for GET request
const signup_get = (req, res) => {
  res.render('signup')
}

// login controller handler for GET request
const login_get = (req, res) => {
  res.render('login');
}

// signup controller handler for POST request
const signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  }
  catch(err) {
    const errors = handleError(err);
    res.status(401).json({ errors });
  }
}

// login controller handler for POST request
const login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  }
  catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
}

// logout handler
const logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.cookie('is_loggedIn', '', { maxAge: 1 });
  res.redirect('/');
}

// export functions
module.exports = {
  signup_get,
  login_get,
  signup_post,
  login_post,
  logout_get
}
