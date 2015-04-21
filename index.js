// declare dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');


// configurations
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('./config/db')(mongoose); /* database configuration */ 


// routes
require('./routes')(app);


// start app
var port = process.env.PORT || 4000;
app.listen(port, function(){
	console.log('Listening to port ' + port);
})