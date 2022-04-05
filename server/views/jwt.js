const express = require("express");
const jwt = require("jsonwebtoken");
var token;
function assigntoken(name, email) {
  let obj = { name, email, student: true, admin: false, faculty: false };
  jwt.sign(obj, "teampragatisecret", { expiresIn: "1h" }, (err, data) => {
    if (err) {
      console.log(err);
    }

    console.log(data);
    token = data;
    console.log("The token is assigned to the user");
  });
  console.log("The jsonwebtoken is going to be assigned to the user");
}

module.exports = { assigntoken, token };
