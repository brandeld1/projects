import { reactive, VueElement } from "vue";

const workoutSession = reactive( {
    workouts: [] as Workout[] | any,
    completedWorkouts: [] as Workout[] | any,
});

export class Workout {
    name?: string;
    reps?: number;
    sets?: number;
}

export default workoutSession;