<script setup lang="ts">
    import { onBeforeMount } from "vue";
    import session  from '../stores/session'
    import workoutSession from '../stores/workouts'

        function getFriends(){
            for(let y=0;y<workoutSession.friendsWorkouts.length;y++){
                workoutSession.friendsWorkouts.pop();
            }
            var friendsArr=[];
            if(session.user.friends!=null){
                friendsArr=session.user.friends;
            }

            for(let x=0;x<workoutSession.completedWorkouts.length;x++){
                for(let y=0;y<friendsArr.length;y++){
                    if(workoutSession.completedWorkouts[x].owningUser.firstName==friendsArr[y]){
                        workoutSession.friendsWorkouts.push(workoutSession.completedWorkouts[x]);
                    }
                }
            }
        }
        onBeforeMount(getFriends);

</script>


<template>
    <ul><table class=" table is-bordered">
        <tr>
            <th>First Name of Friend</th>
            <th>Name of Workout</th>
            <th>Reps</th>
            <th>Sets</th>
        </tr>
        <tr v-for="item in workoutSession.friendsWorkouts">
        <td>{{ item.owningUser.firstName }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.reps }}</td>
        <td>{{ item.sets }}</td>
    </tr>
        </table>
    </ul>
</template>