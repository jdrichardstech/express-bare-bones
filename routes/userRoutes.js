const express = require('express');
const router = express.Router();
const userController = require('../contollers/userController');

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = userController;

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
