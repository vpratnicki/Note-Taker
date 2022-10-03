const express = require('express');
const app = express();
// require the data
const { notes } = require('./db/db.json');


// add the route
app.get('/api/db', (req,res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});
app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
});