const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("./keys");
const User = require("../models/user-model");

passport.use(
  new FacebookStrategy(
    {
      // options for google strategy
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: "/auth/facebook/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("This fires the passport callback fucntion");
    }
  )
);
