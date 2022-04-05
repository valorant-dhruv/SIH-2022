const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const signUp = require("../models/studentschema");
const signup = new express();
const handlingerror = require("./errors");
var hashedpassword;

signup.use(cors());
signup.use(bodyParser.urlencoded({ extended: false }));
signup.use(bodyParser.json());

const { assigntoken } = require("./jwt");

//How hashing works is that lets say we have a password dhruv
//Now we also have a salt which is a random text everytime
//Now based on the combinatio of the salt and the password a hash is generated
//The hash for every password is different even if two passwords are exactly same their hashes will be different bcoz of different salts
const hashing = async (password, addingData) => {
  //The size of the salt is 7
  //If you increase the salt size it becomes more and more difficult to decode the hash
  await bcrypt.genSalt(7, (err, result) => {
    if (err) {
      console.log(err);
    }

    bcrypt.hash(password, result, (err, data) => {
      console.log(data);
      hashedpassword = data;
      addingData();
    });
  });
};

const isNotEmpty = (arr) => {
  if (arr[0]) {
    return true;
  }

  return false;
};

signup.post("/signup", async (req, res) => {
  let data = await console.log(req.body);

  function addingData() {
    console.log("The data is ready to be added");
    signUp
      .create({
        Name: req.body.Name,
        email: req.body.email,
        password: hashedpassword,
        Institute: req.body.Institute,
        Phone_number: req.body.Phone_number,
        Domains_of_interest: req.body.Domains_of_interest,
      })
      .then(assigntoken(req.body.name, req.body.email))
      .catch((err) => {
        console.log("An error is detected");
        let str = handlingerror(err);
        console.log(str);
        res.json({
          error: str,
        });
      });
    console.log("The data is added");
  }

  //Before we hash the password and save the complete data in our database lets first check the validity of the data
  //The mongoose find is also an async function and thus it offloads the task while the rest of the tasks are executed
  new Promise((resolve, reject) => {
    signUp.find({ email: req.body.email }, (err, data) => {
      if (err) {
        reject(err);
      }
      console.log("The line 4 is executed");
      console.log(data);
      if (isNotEmpty(data)) {
        reject("The email id is already registered please try logging in");
      }
      resolve(data);
    });
  })
    .then(() => {
      console.log("Hashing has started");
      hashing(req.body.password, addingData);
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

module.exports = { signup, isNotEmpty };
