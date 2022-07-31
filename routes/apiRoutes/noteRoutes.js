const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const shortid = require('shortid');
const dbpath = path.join(__dirname, '../../db/db.json');

router.get('/notes', (req, res) => {
    res.sendFile(dbpath);
});

router.post('/notes', (req, res) => {
    const noteId = shortid.generate();
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: noteId
    }
    let notes = JSON.parse(fs.readFileSync('./db/db.json'));
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes);
    console.log('Note added.');
});

module.exports = router;