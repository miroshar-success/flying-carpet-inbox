const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true
  }
  ,password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  },
  level : {
    type : String,
  },
  instances : {
    type  : Array
  }
});

module.exports = User = mongoose.model('users', UserSchema);