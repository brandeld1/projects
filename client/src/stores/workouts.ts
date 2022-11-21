import { reactive, VueElement } from "vue";

import session from './session'
import type {User} from './session'

export function getWorkouts() {
    return workoutsList;
}

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
    workoutsList.push(workout);
    console.log(workoutsList);
}

export function addToCompletedWorkouts() {
      for(let i=0;i<workoutsList.length;i++){
        if(workoutsList[i].owningUser === session.user){
            var today = new Date();
            workoutsList[i].time=today.getMonth()+1+'/'+today.getDate();
            workoutsList[i].completed=true;
        }
      }
      };

export function popWorkout(){
    workoutsList.pop();
}

export function getFriends(){
    let friendsWorkouts: Array<Workout> = [];

    var friendsArr=[];
    if(session.user.friends!=null){
        friendsArr=session.user.friends;
    }


    if(workoutsList!==null){
        for(let x=0;x<workoutsList.length;x++){
            for(let y=0;y<friendsArr.length;y++){

                    if(workoutsList[x].owningUser.firstName==friendsArr[y] && 
                        workoutsList[x].completed==true){
                        friendsWorkouts.push(workoutsList[x]);
                    }
                }
            
        }
    }

    return friendsWorkouts;
}


const workoutsList = reactive([] as Workout[])

export interface Workout {
    owningUser: User;
    name: string;
    reps: number;
    sets: number;
    image: string;
    completed: boolean;
    time: string;
}

export default workoutsList;