const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/tasks', tasks);



// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/v1/tasks`);
});
