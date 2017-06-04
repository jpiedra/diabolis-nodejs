var utils = {};

utils.handleQueryResults = function(err, results) {
	if (err) {
		next(err);
	} else {
		res.set('Content-Type', 'application/json');
		res.send(results);
	};
};

module.exports = utils;