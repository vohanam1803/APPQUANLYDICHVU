var express = require("express");
var UserService = require("./../services/userService");
var User = require("./../model/user");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("dangnhap");
});

router.post("/enteruser", async function (req, res) {
  var userService = new UserService();
  var pro = new User();
  pro.email = req.body.email;
  pro.password = req.body.password;
  // console.log(pro.email);
  const result = await userService.Loginuser(pro);
  if (result === 1) {
    res.json({ "Message": "Tai khoan khong ton tai!!" });
  }
  else {

    if (result === 2) {
      res.json({ "Message": "Login Success!!" });
    } else {
      res.json({ "Message": "Login Failed!!" });
    }
  }

});
module.exports = router;

