var mongodb = require('mongodb');
var MongoClient = new mongodb.MongoClient();

module.exports = function(app) {

    // render login form
    app.get('/task-entry', function(req, res) {
        MongoClient.connect('mongodb://localhost/task_list', function(err, db) {
            var collection = db.collection('task_list').find().toArray(function(err, tasks) {
                if(err) {
                    console.error(err);
                } else {
                    res.render('task-entry', {tasks: tasks});
                }
            });
        });        
    });
};