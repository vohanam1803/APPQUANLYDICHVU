var express = require("express");
var UserService = require("./../services/userService");
var User = require("./../model/user");
const { user } = require("../database/database");

var router = express.Router();
////////Biến cục bộ////////

/////////Chức năng////////
router.get("/", function (req, res) {
  res.render('dangnhap');
});
//API login
router.post("/enteruser", async function (req, res) {
  var userService = new UserService();
  console.log(req.body)
  var pro = new User();
  pro.email = req.body.email;
  pro.password = req.body.password;
  // console.log(pro.email);
  const result = await userService.Loginuser(pro);
  if (result === 1) {
    res.json({ "Message": "Tài khoản không tồn tại!!" });
  }
  else {

    if (result === 2) {
      res.json({ "Message": "Login Success!!" });
    } else {
      res.json({ "Message": "Login Failed!!" });
    }
  }
});
//API đăng ký
// router.post("/signup", async function (req, res) {
//   var userService = new UserService();
//   console.log(req.body)
//   var pro = new User();
//   pro.email = req.body.email;
//   pro.password = req.body.password;
//   pro.role = req.body.role;
//   pro.us_name = req.body.us_name;
//   console.log(pro);
//   const asc = await userService.Signupuser(pro);
//   console.log(asc)
//   if (asc === 2) {
//     res.json({ "Message": "Account already exists !!" });
//   }
//   else {

//     res.json({ "Message": "Success SignUp !!" });
//   }

// });
module.exports = router;

