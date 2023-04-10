const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class statusService {
	databaseConnection = require('./../database/database');
	status = require('./../model/StatusTable');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("StatusTable");
	}
	a
	async insertInfo(status) {
		const a = await this.productCollection.findOne({
			"NameTable": status.NameTable
		}, {});
		if (a == "" || a == null) {
			return await this.productCollection.insertOne(status);
		}
		else {
			return 2;
		}
	}
	async deleteOutBill(BanPhu) {
		return await this.productCollection.deleteMany({
			"NameTable": BanPhu
		});
	}
}
module.exports = statusService;