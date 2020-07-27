
var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/login',UserController.login);
router.post('/register',UserController.register);

module.exports = router;