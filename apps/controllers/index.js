var express = require('express');
var router = express.Router();

const { ObjectId } = require("mongodb");

//Router change for page home
router.use('/home', require(__dirname + '/home'));
//Router change for page login 
router.use('/login', require(__dirname + '/dangnhap'));
///Product
router.use('/product', require(__dirname + '/productController'));
///Home
router.use('/home', require(__dirname + '/home'));
///Order
router.use('/Order', require(__dirname + '/order'));
///Food
router.use('/food', require(__dirname + '/food'));
//Giao dien chinh
router.get('/', function (req, res) {
  res.render("dangnhap");
});

module.exports = router;