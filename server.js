const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
// require the data
const { notes } = require('./db/db.json');


// add the route
app.get('/api/db', (req,res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});