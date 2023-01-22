const express = require('express');
const router = express.Router();

const User = require('../database/models/user');
const userContoller = require('../controllers/userController');

// /api/users/post POSt
router.post('/', userContoller.createUser);

router.get('/', userContoller.getAllUsers);

router.get('/:id', userContoller.getUser);

router.patch('/:id', userContoller.updateUser);

router.delete('/:id', userContoller.deleteUser);

module.exports = router;
