var bodyParser = require('body-parser');
var urlEncodedParser = new bodyParser.urlencoded({extended: false});
var mongodb = require('mongodb');
var MongoClient = new mongodb.MongoClient();

module.exports = function(app) {
    app.post('/add-remove-task', urlEncodedParser, function(req, res) {

        MongoClient.connect('mongodb://localhost/task_list', function(err, db) {
            if(err) {
                console.error(err);
            } else {
                var collection = db.collection('task_list').insertOne({task: req.body.task}, function(err, dbRes) {
                    if(err) {
                        console.error(err);
                    } else {
                        res.redirect('/task-entry');
                    }
                });
            }
        });
    });

    app.get('/add-remove-task/:id', function(req, res) {

        var id = req.params.id;

        MongoClient.connect('mongodb://localhost/task_list', function(err, db) {
            var collection = db.collection('task_list');
            collection.remove({_id: new mongodb.ObjectID(id)}, function(err, response) {
                if(err) {
                    console.error(err);
                } else {
                    res.redirect('/task-entry');
                }
            });
        });

    });
};