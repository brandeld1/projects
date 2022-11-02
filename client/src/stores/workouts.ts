import { reactive, VueElement } from "vue";

import type {User} from './session'

const workoutSession = reactive( {
    workouts: [] as Workout[] | any,
    completedWorkouts: [] as Workout[] | any,
    friendsWorkouts: [] as String[] | any,
    tempWorkouts: [] as Workout[] | any,
});

export class Workout {
    owningUser?: User;
    name?: string;
    reps?: number;
    sets?: number;
    newImage?: string;
}

export class tempVars {
    newName?: string;
    newReps?: number;
    newSets?: number;
    newImage?: string;
}

export default workoutSession;