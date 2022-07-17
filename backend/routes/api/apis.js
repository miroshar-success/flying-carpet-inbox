const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const axios = require("axios");

const APIs = require("../../modules/Api");
const User = require("../../modules/User");



router.post("/getAPI",async (req,res) => {
    const {email} = req.body;
    
    if (email == "" || email == undefined) {
        const result = await APIs.find({});
        return res.json([]);
    }
    const user = await User.findOne({email});
    const instances = user.instances;
    const level = user.level;
    if (level == 0) {
        const result = await APIs.find({});
        return res.json(result);
    }
    const result = await APIs.find({instance : {$in : instances}});
    res.json(result);
})

router.get("/getAllAPI",async (req,res) => {
    const result = await APIs.find({});
    res.json(result);
})

router.post("/insertAPI",async (req,res) => {
    const cnt = await APIs.aggregate([
        {
          $group:
            {
              _id: "_id",
              maxQ: { $max: "$id" }
            }
        }
      ] );
    const _ID = cnt[0]['maxQ'] + 1;
    const {token,instance,name} = req.body;
    let fetchdata;
    let phone = "";
    try{
        fetchdata = await axios.get(`https://api.chat-api.com/instance${instance}/me?token=${token}`);
        phone = fetchdata.data.phone;
    }catch{
       return res.json({message : "not correct"});
    }
    if(phone == null || phone == undefined || phone == ''){
        return res.json({message : "not correct"});
    }
    const newAPI = new APIs({
        id : _ID,
        token : req.body.token,
        instance : req.body.instance,
        phone : phone,
        name : name
    });
    const save = await newAPI.save();
    const result = await APIs.find({});
    res.json(result);
})

router.post("/updateAPI",async (req,res) => {
    const {_Id,token,instance} = req.body;
    let fetchdata;
    try{
        fetchdata = await axios.get(`https://api.chat-api.com/instance${instance}/me?token=${token}`);
    }catch{
       return res.json({message : "not correct"});
    }
    const phone = fetchdata.data.phone;
    const update = await APIs.findOneAndUpdate({id : _Id},{$set : {token : token, instance : instance,phone:phone}});
    const result = await APIs.find({});
    res.json(result);
})

router.post("/deleteAPI",async (req,res) => {
    const {_Id} = req.body;
    const deleteToken = await APIs.findOneAndDelete({id : _Id});
    const result = await APIs.find({});
    res.json(result);
})

module.exports = router;
