const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class OrderService {
	databaseConnection = require('./../database/database');
	order = require('./../model/loaimonan');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("LoaiMonAn");
	}
	async getOrder() {
		const cursor = await this.productCollection.find({}, {}).skip(0).limit(100);
		return await cursor.toArray();
	}
	async insertFood(order) {
		const a = await this.productCollection.findOne({
			"NameFood": order.NameFood
		}, {});
		if (a == "" || a == null) {
			return await this.productCollection.insertOne(order);
		}
		else {
			return 2;
		}
	}
	async deleteFood(id) {
		return await this.productCollection.deleteOne({
			"_id": new ObjectId(id)
		});
	}
	async updateFood(order) {
		const a = await this.productCollection.findOne({
			"NameFood": order.NameFood
		}, {});
		if (a == "" || a == null) {
			return await this.productCollection.updateOne({
				"_id": new
					ObjectId(order._id)
			}, { $set: order });
		}
		else {
			return 2;
		}

	}
	async findFood(NameFood) {
		return await this.productCollection.findOne({
			"NameFood": NameFood
		}, {});
	}
}
module.exports = OrderService;