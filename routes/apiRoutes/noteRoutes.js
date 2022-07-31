const router = require('express').Router();
const { notes } = require('../../db/db.json');
const saveNote = require('/js/index.js');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = saveNote(req.body, notes);
    res.json(note);
});

module.exports = router;