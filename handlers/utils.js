var utils = {};

utils.handleQueryResults = function (err, response, results, next) {
	if (err) {
		next(err);
	} else {
		response.set('Content-Type', 'application/json');
		response.send(results);
	};
};

module.exports = utils;