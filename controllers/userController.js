const User = require('../database/models/user');

// const createUser = async (req, res) => {
exports.createUser = async (req, res) => {
	try {
		const user = await User.create({
			...req.body,
		});
		// const user =  User.create({
		// 	...req.body
		// }).then(user => )
		res.status(200).send(user);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
};
// exports.createUser = async (req, res) => {
// 	const { name, age } = req.body;
// 	const userData = new User({
// 		name,
// 		age,
// 	});

// 	try {
// 		const savedData = await userData.save();
// 		res.status(200).send(savedData);
// 	} catch (err) {
// 		res.status(400).send({ message: err.message });
// 	}
// };

exports.getAllUsers = async (req, res) => {
	try {
		const data = await User.find();

		res.send(data);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

exports.getUser = async (req, res) => {
	try {
		const data = await User.findById(req.params.id);
		if (!data) {
			return res.send('User not found!');
		}
		res.send(data);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const updatedData = req.body;
		const options = { new: true };

		const result = await User.findByIdAndUpdate(id, updatedData, options);

		res.send(result);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		const data = await User.findByIdAndDelete(id);
		res.send(`Document with ${data.name} has been deleted..`);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}
};

// module.exports = {
// 	createUser,
// };
