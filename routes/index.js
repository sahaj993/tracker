const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/habits', require('./habits'));
router.use('/view', require('./view'));

module.exports = router;