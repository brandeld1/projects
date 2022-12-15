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
 * @param {number} autocomplete
 * @returns 
 */

const add = async (owningUser, name, reps, sets, image, completed, time) =>{
    const db = await collection();
    let workoutItem = await db.findOne({ owningUser, name })
    if (workoutItem) {
        workoutItem.sets = parseInt(workoutItem.sets)+parseInt(sets);
        workoutItem.reps = parseInt(workoutItem.reps)+parseInt(reps);
        db.updateOne({ owningUser, name }, { $set: workoutItem })
    } else {
        workoutItem = { owningUser, name, reps, sets, image, completed, time };
        //list.push(cartItem);
        await db.insertOne(workoutItem)
    }
    return { ...workoutItem};
};

const get = async ( name, autocomplete ) => {
    const db = await collection();
    if( autocomplete == 1){
        const data = db.find({name: {$regex: name, $options: 'i'}}).toArray();
        return data;
    }
    else{
        const data = db.find().toArray();
        return data;
    }
}


//const update = async (owningUser, name, completed) => {
const update = async (owningUser, name, completed) => {
    const db = await collection();
    if(completed){
        db.updateMany({owningUser: owningUser}, 
            {$set: {completed:true , time: new Date().toLocaleString()}});
        return db.find({owningUser: owningUser, name: name, completed: true}).toArray();
    }
    else{
        return db.deleteMany({owningUser: owningUser, name: name});
    }
    return "null";
}

module.exports = { add, get, update }