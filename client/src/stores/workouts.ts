import { reactive, VueElement, watch } from "vue";

import session from './session'
import type {User} from './session'
import myFetch from "@/services/myFetch";


const PATCH =  'PATCH';

export interface Workout {
    owningUser: User;
    name: string;
    reps: number;
    sets: number;
    image: string;
    completed: boolean;
    time: string;
}

const workoutsList = reactive([] as Workout[])

export function load() {
    myFetch(`workout/${session.user?.firstName}`).then((data) => {
        workoutsList.splice(0, workoutsList.length, ...data as Workout[]);
     });

}
watch(()=> session.user, load);

export function getMyWorkouts(){
    let myWorkouts: Array<Workout> = [];
    for(let i=0;i<workoutsList.length;i++){
        if(workoutsList[i].owningUser == session.user?.firstName){
            myWorkouts.push(workoutsList[i]);
        }
    }
    return myWorkouts;
}

export function addToWorkouts(newName: string, newReps: number, 
                                newSets: number, newImage: string) {
    myFetch(`workout/${session.user?.firstName}`, 
                { name: newName, reps: newReps, 
                    sets: newSets, image: newImage, 
                    completed:false, time:''}).then((data) => {
                       const i = workoutsList.findIndex((w) => w.name === newName);
                       if( i != -1 ){
                            workoutsList[i] = data as Workout;
                       }
                          else{ 
                            workoutsList.push(data as Workout);
                          }
                    });
}

export function addToCompletedWorkouts() {
    myFetch(`workout/${session.user?.firstName}/${"null"}/${true}`, {}, PATCH).then((data) => {
        for(let i = 0; i<workoutsList.length; i++){
            if(workoutsList[i].owningUser === session.user.firstName && workoutsList[i].completed === false){
                workoutsList[i].completed = true;
                workoutsList[i].time = new Date().toLocaleString();
            }
        }
    });
}

export function removeWorkout(newName: string){
    myFetch(`workout/${session.user?.firstName}/${newName}/${false}`, {}, PATCH).then((data) => {
        const i = workoutsList.findIndex((w) => w.name === newName);
        if( i != -1 ){
            workoutsList.splice(i,1);
        }
    });
}

export function getFriends(){
    let friendsWorkouts: Array<Workout> = [];

    var friendsArr=[];
    if(session.user != null){
        friendsArr=session.user.friends;
    }

    if(workoutsList!==null){
        for(let x=0;x<workoutsList.length;x++){
            for(let y=0;y<friendsArr.length;y++){
                    if(workoutsList[x].owningUser==friendsArr[y] && 
                        workoutsList[x].completed==true){
                        friendsWorkouts.push(workoutsList[x]);
                    }
                }
            
        }
    }

    return friendsWorkouts;
}

export default workoutsList;