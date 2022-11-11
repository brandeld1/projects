
// Workout: { id: 1, name: pushup, sets: 1, reps: 1, owningUser: 'mp@np.edu' }
const list = [];

;
const add = (sets, owningUser, reps, name) => {
    let workout = list.find((workout) => workout.owningUser === owningUser && workout.name == name);
    if (workout) {
        workout.sets += +sets;
        workout.reps += + reps;

    } else {
        list.push({ id: list.length + 1, name, sets: +sets, reps: +reps, owningUser });
    }
    return workout;
};

const get = (owningUser) => {
    return list.filter((workout) => workout.owningUser === owningUser);
};

const remove = (owningUser, name) => {
  const index = list.findIndex((workout) => workout.owningUser === owningUser && workout.name == name);
  if (index > -1) {
    list.splice(index, 1);
  }
}

module.exports = { add, get, remove }