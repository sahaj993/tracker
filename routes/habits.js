const express = require('express');
const router = express.Router();

const habitSchema = require('../controller/habit_controller');

router.post('/create', habitSchema.create);
router.get('/delete/:id', habitSchema.delete);

module.exports = router;