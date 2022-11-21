const express = require('express');
const { get, add, update } = require('../models/workout');

const app = express.Router();


app.get('/:owningUser', (req, res) => {
    res.send(get(req.params.owningUser));
});

app.post('/:owningUser', (req, res) => {
    res.send(add(req.body.sets, req.params.owningUser, req.body.reps, req.body.name));
});

app.patch('/:owningUser/:name', (req, res) => {
    res.send(update(req.params.owningUser, req.params.name));
});

module.exports = app;