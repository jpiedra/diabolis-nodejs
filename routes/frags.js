var express = require('express');
var router = express.Router();
var queries = require('../handlers/queries');
//var helpers = require('../utils');

router.use(function (req, res, next) {
	// there should be a better way of making this function available to all routes...
	req.handleQueryResults = function(err, rows) {
		if (err) {
			next(err);
		} else {
			res.set('Content-Type', 'application/json');
			res.send(rows);
		};
	};
	// what if the callback just sets the response object's contents...
	req.setQueryResults = function(err, rows) {
		if (err) {
			next(err);
		} else {
			res.set('Content-Type', 'application/json');
			res.rows = rows;
		};	
	};
	next();
});

router.get('/limit/:rows', function (req, res, next) {
	queries.getLimit(req.params.rows, req.handleQueryResults);
});

router.get('/limit/:rows/page/:page', function (req, res, next) {
	queries.getLimitPage(req.params.rows, req.params.page, req.handleQueryResults);
});

router.get('/player/:name', function(req, res, next) {
	queries.getByPlayer(req.params.name, req.handleQueryResults);
});

router.get('/player/:name/limit/:rows', function(req, res, next) {
	queries.getByPlayerLimit(req.params.name, req.params.rows, req.handleQueryResults);
});

router.get('/victim/:name', function(req, res, next) {
	queries.getByVictim(req.params.name, req.handleQueryResults);
});

router.get('/victim/:name/limit/:rows', function(req, res, next) {
	queries.getByVictimLimit(req.params.name, req.params.rows, req.handleQueryResults);
});

router.get('/weapon/:name', function(req, res, next) {
	queries.getByWeapon(req.params.name, req.handleQueryResults);
});

router.get('/weapon/:name/limit/:rows', function(req, res, next) {
	queries.getByWeaponLimit(req.params.name, req.params.rows, req.handleQueryResults);
});

/*router.get('/topten', 
	function(req, res, next) {
		// first middleware runs the query
		// trying to make callback set response member 'rows'
		queries.getTopTen(req.setQueryResults);
		next();
	},
	function(req, res, next) {
		// last middleware sends response
		// after the first middleware runs query, second actually sends data.
		res.send(res.rows);
	} 
);*/

module.exports = router;