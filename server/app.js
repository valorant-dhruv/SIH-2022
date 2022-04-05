const express = require("express");

const googleloginrouter = require("./views/googlelogin");
const loginRouter = require("./views/login");
const { signup } = require("./views/signup");
const csv = require("csv");
var axios = require("axios").default;
const cors = require("cors");
const app = express();
app.use("/api/student", signup);
app.use("/api/v1/auth/google", googleloginrouter);
app.use("/api/student", loginRouter);

app.use(cors());
var colleges;

const fs = require("fs");
const { checkServerIdentity } = require("tls");

fs.readFile("./database.csv", (err, data) => {
  csv.parse(data, function (err, data) {
    colleges = data;
    // console.log(colleges);
  });
});
var options = {
  method: "GET",
  url: "https://university-college-list-and-rankings.p.rapidapi.com/api/test",
  headers: {
    "x-rapidapi-host": "university-college-list-and-rankings.p.rapidapi.com",
    "x-rapidapi-key": "bc6caecafemsh2a57363dd75a054p11cb44jsned389662efb0",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/clg", (req, res) => {
  res.json(colleges);
});

module.exports = app;
