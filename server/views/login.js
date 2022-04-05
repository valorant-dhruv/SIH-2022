const express = require("express");
const loginRouter = new express();
const bodyParser = require("body-parser");
const cors = require("cors");

loginRouter.use(bodyParser.urlencoded({ extended: false }));
loginRouter.use(bodyParser.json());

loginRouter.use(express.json());

loginRouter.post("/login", (req, res) => {
  let { email, password } = req.body;
  console.log(email);
  console.log(password);
});

module.exports = loginRouter;
