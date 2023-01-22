const mongoose = require('mongoose');

module.exports = () => {
	const DB_URL = process.env.DB_URI.replace(
		'<PASSWORD>',
		process.env.DB_PASS
	).replace('<DB_NAME>', process.env.DB_NAME);

	console.log('DB_URL', DB_URL);
	mongoose.connect(DB_URL, { useNewUrlParser: true });

	const database = mongoose.connection;

	database.on('error', error => {
		console.log(error);
	});

	database.once('connected', () => {
		console.log('Database Connected');
	});
};
