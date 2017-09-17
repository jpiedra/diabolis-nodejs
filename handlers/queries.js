var pool = require('../connectors/database');
var config = require('../config');

var queries = {};
queries.COLUMNS = config.settings[config.env].db.columns || [
	'id', 'map', 'dt', 'kname', 'vclass', 'vname'
]; 
queries.ROW_LIMIT = 25

queries.getTopTen = function(callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			connection.query({
				sql: 'SELECT * FROM frag ORDER BY dt DESC LIMIT 10'
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);	
				};			
			});
		};
	});
};

queries.getLimit = function(limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var rLimit = parseInt(limit);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag ORDER BY dt DESC LIMIT ?',
				values: [queries.COLUMNS, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);	
				};			
			});
		};
	});
};

queries.getLimitPage = function(limit, page, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var rLimit = parseInt(limit);
			var rOffset = parseInt(page);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			rOffset = rOffset > queries.ROW_LIMIT ? queries.ROW_LIMIT : rOffset;
			rOffset = rLimit * rOffset;
			connection.query({
				sql: 'SELECT ?? FROM frag ORDER BY dt DESC LIMIT ?,?',
				values: [queries.COLUMNS, rOffset, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);	
				};			
			});
		};
	});
};

queries.getByPlayer = function(name, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';

			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC',
				values: [queries.COLUMNS, lName]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByPlayerLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [queries.COLUMNS, lName, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByPlayerLimitPage = function(name, limit, page, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			var rOffset = parseInt(page);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			rOffset = rOffset > queries.ROW_LIMIT ? queries.ROW_LIMIT : rOffset;
			rOffset = rLimit * rOffset;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ?,?',
				values: [queries.COLUMNS, lName, rOffset, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};


queries.getByVictim = function(name, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';

			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC',
				values: [queries.COLUMNS, lName]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByVictimLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [queries.COLUMNS, lName, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByVictimLimitPage = function(name, limit, page, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			var rOffset = parseInt(page);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			rOffset = rOffset > queries.ROW_LIMIT ? queries.ROW_LIMIT : rOffset;
			rOffset = rLimit * rOffset;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ?,?',
				values: [queries.COLUMNS, lName, rOffset, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByMap = function(name, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';

			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC',
				values: [queries.COLUMNS, lName]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByMapLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [queries.COLUMNS, lName, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

queries.getByMapLimitPage = function(name, limit, page, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			var rOffset = parseInt(page);
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			rOffset = rOffset > queries.ROW_LIMIT ? queries.ROW_LIMIT : rOffset;
			rOffset = rLimit * rOffset;
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC LIMIT ?,?',
				values: [queries.COLUMNS, lName, rOffset, rLimit]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		};
	});
};

module.exports = queries;