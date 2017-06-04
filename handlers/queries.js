var pool = require('../connectors/database');

exports.getTopTen = function(callback) {
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

exports.getByPlayer = function(name, callback) {
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

exports.getByPlayerLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);

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

exports.getByVictim = function(name, callback) {
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

exports.getByVictimLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);

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

exports.getByWeapon = function(name, callback) {
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

exports.getByWeaponLimit = function(name, limit, callback) {
	pool.getConnection(function (err, connection) {
		if (err) {
			callback(err, null);
		} else {
			var lName = '%' + name + '%';
			var rLimit = parseInt(limit);

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