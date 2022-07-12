const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load menu Model
const Menu = require("../../modules/Menu");

router.post('/allmenus', async (req,res) => {
    console.log(567);
    const menus = await Menu.find({});
    // let result = await Menu.findOne({key : 1});
    const result = await getallmenus(1);
    res.json(result);
});

router.post("/insertmenu",async (req,res) => {
    const {title,alias,type,parent,status,date} = req.body;
    let menu = new Menu({
        title : title,
        alias : alias,
        type : type,
        parent : parent,
        status : status,
        date : date
    });

    const result = await menu.save();
    res.json(result)
})

const getallmenus = async (_Id) => {
    let currentmenus = await Menu.findOne({key : _Id});
    let submenus = await Menu.find({parent : _Id});
    let total = {key : ""+currentmenus.key,label : currentmenus.title,path : currentmenus.path,parent : currentmenus.parent};
    // console.log(total);
    if (submenus.length == 0) {
        return total;
    }
    total['children'] = [];
    for (let i = 0; i < submenus.length; i++) {

        let child_id = submenus[i].key;
        let result = await getallmenus(child_id);
        total['children'].push(result);
    }
    return total;
}

module.exports = router;