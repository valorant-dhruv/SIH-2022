//In the server.js we are listening the server on the specific port

//The express is both a function as well as on object
const express = require("express");

const mongoose = require("mongoose");

//The environment variables by default are stored in process.env object file in the node js
//However we can also store them in a seperate config.env file and the dotenv is an npm package which transfers these env variables from
//the file to the process.env object
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.MONGODB_ATLAS;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("There is some error");
    console.log(err);
  });
//We are getting an server object on calling the express function()
const server = express();

const app = require("./app");

//app is a middleware function which is included here
server.use(app);

server.listen(process.env.PORT, () => {
  console.log("The server is listening");
});
