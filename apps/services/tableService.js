const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class TableService {
	databaseConnection = require('./../database/database');
	table = require('./../model/table');
	status = require('./../model/StatusTable');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("Ban");
		this.productCollection2 = this.productDatabase.collection("StatusTable");
	}
	async getAllTable() {
		const cursor = await this.productCollection.find({}, {}).skip(0).limit(100);
		return await cursor.toArray();
	}
	async insertTable(table) {
		const a = await this.productCollection.findOne({
			"NameTable": table.NameTable
		}, {});
		if (a == "" || a == null) {
			return await this.productCollection.insertOne(table);
		}
		else {
			return 2;
		}
	}
	async deleteTable(id) {
		return await this.productCollection.deleteOne({
			"_id": new ObjectId(id)
		});
	}
	async getCheck() {
		const cursor = await this.productCollection2.find({}, {}).skip(0).limit(100);
		return await cursor.toArray();
	}


}
module.exports = TableService;