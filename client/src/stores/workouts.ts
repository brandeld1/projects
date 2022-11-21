import { reactive, VueElement } from "vue";

import session from './session'
import type {User} from './session'

const workoutSession = reactive( {
    workouts: Array<Workout>(),
});

export function addToWorkouts(newName: string, newReps: number, 
                                newSets: number, newImage: string) {
    const workout= {
        owningUser: session.user,
        name: newName,
        reps: newReps,
        sets: newSets,
        image: newImage,
        completed: false,
        time: '',
    }
    if(workoutSession.workouts == null) {
        workoutSession.workouts = [workout];
    }
    else{
        workoutSession.workouts.push(workout);
    }
}

export function getFriends(){
    let friendsWorkouts: Array<Workout> = [];

    var friendsArr=[];
    if(session.user.friends!=null){
        friendsArr=session.user.friends;
    }


    if(workoutSession.workouts!==null){
        for(let x=0;x<workoutSession.workouts.length;x++){
            for(let y=0;y<friendsArr.length;y++){

                    if(workoutSession.workouts[x].owningUser.firstName==friendsArr[y] && 
                        workoutSession.workouts[x].completed==true){
                        friendsWorkouts.push(workoutSession.workouts[x]);
                    }
                }
            
        }
    }

    return friendsWorkouts;
}

export class Workout {
    owningUser!: User;
    name!: string;
    reps!: number;
    sets!: number;
    image!: string;
    completed!: boolean;
    time!: string;
}

export default workoutSession;