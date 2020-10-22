const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", (req, res) => {
  res.render("login");
});

//auth facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["profile"],
  })
);

//fb redirect
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    res.send("We reached the URI");
  }
);
module.exports = router;
