const router = require('express').Router();
const { filterByQuery, findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// add the route
router.get('/db', (req,res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
        res.json(results);
});
router.get('/db/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
  });

// defined a route that listens for POST requests
router.post('/db', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();    

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
  // add note to json file and notes array in this function
  const note = createNewNote(req.body, notes);
  res.json(note);
  }
  });

  module.exports  = router;

