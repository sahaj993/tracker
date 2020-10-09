const express = require('express');
const router = express.Router();

const viewSchema = require('../controller/views_controller');

router.get('/', viewSchema.profile);

module.exports = router;