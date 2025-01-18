const Tasks = require('../models/taskSC')

//=======================================

//================================================
const gettask = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the task by its ID
        const task = await Tasks.findById(id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Return the name of the task
        res.status(200).json({
            name: task.name, // Assuming the `name` field exists in the Task schema
        });
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ message: "Server error" });
    }
};
//===============================================
const createtask = async(req, res) => {
    
        const task = await Tasks.create(req.body)
        res.status(200).json({
         task
        });
  
};

//====================================
const findalltask = async (req, res) => {
    try {
        const tasks = await Tasks.find(); // Retrieve all tasks
        res.status(200).json({ tasks });
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error while fetching tasks.' });
    }
};



module.exports = {
    findalltask,
    gettask,
    createtask,
};
