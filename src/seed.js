'use strict';

var Entry = require('./models/entry.js');

var entries = [
	"Hello world",
	"I am seeding data"
];

var exampleUserId = "5749eb0febdd303d3f174a7b";
entries.forEach(function (entry, index) {
	Entry.find({'text': entry}, function (err, entries) {
		if (!err && !entries.length) {
			Entry.create({text: entry, date: new Date(), user: exampleUserId});
		};
	});
});