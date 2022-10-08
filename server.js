const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
// require the data
const { notes } = require('./db/db.json');


// add the route
app.get('/api/db', (req,res) => {
    let result = notes;
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});