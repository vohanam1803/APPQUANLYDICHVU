var express = require("express");
var router = express.Router();

//-----------------Chuc Nang-----------------//
router.get("/", function (req, res) {
  res.render("home");
});

module.exports = router;

