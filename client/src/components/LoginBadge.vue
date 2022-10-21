<script setup lang="ts">
import workoutSession from '../stores/workouts';
import session, { login, logout } from '../stores/session';

    var newFirstName: string;
    var newLastName: string;

    function checkName(newFirstName2:string, newLastName2:string){
        for(let x=0;x<session.users.length;x++){
            if(session.users[x].firstName == newFirstName2 && session.users[x].lastName == newLastName2){
                login(newFirstName2,newLastName2, session.users[x].friends);
            }
        }
    }

    function clear(){
        logout();
        for(let x=0;x<workoutSession.tempWorkouts.length;x++){
            workoutSession.tempWorkouts.pop();
        }
    }
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        <ul>
            <li><input class="input is-primary" v-model="newFirstName" placeholder="Enter First Name"></li>
            <li><input class="input is-primary" v-model="newLastName" placeholder="Enter Last Name"></li>
        </ul>

        <router-link class = "button is-primary" to="/admin">
            Sign up
        </router-link>

        <a class="button is-light" @click="checkName(newFirstName, newLastName)">
            Log in
        </a>
    </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="clear()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
    ul{
        list-style-type: none;
    }
    li{
        float:left;
        margin-bottom:15px;
    }

</style>