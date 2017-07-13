var http = require('http');
var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.use('views', '/views');

app.get('/', 'index');

app.listen(3000);

