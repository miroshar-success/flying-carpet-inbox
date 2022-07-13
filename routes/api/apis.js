const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const APIs = require("../../modules/Api");


router.get("/getAPI",async (req,res) => {
    const result = await APIs.find({});
    res.json(result);
})

router.post("/insertAPI",async (req,res) => {
    const cnt = await APIs.find({}).count();
    const newAPI = new APIs({
        id : cnt + 1,
        token : req.body.token,
        instance : req.body.instance
    });
    const result = newAPI.save();
    res.json(result);
})

router.post("/updateAPI",async (req,res) => {
    const {_Id,token,instance} = req.body;
    const result = await APIs.findOneAndUpdate({id : _Id},{$set : {token : token, instance : instance}});
    res.json(result)
})

module.exports = router;
