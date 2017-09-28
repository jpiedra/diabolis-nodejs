var ajax = {};

// middle specifically designed to check for ajax requests
// TO-DO: do something more useful than throw an error?
ajax.checkRequest = function(req, res, next) {
    if (req.xhr) return next();
    throw new Error();
};

module.exports = ajax;