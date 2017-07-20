module.exports = function(app) {

    var indexController = require('./indexController');
    var loginController = require('./loginController');
    var contactController = require('./contactController');
    var taskEntryController = require('./taskEntryController');
    var addRemoveTaskController = require('./addRemoveTaskController');

    indexController(app);
    loginController(app);
    contactController(app);
    taskEntryController(app);
    addRemoveTaskController(app);

};