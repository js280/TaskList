var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', './views');
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);

