const express = require('express');
const router = express.Router();
const {  findalltask,gettask,createtask } = require('../controllers/task');

// Task Routes


router.route('/:id').get(gettask);

router.route('/').get(findalltask);

router.route('/').post(createtask);
module.exports = router;
