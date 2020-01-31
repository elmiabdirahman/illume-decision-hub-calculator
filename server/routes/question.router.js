const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route for questions
router.get('/', (req, res) => {
    console.log('In getQuestion route with')
    let sqlQuery = `SELECT * FROM PHIL'S-TABLE-NAME`
    pool.query(sqlQuery).then(result => {
        res.send(result.rows);
    })
    .catch( error => {
        console.log('Error with GET question', error);
        res.sendStatus(500);
    })
});

module.exports = router;