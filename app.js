const express = require("express");
const app = express();
const mongoose = require("mongoose");
const keys = require("./config/keys");
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const passport = require("passport");

//view engine
app.set("view engine", "ejs");

//Initial passport
app.use(passport.initialize());
app.use(passport.session());

//connect to db
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("Successfully connected to the Mongodb database");
});

//routes
app.use("/auth", authRoutes);

//route for home page
app.get("/", (req, res) => {
  res.render("home");
});

PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening to the port : ", PORT);
});
