const express = require('express');
const app = express();
// require the data
const { notes } = require('./db/db.json');


// add the route
app.get('/api/db', (req,res) => {
    res.send('Hello!');
});
app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
});