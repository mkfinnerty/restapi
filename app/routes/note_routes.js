var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { _id: new ObjectID(id) };
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send(item);
			}
		});
	});

	const collection = app.post('/notes', (req, res) => {
		const note = {
			restaurant: {
				name: req.body.name,
				meal: req.body.meal,
				type: req.body.type,
				lateNight: req.body.late,
				drinks: req.body.drinks,
				description: req.body.description,
				location: req.body.location,
				price: req.body.price,
				happyHour: req.body.happyHour
			}
		};
		db.collection('notes').insert(note, (err, result) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});

		index + 1;
	});

	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { _id: new ObjectID(id) };
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { _id: new ObjectID(id) };
		const note = {
			restaurant: {
				name: req.body.name,
				meal: req.body.meal,
				type: req.body.type,
				lateNight: req.body.late,
				drinks: req.body.drinks,
				description: req.body.description,
				location: req.body.location,
				price: req.body.price,
				happyHour: req.body.happyHour
			}
		};
		db.collection('notes').update(details, note, (err, result) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send(note);
			}
		});
	});
};