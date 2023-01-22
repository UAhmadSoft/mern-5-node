const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/users', userRouter);

// /api/users/apples
// /api/users/s123/1232

require('dotenv').config();
// require('dotenv').config({
// 	path: './config.env',
// });
require('./database/connect')();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
