const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const dbpath = path.join(__dirname, '../../db/db.json');

var notesArray = [];

router.get('/notes', (req, res) => {
    res.sendFile(dbpath);
});

router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: JSON.stringify(notesArray.length)
    };
    notesArray.push(newNote);
    content = JSON.stringify(notesArray);
    fs.writeFile(dbpath, content, function(err) {
        if (err) throw err;
        console.log('Note added.');
    });
    res.json(dbpath);
});

module.exports = router;