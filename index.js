const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.post('/', (req, res) => {
    const { username, id } = req.body;

    console.log(`Received ID: ${id}, Username: ${username}`);

    // Send a response back to the client
    res.status(200).json({ message: 'Data received successfully', id, username });
});
app.get('/', (req, res) => {
   
    res.status(200).json({ message: 'Data received successfully' });

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

