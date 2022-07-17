const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load user modal
const User = require("../../modules/User");

// @route   GET api/users/test
// @desc    Tests user route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "Users works!!" }));

// @route   POST api/users/register
// @desc    Register route
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        rating: "pg", // picture rating
        default: "mm" // Default
      });
      let level = 2;
      if (req.body.email == "ofirfishler@gmail.com") {
        console.log(req.body.email,"hi");
        level = 0;
      }

      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        avatar,
        password: req.body.password,
        level : level
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.warn(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User/ Return JWT
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(401).json({message: 'Username or password is incorrect'});
  }

  const email = req.body.email;
  const password = req.body.password;
  console.log("login");
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(401).json({'message': 'Username not allowed'});
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payLoad = { id: user.id, fullname: user.fullname, avatar: user.avatar }; // Create JWT payload

        // Sign Token
        jwt.sign(
          payLoad,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            const payUser = {
              id : 1,
              email : user.email,
              username : user.fullname,
              password : user.password,
              firstName : user.fullname,
              lastName : "Test",
              role : user.level == 2 ? "User" : "Admin",
              token : "Bear " + token,
              avatar : user.avatar
            }
            res.json(payUser);
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(401).json({'message': "Password incorrect"});
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

router.post("/users",async (req,res) => {
  const result = await User.find({level : {$gt : "0"}});
  res.json(result);
})

router.post("/level",async(req,res) => {
  const {level,email} = req.body;
  console.log(req.body);
  const update = await User.findOneAndUpdate({email : email},{$set : {level : level}});
  const result = await User.find({level : {$gt : "0"}});
  res.json(result);
})

router.post("/resetprofile",async(req,res) => {
  const temp = req.body;
  console.log(temp);
  const total = {fullname : temp.fullname,email : temp.email,password : temp.password1};
  const {password2} = temp;
  const { errors, isValid } = validateRegisterInput(total);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {email,fullname,password1,filedata} = temp;
  const user = await User.findOne({ email : email});
  if (!user) {
    errors.email = "User not found";
    return res.status(401).json({'message': 'Username not allowed'});
  }

  // Check Password
  const isMatch = await bcrypt.compare(password1, user.password);
  if (isMatch) {
    // User Matched
    const payLoad = { id: user.id, fullname: fullname, avatar: user.avatar }; // Create JWT payload
    const avatar = gravatar.url(email, {
      s: "200", // Size
      rating: "pg", // picture rating
      default: "mm" // Default
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password2, salt, (err, hash) => {
        if (err) throw err;
        user.email = email;
        user.fullname = fullname;
        user.password = hash;
        user.avatar = filedata;
        user.save()
          .then(item => res.json({"message" : "Success"}))
          .catch(err => console.warn(err));
      });
    });
    // Sign Token
  } else {
    errors.password = "Password incorrect";
    return res.status(401).json({'message': "Password incorrect"});
  }
})

router.post("/deleteusers",async (req,res) => {
  const {email} = req.body;
  const del = await User.findOneAndDelete({email});
  const result = await User.find({level : {$gt : "0"}});
  res.json(result);
})

router.post("/updateinstances",async (req,res) => {
  const {instances,email} = req.body;
  const total = instances.map(instance => instance.value);
  const up = await User.findOneAndUpdate({email},{$set : {instances : total}});
  const result = await User.find({level : {$gt : "0"}});
  res.json(result);
})

router.post("/adduser",async (req,res) => {
  const errors = {};
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    errors.email = "Email already exists";
    return res.status(400).json(errors);
  } else {
    const avatar = gravatar.url(req.body.email, {
      s: "200", // Size
      rating: "pg", // picture rating
      default: "mm" // Default
    });
    let level = 2;

    const newUser = new User({
      fullname: "",
      email: req.body.email,
      avatar,
      password: req.body.password,
      level : level
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        const save = await newUser.save();
        const result = await User.find({level : {$gt : "0"}});
        res.json(result);
      });
    });
  }
})
module.exports = router;
