<script setup lang="ts">

import { onBeforeMount, reactive } from 'vue';

import workoutSession from '../stores/workouts'
import session, {} from '../stores/session'

    var newName: string;
    var newReps: number;
    var newSets: number;


  function addToWorkouts(newName2: any, newReps2: any, newSets2: any) {
    var date= new Date();
    const workout= {
        owningUser: session.user,
        name: newName2,
        reps: newReps2,
        sets: newSets2,
        time: '',
    }
    workoutSession.workouts.push(workout);
  }

  function popWorkout(){
    workoutSession.workouts.pop();
  }

</script>

<template>
    <div class="columns is-centered">
        <div class="column is-mobile">
            <h2 class="title is-4">Enter new workout</h2>
            <ul>
                <li><input class="input is-primary" v-model="newName" placeholder="Enter Workout Name"></li>
                <li><input class="input is-primary" v-model="newReps" placeholder="Enter Reps/Time"></li>
                <li><input class="input is-primary" v-model="newSets" placeholder="Enter Sets/Repition"></li>
                <li><button class="button is-primary actionButton" @click="addToWorkouts(newName,newReps,newSets)">Add new workout</button></li>
            </ul>
        </div>
        <div class="column is-mobile">
                <h2 class="title is-4">Routine</h2>
                <ul>
                    <li><table class=" table is-bordered">
                        <tr>
                            <th>Name</th>
                            <th>Workout</th>
                            <th>Reps</th>
                            <th>Sets</th>
                        </tr>
                        <tr v-for="item in workoutSession.workouts">
                        
                            <td v-if="item.owningUser.firstName==session.user.firstName">{{ item.owningUser.firstName }}</td>
                            <td v-if="item.owningUser.firstName==session.user.firstName">{{ item.name }}</td>
                            <td v-if="item.owningUser.firstName==session.user.firstName">{{ item.reps }}</td>
                            <td v-if="item.owningUser.firstName==session.user.firstName">{{ item.sets }}</td>
                        
                        </tr>
                    </table></li>
                    <li><button class = "button is-primary actionButton" @click="popWorkout()">Remove workout</button></li>
                </ul>
        </div>
    </div>

</template>

    
<style lang="scss">

    .actionButton{
        margin:20px;
    }

    h2 {
        text-align:center;
    }

    ul {
    overflow:hidden;
    list-style-type: none;
    display: block;
       li {
          width: 200px;
          padding: 5px;
          margin: 5px;
          margin-left:auto;
          margin-right:auto;
      }
    }

    table{
        margin-left:auto;
        margin-right:auto;
    }
</style>
    