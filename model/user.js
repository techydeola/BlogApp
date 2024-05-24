const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// user Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lastName: {
    type: String,
    require: [true, 'Please enter your last name']
  },
  email: {
    type: String,
    required: [true, 'please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'please enter a password'],
    minlength: [6, 'minimum of 6 characters']
  }
});

// hooks
userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// user authentication
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
}

// model
const User = mongoose.model('user', userSchema);

module.exports = {
  User
}
