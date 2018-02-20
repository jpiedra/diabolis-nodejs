var pool = require('../connectors/database');
var config = require('../config');

var queries = {};
queries.COLUMNS = config.settings[config.env].db.columns || [
	'id', 'map', 'dt', 'kname', 'vclass', 'vname'
]; 
queries.ROW_LIMIT = 25

function performQuery(query, pool, callback, response, next) {
	pool.getConnection(function (err, connection) {
		if (err) {
			connection.release();
			callback(err, response, null, next);
		} else {
			connection.query(query, function(err, result, fields) { 
				connection.release();
				if (err) {
					callback(err, response, null, next);
				} else {
					callback(null, response, result, next);	
				};			
			});
		};
	});
};

queries.getLatestFrags = function(callback, response, next) {
	performQuery({
		sql: 'SELECT * FROM frag ORDER BY dt DESC LIMIT ?',
		values: [queries.ROW_LIMIT]
	}, pool, callback, response, next);
};

queries.getLimit = function(limit, callback, response, next) {
	var rLimit = parseInt(limit);
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag ORDER BY dt DESC LIMIT ?',
		values: [queries.COLUMNS, rLimit]
	}, pool, callback, response, next);
};

queries.getLimitPage = function(limit, page, callback, response, next) {
	var rLimit = parseInt(limit);
	var rOffset = parseInt(page);
	// calculate the offset by multiplying limit by page number
	rOffset = rOffset * rLimit;
	// only limit the rows returned.. page can be as high as needed.
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag ORDER BY dt DESC LIMIT ? OFFSET ?',
		values: [queries.COLUMNS, rLimit, rOffset]
	}, pool, callback, response, next);

};

queries.getByPlayer = function(name, callback, response, next) {
	var lName = '%' + name + '%';
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC',
		values: [queries.COLUMNS, lName]
	}, pool, callback, response, next);
};

queries.getByPlayerLimit = function(name, limit, callback, response, next) {	
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ?',
		values: [queries.COLUMNS, lName, rLimit]
	}, pool, callback, response, next);
};

queries.getByPlayerLimitPage = function(name, limit, page, callback, response, next) {
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	var rOffset = parseInt(page);
	// calculate the offset by multiplying limit by page number
	rOffset = rOffset * rLimit;
	// only limit the rows returned.. page can be as high as needed.
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
		values: [queries.COLUMNS, lName, rLimit, rOffset]
	}, pool, callback, response, next);
};


queries.getByVictim = function(name, callback, response, next) {
	var lName = '%' + name + '%';
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC',
		values: [queries.COLUMNS, lName]
	}, pool, callback, response, next);
};

queries.getByVictimLimit = function(name, limit, callback, response, next) {
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ?',
		values: [queries.COLUMNS, lName, rLimit]
	}, pool, callback, response, next);
};

queries.getByVictimLimitPage = function(name, limit, page, callback, response, next) {
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	var rOffset = parseInt(page);
	// calculate the offset by multiplying limit by page number
	rOffset = rOffset * rLimit;
	// only limit the rows returned.. page can be as high as needed.
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
		values: [queries.COLUMNS, lName, rLimit, rOffset]
	}, pool, callback, response, next);
};

queries.getByMap = function(name, callback, response, next) {
	var lName = '%' + name + '%';
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC',
		values: [queries.COLUMNS, lName]
	}, pool, callback, response, next);
};

queries.getByMapLimit = function(name, limit, callback, response, next) {
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC LIMIT ?',
		values: [queries.COLUMNS, lName, rLimit]
	}, pool, callback, response, next);
};

queries.getByMapLimitPage = function(name, limit, page, callback, response, next) {
	var lName = '%' + name + '%';
	var rLimit = parseInt(limit);
	var rOffset = parseInt(page);
	// calculate the offset by multiplying limit by page number
	rOffset = rOffset * rLimit;
	// only limit the rows returned.. page can be as high as needed.
	rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
	performQuery({
		sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
		values: [queries.COLUMNS, lName, rLimit, rOffset]
	}, pool, callback, response, next);
};

queries.getPlayerList = function(callback, response, next) {
	performQuery('SELECT DISTINCT(kname) FROM frag', pool, callback, response, next);
};

queries.getPlayerReport = function(name, callback, response, next) {
	var lName = name;
	performQuery({
		sql: 'CALL player_report_frags(?)',
		values: [lName]
	}, pool, callback, response, next);
};

module.exports = queries;