var express = require('express');
var app = express();
var Controller = require('./controllers/Controllers');

// Node.js server listening on port 3000 and sending console message on startup...
app.listen(3000);
console.log("Listening on port 3000...");

// set Jade as the view engine 
app.set('view engine', 'jade');

// Use the /views folder for all res.render() Jade files
app.set('views', './views');

// Use the /public folder for all statically served objects
// this will allow us to default to the public folder for all 
// static files such as /public/assets/css, /public/assets/js,
// /public/assets/img, etc.

app.use(express.static(__dirname + '/public'));

// Initialize controllers
Controller(app);






