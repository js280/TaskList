module.exports = function(app) {

// Render index.jade for root / web GET request
app.get('/', function(req, res) {
    res.render('index');
});

};