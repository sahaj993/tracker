const express = require('express');
const router = express.Router();

const habitSchema = require('../controller/habit_controller');

router.use('/create', habitSchema.create);

module.exports = router;