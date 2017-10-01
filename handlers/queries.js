var pool = require('../connectors/database');
var config = require('../config');

var queries = {};
queries.COLUMNS = config.settings[config.env].db.columns || [
	'id', 'map', 'dt', 'kname', 'vclass', 'vname'
]; 
queries.ROW_LIMIT = 25

queries.getLatestFrags = function(callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			connection.query({
				sql: 'SELECT * FROM frag ORDER BY dt DESC LIMIT ?',
				values: [queries.ROW_LIMIT]
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
			// calculate the offset by multiplying limit by page number
			rOffset = rOffset * rLimit;
			// only limit the rows returned.. page can be as high as needed.
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag ORDER BY dt DESC LIMIT ? OFFSET ?',
				values: [queries.COLUMNS, rLimit, rOffset]
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
			// calculate the offset by multiplying limit by page number
			rOffset = rOffset * rLimit;
			// only limit the rows returned.. page can be as high as needed.
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
				values: [queries.COLUMNS, lName, rLimit, rOffset]
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
			// calculate the offset by multiplying limit by page number
			rOffset = rOffset * rLimit;
			// only limit the rows returned.. page can be as high as needed.
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
				values: [queries.COLUMNS, lName, rLimit, rOffset]
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
			// calculate the offset by multiplying limit by page number
			rOffset = rOffset * rLimit;
			// only limit the rows returned.. page can be as high as needed.
			rLimit = rLimit > queries.ROW_LIMIT ? queries.ROW_LIMIT : rLimit;
			connection.query({
				sql: 'SELECT ?? FROM frag WHERE `map` LIKE ? ORDER BY dt DESC LIMIT ? OFFSET ?',
				values: [queries.COLUMNS, lName, rLimit, rOffset]
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

queries.getPlayerList = function(callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			connection.query(
			'SELECT DISTINCT(kname) FROM frag', function (err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result);
				};
			});
		}
	});
}

queries.getPlayerReport = function(name, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = name;

			connection.query({
				sql: 'CALL player_report_frags(?)',
				values: [lName]
			}, function(err, result, fields) {
				if (err) {
					callback(err, null);
				} else {
					callback(null, result[0]);
				};
			});
		};
	});
};

module.exports = queries;