const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const axios = require("axios");

const APIs = require("../../modules/Api");


router.get("/getAPI",async (req,res) => {
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
    console.log(cnt,_ID);
    const {token,instance} = req.body;
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
        phone : phone
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
