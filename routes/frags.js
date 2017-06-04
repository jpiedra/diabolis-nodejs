var express = require('express');
var router = express.Router();
var queries = require('../handlers/queries');
//var helpers = require('../utils');

router.use(function (req, res, next) {
	req.handleQueryResults = function(err, results) {
		if (err) {
			next(err);
		} else {
			res.set('Content-Type', 'application/json');
			res.send(results);
		};
	};
	next();
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

module.exports = router;