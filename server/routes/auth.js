const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

//app config
const router = express.Router();
const User = mongoose.model("User");
//middleware
const requireLogin = require("../middleware/requireLogin");

//signup route
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // console.log(`name is: ${name} \nemail:${email} `);
  if (!email || !name || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }

  //finding is there any existing user with this email
  User.findOne({ email: email })
    .then((userExist) => {
      //condition if user exist then show an error
      if (userExist) {
        return res
          .status(422)
          .json({ error: "user with that name already exist" });
      }
      //encrypting password
      bcrypt.hash(password, 12).then((hashedpassword) => {
        //if user dont exist then put the user in the model and save
        const user = new User({
          email: email,
          name: name,
          password: hashedpassword,
        });

        //saving user
        user
          .save()
          .then((user) => {
            //callback function after saving an user
            res.json({ message: "saved successfuly" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//signin route
router.post("/signin", (req, res) => {
  // destructuring email and password from user for further varification
  const { email, password } = req.body;

  //varifying is there any input or not
  if (!email || !password) {
    return res.status(400).json({ error: "please add email and password" });
  }
  // if the there is a proper input then this part execute
  //finding there is any user using this email or not
  User.findOne({ email: email }).then((savedUser) => {
    //if there is no user using this name then send a response with an error message
    if (!savedUser) {
      res.status(422).json({ error: "invalid email and passweord" });
    }
    //if the user exist then this part of code execute
    //if the user exist then comparing the users password using bcrypt for the password validation
    //else
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        //if password matches then return a json web token for further validation
        if (doMatch) {
          // res.json({ message: "successfuly signedin" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { name, _id, email } = savedUser;
          res.json({ token: token, user: { _id, name, email } });
        } else {
          return res.status(422).json({ error: "invalid email and password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
module.exports = router;
