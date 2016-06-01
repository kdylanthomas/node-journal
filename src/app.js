'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express(); // instance of express
var router = require('./api');

require('./database'); // make sure database gets run
require('./seed');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(3000, function () {
	console.log('cool things are happening on port 3000');
});