module.exports = function(app) {

    var indexController = require('./indexController');
    var loginController = require('./loginController');
    var contactController = require('./contactController');

    indexController(app);
    loginController(app);
    contactController(app);
};