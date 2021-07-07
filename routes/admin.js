const express = require("express"),
  {
    NotExtended: NotExtended
  } = require("http-errors"),
  router = express.Router();

router.all("*", (req, res, next) => {
    req.session.admin ? next() : res.redirect("login")
  }),

  router.get("/", (req, res) => {
    console.log(req.session.admin), res.render("admin", {
      title: "Admin"
    })
  }),

  module.exports = router;