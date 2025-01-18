const express = require('express');
const router = express.Router();
const {  posttask,gettask } = require('../controllers/task');

// Task Routes
router.route('/').post(posttask);

router.route('/:id').get(gettask);

module.exports = router;
