// Create a web server

// Import modules
const express = require('express');
const fs = require('fs');

// Create an express app
const app = express();
app.use(express.json());

// Create a port
const port = 3000;

// Read the comments.json file
let comments = JSON.parse(fs.readFileSync('comments.json'));

// Create a GET request handler for the /comments path
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Create a POST request handler for the /comments path
app.post('/comments', (req, res) => {
    // Get the comment
    let comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // Save the comments array to the comments.json file
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    // Send the comment back to the client
    res.send(comment);
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}!`));
