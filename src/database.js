'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-journal', function (err) {
	if (err) console.error(err);
	else console.log('Connected to database! hip hip hooray');
});