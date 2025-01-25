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
           task // Assuming the `name` field exists in the Task schema
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
         task,message: 'Task created successfully'
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

//====================================patch=========================
const editTask = async (req, res) => {
   
    try {
        const id = req.params.id;

        const tasks = await Tasks.findOneAndUpdate(
          {_id:id}, 
            req.body , 
            { new: true, runValidators: true  }  )
           if(!tasks){
            return res.status(404).json({ message: 'Task not found' });
        }
          res.status(200).json({ tasks });
        }   catch (error) {
        res.status(500).json({ message: 'Server error while fetching tasks.' });
    }
};

//============put===============================
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;

        const tasks = await Tasks.findByIdAndDelete(id);

        if (!tasks) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task successfully deleted' });
    } catch (error) {
        console.error('Error deleting task:', error.message); // Log the actual error
        res.status(500).json({ message: 'Server error while deleting task.' });
    }

};

//================================================
module.exports = {
    findalltask,
    gettask,
    createtask,
    editTask,
    deleteTask,
};
