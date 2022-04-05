const express = require("express");
const googlelogin = new express();
const bodyParser = require("body-parser");
googlelogin.use(bodyParser.urlencoded({ extended: false }));
googlelogin.use(bodyParser.json());
const signup = require("../models/studentschema");
const { isNotEmpty } = require("../views/signup");
const { assigntoken } = require("../views/jwt");

const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
googlelogin.use(cors());

const client = new OAuth2Client(process.env.CLIENT_ID);

googlelogin.post("/", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture, password } = ticket.getPayload();
  const obj = { name, email };
  console.log(obj);

  signup
    .find({ email: obj.email }, (err, data) => {
      if (err) {
        reject(err);
      }

      if (isNotEmpty(data)) {
        console.log("The user is succesfully logged in");
        assigntoken(obj.name, obj.email);
        res.json({
          status: "Ok",
        });
      } else {
        console.log("Some information about the user is still pending");
        res.json({
          body: {
            name: obj.name,
            email: obj.email,
            password: "google-password",
          },
          status: "Not Ok",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = googlelogin;
