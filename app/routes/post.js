
var express = require('express');
var router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/',PostController.findAll);
router.post('/',PostController.create);
router.get('/cat/:id',PostController.findByCategory);

router.get('/all',PostController.findAllPostCategory);

module.exports = router;