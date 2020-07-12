const express = require("express");
const session = require("express-session");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const passport = require("./config/passport.js");
const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client"));

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 36 * 100000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

const logRoutes = require("./routes/log-routes.js");
const authRoutes = require("./routes/auth-routes.js");
const clientRoutes = require("./routes/client-routes.js");

app.use(logRoutes, authRoutes, clientRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));
});
