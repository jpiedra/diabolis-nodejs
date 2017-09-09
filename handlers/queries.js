var pool = require('../connectors/database');

var queries = {};

/*queries.getTopTen = function(callback) {
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
};*/

queries.getLimit = function(limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var rLimit = parseInt(limit);
			rLimit = rLimit > 100 ? 100 : rLimit;
			connection.query({
				sql: 'SELECT * FROM frag ORDER BY dt DESC LIMIT ?',
				values: [rLimit]
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
				sql: 'SELECT * FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC',
				values: [lName]
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
			rLimit = rLimit > 100 ? 100 : rLimit;
			connection.query({
				sql: 'SELECT * FROM frag WHERE `kname` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [lName, rLimit]
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
				sql: 'SELECT * FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC',
				values: [lName]
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
			rLimit = rLimit > 100 ? 100 : rLimit;
			connection.query({
				sql: 'SELECT * FROM frag WHERE `vname` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [lName, rLimit]
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

queries.getByWeapon = function(name, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';

			connection.query({
				sql: 'SELECT * FROM frag WHERE `kwep` LIKE ? ORDER BY dt DESC',
				values: [lName]
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

queries.getByWeaponLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);
			rLimit = rLimit > 100 ? 100 : rLimit;
			connection.query({
				sql: 'SELECT * FROM frag WHERE `kwep` LIKE ? ORDER BY dt DESC LIMIT ?',
				values: [lName, rLimit]
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