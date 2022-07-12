const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    key : {
        type : Number,
        required : true
    },
    menu_id : {
        type : Number,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    img : {
        type : String,
    },
    status : {
        type : Number,
        required : true
    }
})

module.exports = Articles = mongoose.model('articles', ArticleSchema);
