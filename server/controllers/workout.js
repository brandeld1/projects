const express = require('express');
const {get, add, update } = require('../models/workout');

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

app.get('/:name/:autocomplete', (req, res, next) => {
    if(req.params.autocomplete){
        get(req.params.name,req.params.autocomplete)
            .then(x => res.status(200).send(x))
            .catch(next);
    }
    else{
        console.log("0");
        get("0",0)
        .then(x => res.status(200).send(x))
            .catch(next);
    }
});

app.post('/:owningUser', (req, res, next) => {
    add(req.params.owningUser, req.body.name, req.body.reps, req.body.sets, 
        req.body.image, req.body.completed, req.body.time)
            .then(x => res.status(200).send(x))
            .catch(next);
});

app.patch('/:owningUser/:name/:complete', (req, res, next) => {
    update(req.params.owningUser, req.params.name, req.params.complete)
            .then(x => res.status(200).send(x))
            .catch(next);
});

module.exports = app;