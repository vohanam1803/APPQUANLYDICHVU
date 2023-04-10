const sql = require('mssql');
//Bien config
const config = {
	user: 'sa',
	password: '123456',
	server: 'LAPTOP-MB0PCOPJ',
	database: 'NHAHANGSIRI',
	options: {
		encrypt: true, // For Azure SQL Database
		trustServerCertificate: true,
	}
};

//Function connect data
function connect(req, res) {
	const connectDB = () => sql.connect(config, err => {
		if (err) {
			console.log(`Error connecting to SQL Server: ${err}`);
			return res.err();
		} else {
			console.log('Connected to SQL Server successfully!');
			const query = 'SELECT * FROM Sach';
			sql.query(query, (err, result) => {
				if (err) {
					console.log(`Error executing query: ${err}`);
					return res.err();
				} else {
					console.log(result);
					return res.json(result);
				}
			});

		}
	});
	connectDB
}

module.exports = connect;

// const pool = new sql.ConnectionPool(config);

