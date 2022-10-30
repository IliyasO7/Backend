const path = require('path');


const userController = require('../controllers/users');

const express = require('express');
const router = express.Router();



router.get('/user/getUser',userController.getUsers);

router.post('/user/addUser',userController.postAddUser);

router.delete('/user/deleteUser/:userId',userController.deleteUser);


module.exports = router;









