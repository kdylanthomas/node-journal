'use strict';

var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	date: Date,
	text: String
});

var entry = mongoose.model('Entry', entrySchema);

module.exports = entry;