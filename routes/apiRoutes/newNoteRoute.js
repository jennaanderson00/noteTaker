// recieves new note from client, adds to db.json, returns new note to client
const { findById, handleNoteSave } = require('../../public/assets/js/index');
const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/db', (req, res) => {
    let results = notes;
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
router.post('/db', (req, res) => {
    req.body.id = notes.length.toString();
    const note = handleNoteSave(req.body, notes);
    res.json(note);
});

module.exports = router;