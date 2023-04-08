var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var CategoryFood = require("./../model/loaimonan");
var OrderService = require("./../services/orderservice");
var Food = require("./../model/monan");
var FService = require("./../services/foodService");

var saveS = require("./../services/savefoodService");
var statusS = require("./../services/statusService");
router.get("/", async function (req, res) {
	// var orderservice = new OrderService();
	// var order = await orderservice.getOrder();
	// res.json(order);
	res.render('order')
});
var hientai = "";
router.post("/getNumberTable", async function (req, res) {
	var SoBan = req.body.SoBan;
	hientai = SoBan;
	res.json({ "SoBan": SoBan })
});
router.get("/dataTable", function (req, res) {
	res.json({ "NameTableNow": hientai });
});
router.get("/getDanhMucFood", async function (req, res) {
	var orderservice = new OrderService();
	var order = await orderservice.getOrder();
	res.json(order);
});
router.get("/getAllFOOD", async function (req, res) {
	var fService = new FService();
	var order = await fService.getFood();
	res.json(order);
});
var getDanhMuc;
router.post("/getCLickDanhMuc", async function (req, res) {
	// var NameFood = req.body.NameFood;
	// console.log(NameFood)
	var fService = new FService();
	var order = await fService.findFood(req.body.NameFood);
	getDanhMuc = order;
	console.log("KetQua:" + order)
	res.json(order);
});
router.get("/getGetDanhMuc", async function (req, res) {
	res.json(getDanhMuc);
});

router.post("/CheckOutBill", async function (req, res) {
	var SoBan = req.body.Soban;
	var BanPhu = req.body.Soban2;
	console.log(SoBan)
	console.log(BanPhu)
	var saveSe = new saveS();
	var staSe = new statusS();
	var deSta = await staSe.deleteOutBill(BanPhu);
	var deSave = await saveSe.deleteOutBill(SoBan);

	res.json({ "Message": "True" });
});

router.post("/insert-Food", async function (req, res) {
	if (req.body.NameFood == "" || req.body.Price == "" || req.body.NameFood == null || req.body.Price == null) {
		res.json({ status: false, message: "Missing data NameFood / DateAdd / Price!!" });
	}
	else {
		var orderservice = new OrderService();
		var pro = new CategoryFood();
		pro.NameFood = req.body.NameFood;
		pro.DateAdd = req.body.DateAdd;
		pro.Price = req.body.Price;
		const result = await orderservice.insertFood(pro);
		if (result === 2) {
			res.json({ status: false, message: "Already exist!!" });
		}
		else {
			res.json({ status: true, message: "Insert Success!!" });
		}

	}

});
router.delete("/delete-Food", async function (req, res) {
	if (req.body.id == "" || req.body.id == null) {
		res.json({ status: false, message: "Missing data id!!" });
	}
	else {
		var orderservice = new OrderService();
		await orderservice.deleteFood(req.body.id);
		res.json({ status: true, message: "Delete Success!!" });
	}
});
router.post("/update-Food", async function (req, res) {
	if (req.body.id == "" || req.body.id == null || req.body.NameFood == "" || req.body.NameFood == null || req.body.Price == "" || req.body.Price == null) {
		res.json({ status: false, message: "Missing data id / NameFood / Price!!" });
	}
	else {
		var orderservice = new OrderService();
		var pro = new CategoryFood();
		pro._id = new ObjectId(req.body.id);
		pro.NameFood = req.body.NameFood;
		pro.DateAdd = req.body.DateAdd;
		pro.Price = req.body.Price;
		const result = await orderservice.updateFood(pro);
		if (result === 2) {
			res.json({ status: false, message: "Already exist!!" });
		}
		else {
			res.json({ status: true, message: "Update Success!!" });
		}
	}
});
router.post("/find-Food", async function (req, res) {
	if (req.body.NameFood == "" || req.body.NameFood == null) {
		res.json({ status: false, message: "Missing data NameFood!!" });
	}
	else {
		var orderservice = new OrderService();
		var product = await orderservice.findFood(req.body.NameFood);
		if (product == "" || product == null) {
			res.json({ status: false, message: "Can't Not Find This Food!!" });
		}
		else {
			res.json(product);
		}
	}
});
module.exports = router;