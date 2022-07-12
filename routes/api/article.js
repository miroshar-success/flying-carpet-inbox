const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//load article
const Articles = require("../../modules/Article");

router.post("/insertarticle",async (req,res) => {
    const {menu_id,content} = req.body;
    const key = (await Articles.find({})).length  + 1;
    const newArticle = new Articles({
        key : key,
        menu_id : menu_id,
        content : content,
        status : 1
    });
    const newone = await newArticle.save();
    res.json(newone);
})

router.post("/getarticles",async (req,res) => {
    const {menu_id} = req.body;
    const articles = await Articles.findOne({menu_id : menu_id});
    res.json(articles);
})

module.exports = router;