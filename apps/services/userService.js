const { json } = require('body-parser');
const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class UserService {
	databaseConnection = require('./../database/database');
	user = require('./../model/user');
	client;
	productDatabase;
	productCollection;
	constructor() {
		this.client = this.databaseConnection.getMongoClient();
		this.productDatabase = this.client.db(config.mongodb.database);
		this.productCollection = this.productDatabase.collection("User");
	}
	async Loginuser(req) {
		const a = await this.productCollection.findOne({
			"email": req.email
		}, {});
		console.log(a);
		if (a == "" || a == null) {
			return 1;
		}
		else {
			if (req.password === a.password) {
				return 2;
			}
			else {
				return 3;
			}
		}
	}

}
module.exports = UserService;