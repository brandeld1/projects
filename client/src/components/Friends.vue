<script setup lang="ts">
    import { onBeforeMount } from "vue";
    import session  from '../stores/session'
    import { getFriends } from '../stores/workouts'

    /*
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
        onBeforeMount(getFriends);*/

</script>


<template>
    <ul><table class=" table is-bordered">
        
        <tr v-for="item in getFriends()">
            <article class="media">
                      <figure class="media-left">
                        <p class="image is-64x64">
                          <img :src=item.owningUser.image>
                        </p>
                      </figure>
                      <div class="media-content">
                        <div class="content">
                          <p>
                            <strong>{{item.name}}</strong>
                            
                            Reps/Time: {{item.reps}},  Sets/Repition: {{item.sets}} <br> <img :src="item.image" width="512" height="512">
                          </p>
                        </div>
                      </div>
                    </article>
    </tr>
        </table>
    </ul>
</template>