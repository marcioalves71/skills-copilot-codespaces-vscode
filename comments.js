// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

// Create a route to get all comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

// Create a route to get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('Get comment by id');
});

// Create a route to add a comment
app.post('/comments', (req, res) => {
    res.send('Add a comment');
});

// Create a route to update a comment by id
app.put('/comments/:id', (req, res) => {
    res.send('Update a comment by id');
});

// Create a route to delete a comment by id
app.delete('/comments/:id', (req, res) => {
    res.send('Delete a comment by id');
});