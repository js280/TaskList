module.exports = function(app) {

    // render login form
    app.get('/login', function(req, res) {
        res.render('login');
    });

};