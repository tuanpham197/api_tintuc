
var express = require('express');
var router = express.Router();
const PostController = require('../controllers/PostController');

router.get('/',PostController.create);
router.get('/:id',PostController.findOne);

module.exports = router;