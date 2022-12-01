const express = require('express');
const { get, add, update } = require('../models/workout');

const app = express.Router();

/*const workout= {
        owningUser: session.user,
        name: newName,
        reps: newReps,
        sets: newSets,
        image: newImage,
        completed: false,
        time: '',
    }*/

app.get('/:owningUser', (req, res) => {
    res.send(get());
});

app.post('/:owningUser', (req, res) => {
    res.send(add(req.params.owningUser, req.body.name, req.body.reps, req.body.sets, 
        req.body.image, req.body.completed, req.body.time));
});

app.patch('/:owningUser/:name/:complete', (req, res) => {
    res.send(update(req.params.owningUser, req.params.name, req.params.complete));
});

module.exports = app;