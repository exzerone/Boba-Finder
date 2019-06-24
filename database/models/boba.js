const mongoose = require('mongoose');

const bobaSchema = mongoose.Schema({
	user: String,
	name: String,
	metadata: Array
});

const Boba = mongoose.model('Boba', bobaSchema);

module.exports = Boba;
