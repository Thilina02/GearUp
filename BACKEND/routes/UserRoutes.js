const express = require('express');
const router = express.Router();


const{ CreateUser, loginUser,getUserProfileById, updateUserById } = require('../controller/UserController');


router.post('/CreateUser', CreateUser)
router.post('/login', loginUser)
router.get('/Profile/:id', getUserProfileById);
router.put('/updateUser/:id', updateUserById);
module.exports = router