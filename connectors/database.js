var mysql = require('mysql');
var config = require('../config');

var pool = mysql.createPool({
	connectionLimit: 1000,
	timeout: 40000,
	host: config.settings[config.env].db.host,
	user: config.settings[config.env].db.user,
	password: config.settings[config.env].db.password,
	database: config.settings[config.env].db.database
});

module.exports = pool;