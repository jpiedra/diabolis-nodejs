var express = require('express');
var router = express.Router();
var queries = require('../handlers/queries');

router.use(function (req, res, next) {
	// there should be a better way of making this function available to all routes...
	req.handleQueryResults = function(err, rows) {
		if (err) {
			// log this somehow
			next(err);
		} else {
			res.json(rows);
		};
	};
	next();
});

router.get('/', function(req, res, next){
	queries.getLatestFrags(req.handleQueryResults);
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

router.get('/player/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByPlayerLimitPage(req.params.name, req.params.rows, req.params.page, req.handleQueryResults);
});

router.get('/victim/:name', function(req, res, next) {
	queries.getByVictim(req.params.name, req.handleQueryResults);
});

router.get('/victim/:name/limit/:rows', function(req, res, next) {
	queries.getByVictimLimit(req.params.name, req.params.rows, req.handleQueryResults);
});

router.get('/victim/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByVictimLimitPage(req.params.name, req.params.rows, req.params.page, req.handleQueryResults);
});

router.get('/map/:name', function(req, res, next) {
	queries.getByMap(req.params.name, req.handleQueryResults);
});

router.get('/map/:name/limit/:rows', function(req, res, next) {
	queries.getByMapLimit(req.params.name, req.params.rows, req.handleQueryResults);
});

router.get('/map/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByMapLimitPage(req.params.name, req.params.rows, req.params.page, req.handleQueryResults);
});

module.exports = router;