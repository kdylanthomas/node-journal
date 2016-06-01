'use strict';

var express = require('express');
var User = require('../models/user');
var Entry = require('../models/entry');
var router = express.Router();

// GET all entries for a user
router.get('/entries', function (req, res) {
	var userId = req.query.user;
	Entry.find({user: userId}, function (err, entries) {
		if (err) {
			res.status(500).json({message: err.message});
		}
		res.json({entries: entries});
	});
});

// POST entries from a user
router.post('/entries', function (req, res) {
	var entry = new Entry();
	entry.user = req.body.user;
	entry.text = req.body.text;
	entry.date = new Date();
	entry.save(function (err, todo) {
		if (err) {
			return res.status(500).json({err: err.message});
		};
		res.json({message: 'entry successfully saved!'});
	});
});

module.exports = router;