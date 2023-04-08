const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class savefoodService {
	databaseConnection = require('./../database/database');
	save = require('./../model/savefood');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("SaveFood");

	}
	async InsertInfo(save) {
		return await this.productCollection.insertOne(save);
	}
	async getFoodTable(NumberTable) {
		const query = { NumberTable: NumberTable };
		const cursor = await this.productCollection.find(query).toArray();
		return cursor;
	}
	async getInfo(NumberTable) {
		const query = { NumberTable: NumberTable };
		const cursor = await this.productCollection.find(query).toArray();
		return cursor;
	}
	async deleteOutBill(Soban) {
		return await this.productCollection.deleteMany({
			"NumberTable": Soban
		});
	}

}
module.exports = savefoodService;