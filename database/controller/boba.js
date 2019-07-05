const Boba = require('../models/boba.js');

addFavorite = (data, callback) => {
	Boba.findOne(data, (err, result) => {
		if (err) {
			callback(err);
		}
		if (result === null) {
			Boba.create(data, (err, result) => {
				if (err) {
					callback(err);
				} else {
					callback(null, result);
				}
			});
		}
	});
};

fetchFavorite = (callback) => {
	Boba.find({ user: 'Chris' }, (err, result) => {
		if (err) {
			callback(err);
		} else {
			callback(err, result);
		}
	});
};

deleteFavorite = (callback) => {
	Boba.deleteMany({ user: 'Chris' }, (err, result) => {
		if (err) {
			callback(err);
		} else {
			callback(err, result);
		}
	});
};

module.exports = {
	addFavorite,
	fetchFavorite,
	deleteFavorite
};
