const express = require('express');
const cors = require('cors');
const tasks = require('./routes/tasks');
const app = express();
const connectdb =require('./db/connect')
require('dotenv').config()

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/tasks', tasks);



//=====================database==============
const port = process.env.PORT || 3000;

const start =  async()=>{
try{
   await connectdb (process.env.mongoURL)

   //below if i connected to the database then listen
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/v1/tasks`);
});
}catch(error){
    console.log(error)

}

}

// Start Server
start()//invoke start method

