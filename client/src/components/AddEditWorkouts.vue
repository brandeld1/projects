<script setup lang="ts">

import { reactive } from 'vue';

import workoutSession from '../stores/workouts'


  function addToWorkouts(newName: any, newReps: any, newSets: any) {
    var date= new Date();
    const workout= {
        name: newName,
        reps: newReps,
        sets: newSets,
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
            <ul class>
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
                            <th>Workout</th>
                            <th>Reps</th>
                            <th>Sets</th>
                        </tr>
                        <tr v-for="item in workoutSession.workouts">
                            <td>{{ item.name }}</td>
                            <td>{{ item.reps }}</td>
                            <td>{{ item.sets }}</td>
                            {{ item.time}}
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
    