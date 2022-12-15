<script setup lang="ts">

import {addToWorkouts, removeWorkout, getAutocomplete} from '../stores/workouts'
import workoutsList from '../stores/workouts'
import session from '../stores/session'
import { ref } from 'vue';

    var newName: string;
    var newReps: number;
    var newSets: number;
    var newImage: string;
    var removeName: string;

    const input = ref("");
    
</script>

<template>
    <div class="columns is-centered">
        <div class="column is-mobile">
            <h2 class="title is-4">Enter new workout</h2>
            <ul>
                <li><input class="input is-primary" v-model="input" placeholder="Enter Workout Name"></li>
                <div v-for="item in getAutocomplete(input)"> {{ item }} </div>
                <li><input class="input is-primary" v-model="newReps" placeholder="Enter Reps/Time"></li>
                <li><input class="input is-primary" v-model="newSets" placeholder="Enter Sets/Repition"></li>
                <li><input class="input is-primary" v-model="newImage" placeholder="Enter Image Of Workout"></li>
                <li><button class="button is-primary actionButton" @click="addToWorkouts(newName, newReps, newSets, newImage)">Add new workout</button></li>
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
                            <th>Image</th>
                        </tr>
                        
                        <tr  v-if="session.user != null" v-for="item in workoutsList">
                            <td v-if="(item.completed == false && item.owningUser == session.user.firstName)">{{ item.name }}</td>
                            <td v-if="(item.completed == false && item.owningUser == session.user.firstName)">{{ item.reps }}</td>
                            <td v-if="(item.completed == false && item.owningUser == session.user.firstName)">{{ item.sets }}</td>
                            <td v-if="(item.completed == false && item.owningUser == session.user.firstName)"><img :src="item.image" width="112" height="28"></td>
                        
                        </tr>
                    </table></li>
                    <li><input class="input is-primary" v-model="removeName" placeholder="Enter Image Of Workout"></li>
                    <li><button class = "button is-primary actionButton" @click="removeWorkout(removeName)">Remove workout</button></li>
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
    