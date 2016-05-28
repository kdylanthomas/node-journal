'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String
});

var user = mongoose.model('User', userSchema);

module.exports = user;