const express = require('express');
const app = express();
const PORT = 3005;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/controller/boba.js');
require('../database/index');

app.use(cors());
app.use(bodyParser.json());

app.post('/data', (req, res) => {
	db.addFavorite(req.body, (err, result) => {
		if (err) {
			res.status(404).send;
		} else {
			res.status(200).send(result);
		}
	});
});

app.get('/data', (req, res) => {
	db.fetchFavorite((err, result) => {
		if (err) {
			res.status(404).send();
		} else {
			res.status(200).send(result);
		}
	});
});

app.delete('/data', (req, res) => {
	db.deleteFavorite((err, result) => {
		if (err) {
			res.status(404).send();
		} else {
			res.status(200).send();
		}
	});
});

app.listen(PORT, () => {
	console.log(`Connected to http://localhost:${PORT}`);
});
