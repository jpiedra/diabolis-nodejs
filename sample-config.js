/*
Sample of the config file used for this application.
Substitute the respective values for your development and production MySql database servers.
Lastly, rename this file to 'config.js' or include it in 'connectors/database.js' under the desired name.
*/
var config = {};

config.env = process.env.NODE_ENV === 'development' ? 'development' : 'production';
config.settings = [];

config.settings['development'] = {
	db: {
		host: 'DEV-DB-HOST',
		user: 'DEV-DB-USER',
		password: 'DEV-DB-PASSWORD',
		database: 'DEV-DB'
	}	
};

config.settings['production'] = {
	db: {
		host: 'PROD-DB-HOST',
		user: 'PROD-DB-USER',
		password: 'PROD-DB-PASSWORD',
		database: 'PROD-DB'
	}	
};

module.exports = config;