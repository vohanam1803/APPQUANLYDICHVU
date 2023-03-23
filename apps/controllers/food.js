var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var CategoryFood = require("./../model/loaimonan");
var Food = require("./../model/monan");
var OrderService = require("./../services/orderservice");
var foodService = require("./../services/foodService");
router.get("/", async function (req, res) {
	var foodservice = new foodService();
	var order = await foodservice.getFood();
	res.json(order);
});

router.post("/insertOneFood", async function (req, res) {
	if (req.body.CategoryFood == "" || req.body.NameFood == "" || req.body.NameFood == null || req.body.CategoryFood == null) {
		res.json({ status: false, message: "Missing data CategoryFood / NameFood!!" });
	}
	else {
		var foodservice = new foodService();
		var pro = new Food();
		pro.CategoryFood = req.body.CategoryFood;
		pro.NameFood = req.body.NameFood;
		pro.Price = req.body.Price;
		pro.Image = req.body.Image;
		const result = await foodservice.insertFood(pro);
		if (result === 2) {
			res.json({ status: false, message: "Already exist!!" });
		}
		else {
			res.json({ status: true, message: "Insert Success!!" });
		}

	}
});
router.delete("/deleteOneFood", async function (req, res) {
	if (req.body.id == "" || req.body.id == null) {
		res.json({ status: false, message: "Missing data id!!" });
	}
	else {
		var foodservice = new foodService();
		await foodservice.deleteFood(req.body.id);
		res.json({ status: true, message: "Delete Success!!" });
	}
});
module.exports = router;