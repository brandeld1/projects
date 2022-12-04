const express = require('express');
const { getWorkouts, addWorkout, updateWorkout } = require('../models/workout');

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

app.get('/:owningUser', (req, res, next) => {
    getWorkouts()
            .then(x => res.status(200).send(x))
            .catch(next);
});

app.post('/:owningUser', (req, res, next) => {
    addWorkout(req.params.owningUser, req.body.name, req.body.reps, req.body.sets, 
        req.body.image, req.body.completed, req.body.time)
            .then(x => res.status(200).send(x))
            .catch(next);
});

app.patch('/:owningUser/:name/:complete', (req, res, next) => {
    updateWorkout(req.params.owningUser, req.params.name, req.params.complete)
            .then(x => res.status(200).send(x))
            .catch(next);
});

module.exports = app;