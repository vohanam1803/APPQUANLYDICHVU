const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class foodService {
	databaseConnection = require('./../database/database');
	order = require('./../model/loaimonan');
	food = require('./../model/monan');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("LoaiMonAn");
		this.productCollection2 = this.productDatabase.collection("MonAn");
	}
	async getFood() {
		const cursor = await this.productCollection2.find({}, {}).skip(0).limit(100);
		return await cursor.toArray();
	}
	async insertFood(food) {
		const a = await this.productCollection2.findOne({
			"NameFood": food.NameFood
		}, {});
		if (a == "" || a == null) {
			return await this.productCollection2.insertOne(food);
		}
		else {
			return 2;
		}
	}
	async deleteFood(id) {
		return await this.productCollection2.deleteOne({
			"_id": new ObjectId(id)
		});
	}
}
module.exports = foodService;