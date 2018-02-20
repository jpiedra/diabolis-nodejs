var express = require('express');
var router = express.Router();
var utils = require('../handlers/utils');
var queries = require('../handlers/queries');

router.get('/', function(req, res, next){
	queries.getLatestFrags(utils.handleQueryResults, res, next);
});

router.get('/limit/:rows', function (req, res, next) {
	queries.getLimit(req.params.rows, utils.handleQueryResults, res, next);
});

router.get('/limit/:rows/page/:page', function (req, res, next) {
	queries.getLimitPage(req.params.rows, req.params.page, utils.handleQueryResults, res, next);
});

router.get('/player/all', function(req, res, next) {
	queries.getPlayerList(utils.handleQueryResults, res, next);
});

router.get('/player/:name', function(req, res, next) {
	queries.getByPlayer(req.params.name, utils.handleQueryResults, res, next);
});

router.get('/player/:name/limit/:rows', function(req, res, next) {
	queries.getByPlayerLimit(req.params.name, req.params.rows, utils.handleQueryResults, res, next);
});

router.get('/player/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByPlayerLimitPage(req.params.name, req.params.rows, req.params.page, utils.handleQueryResults, res, next);
});

router.get('/victim/:name', function(req, res, next) {
	queries.getByVictim(req.params.name, utils.handleQueryResults, res, next);
});

router.get('/victim/:name/limit/:rows', function(req, res, next) {
	queries.getByVictimLimit(req.params.name, req.params.rows, utils.handleQueryResults, res, next);
});

router.get('/victim/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByVictimLimitPage(req.params.name, req.params.rows, req.params.page, utils.handleQueryResults, res, next);
});

router.get('/map/:name', function(req, res, next) {
	queries.getByMap(req.params.name, utils.handleQueryResults, res, next);
});

router.get('/map/:name/limit/:rows', function(req, res, next) {
	queries.getByMapLimit(req.params.name, req.params.rows, utils.handleQueryResults, res, next);
});

router.get('/map/:name/limit/:rows/page/:page', function(req, res, next) {
	queries.getByMapLimitPage(req.params.name, req.params.rows, req.params.page, utils.handleQueryResults, res, next);
});

router.get('/report/:name', function(req, res, next) {
	queries.getPlayerReport(req.params.name, utils.handleQueryResults, res, next);
});

module.exports = router;