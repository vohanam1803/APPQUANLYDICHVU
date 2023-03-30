const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class listbuffetService {
	databaseConnection = require('./../database/database');
	list = require('./../model/TicketBuffet');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("Buffet");
	}
	async getTicket() {
		const cursor = await this.productCollection.find({}, {}).skip(0).limit(100);
		return await cursor.toArray();
	}
}
module.exports = listbuffetService;