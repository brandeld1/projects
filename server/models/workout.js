
/*const workout= {
        owningUser: session.user,
        name: newName,
        reps: newReps,
        sets: newSets,
        image: newImage,
        completed: false,
        time: '',
    }*/
const list = [];

/**
 * @param {string} owningUser 
 * @param {string} name
 * @param {number} reps
 * @param {number} sets
 * @param {string} image
 * @param {boolean} completed
 * @param {string} time
 * @returns 
 */

const add = (owningUser, name, reps, sets, image, completed, time) => {
    let workout = list.find((workout) => workout.owningUser === owningUser && workout.name == name);
    if (workout) {
        workout.sets = parseInt(workout.sets)+parseInt(sets);
        workout.reps = parseInt(workout.reps)+parseInt(reps);

    } else {
        workout = { owningUser, name, reps, sets, image, completed, time };
        list.push(workout);
    }
    return workout;
};

const get = (owningUser) => {
    return list;
};

const update = (owningUser, name, completed) => {
    if(completed){
        for(let i = 0; i<list.length; i++){
            if(list[i].owningUser === owningUser){
                list[i].completed = true;
                list[i].time = new Date().toLocaleString();
            }
        }
    }
    else{
        const index = list.findIndex((workout) => workout.name == name);
        if (index > -1) {
            list.splice(index, 1);
        }
    }
    return "null";
}

module.exports = { add, get, update }