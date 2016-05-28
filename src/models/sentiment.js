'use strict';

var mongoose = require('mongoose');

var sentimentSchema = new mongoose.Schema({
	entry: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Entry'
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	anger: Number,
	disgust: Number,
	fear: Number,
	joy: Number,
	sadness: Number,
	openness: Number,
	extraversion: Number,
	agreeableness: Number,
	emotionalRange: Number
});

var sentiment = mongoose.model('Sentiment', sentimentSchema);

module.exports = sentiment;