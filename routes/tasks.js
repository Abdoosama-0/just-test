const express = require('express');
const router = express.Router();
const {  findalltask,gettask,createtask,editTask,deleteTask} = require('../controllers/task');

// Task Routes



router.route('/')
.get(findalltask)
.post(createtask);


router.route('/:id')
.patch(editTask)
.delete(deleteTask)
.get(gettask);





module.exports = router;
