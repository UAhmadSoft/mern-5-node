const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String,
	},
	age: {
		required: true,
		type: Number,
	},
	email: {
		type: String,
		unique: true,
		required: [true, 'Email is required'],
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
});

userSchema.pre('save', async function (next) {
	const result = await bcrypt.hash(this.password, 11);
	console.log('result', result);

	this.password = result;
	next();
});

module.exports = mongoose.model('User', userSchema);
