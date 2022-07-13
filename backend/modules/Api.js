const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApiSchema = new Schema({
  id : {
    type : Number,
    required : true
  },
  token : {
    type : String,
    required : true
  },
  instance : {
    type : String,
    required : true
  },
  phone : {
    type : String,
    required : true
  }
});

module.exports = Api = mongoose.model('apis', ApiSchema);