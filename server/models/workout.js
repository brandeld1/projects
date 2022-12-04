const list = [];
const { connect } = require('./mongo');
const COLLECTION_NAME = 'workout';

async function collection() {
    const client = await connect();
    return client.db('social_work').collection(COLLECTION_NAME);
}

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

async function addWorkout(owningUser, name, reps, sets, image, completed, time) {
//const add = async (owningUser, name, reps, sets, image, completed, time) => {
    const db = await collection();
    let workout = db.find({ owningUser: owningUser, name: name });
    console.log(workout);
    //let workout = list.find((workout) => workout.owningUser === owningUser && workout.name == name);
    if (workout) {
        //workout.sets = parseInt(workout.sets)+parseInt(sets);
        //workout.reps = parseInt(workout.reps)+parseInt(reps);

        //LEAVING OFF WHERE I DONT KNOW HOW TO ADD THE CURRENT VALUE OF SETS AND REPS
        //TO THE NEW GIVEN VALUE OF SETS AND REPS. I THINK I NEED TO USE THE $INC
        //OPERATOR BUT I DONT KNOW HOW TO USE IT. I THINK I NEED TO USE IT IN THE
        //UPDATEONE FUNCTION BUT I DONT KNOW HOW TO USE IT. I THINK I NEED TO USE IT
        //IN THE UPDATEONE FUNCTION BUT I DONT KNOW HOW TO USE IT. I THINK I NEED TO
        //USE IT IN THE UPDATEONE FUNCTION BUT I DONT KNOW HOW TO USE IT. I THINK I
        db.updateOne(workout, 
            {$set: {sets: workout.sets+sets,
                reps: reps+1245}});
            return db.findOne({owningUser: owningUser, name: name});

    } else {
        workout = { owningUser, name, reps, sets, image, completed, time };
        //list.push(workout);
        db.insertOne(workout);
        return workout;
    }
    //return "a";
};


async function getWorkouts() {
    const db = await collection();
    const data = db.find().toArray();
    return data;
}


//const update = async (owningUser, name, completed) => {
async function updateWorkout(owningUser, name, completed) {
    const db = await collection();
    if(completed){
        db.updateOne({owningUser: owningUser}, 
            {$set: {completed:true , time: new Date().toLocaleString()}});
        return 'success';
    }
    else{
        db.deleteOne({name}, list[index]);
        return 'deleted';
    }
    return "null";
}

module.exports = { addWorkout, getWorkouts, updateWorkout }