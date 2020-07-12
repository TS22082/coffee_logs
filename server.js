const express = require("express");
const session = require("express-session");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client"));

app.secret(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
