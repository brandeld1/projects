const express = require('express');
const { get, add, remove } = require('../models/workout');

const app = express.Router();


app.get('/:owningUser', (req, res) => {
    res.send(get(req.params.owningUser));
});

app.post('/:owningUser/:name/:sets/:reps', (req, res) => {
    res.send(add(req.params.sets, req.params.owningUser, req.params.reps, req.params.name));
});

app.delete('/:owningUser/:name', (req, res) => {
    res.send(remove(req.params.owningUser, req.params.name));
});

module.exports = app;