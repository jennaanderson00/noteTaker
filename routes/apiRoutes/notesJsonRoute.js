// reads db.json and returns all saved notes as json
const { notes } = require('../../db/db.json');
const router = require('express').Router();

router.get('/db', (req, res) => {
    let results = notes;
    res.json(results);
});
router.post('/db', (req, res) => {
    req.body.id = notes.length.toString();
});