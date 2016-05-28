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



module.exports = router;