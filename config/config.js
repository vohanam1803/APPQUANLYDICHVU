const config = {
	user: 'sa',
	password: '123456',
	server: 'LAPTOP-MB0PCOPJ',
	database: 'NhaSach',
	options: {
		encrypt: true, // For Azure SQL Database
		trustServerCertificate: true,
	}
};

module.exports = config;