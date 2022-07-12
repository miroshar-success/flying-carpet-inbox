const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const MenuSchema = new Schema({
    key: {
      type: Number,
    },
    title : {
        type : String,
        required : true,
    },
    alias : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    parent : {
        type : Number,
        required : true,
    },
    status : {
        type : Number,
        required : true,
    },
    date : {
        type : Date,
    }
  });
  
  module.exports = Menu = mongoose.model('menus', MenuSchema);