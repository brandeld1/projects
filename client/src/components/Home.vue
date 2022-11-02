<!-- eslint-disable prettier/prettier -->

<script setup lang="ts">
    import workoutSession from '../stores/workouts'
    import session from '../stores/session'

    function addToCompletedWorkouts() {
      while(workoutSession.workouts.length!=0){
        var today = new Date();
        const workoutHistory = workoutSession.workouts.pop();
        workoutHistory.time=(today.getMonth()+1)+'/'+today.getDate();
        workoutSession.completedWorkouts.push(workoutHistory);
      };
    }

</script>

<template>
  <div class="about"><br>
    <h1 class="title">Welcome Back!</h1>
              <p class="panel-heading">
                  Do you want to post these workouts?
                </p>

                <div v-for="item in workoutSession.workouts">
                  <div v-if="item.owningUser.firstName==session.user.firstName">
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
                  </div>
                  
                </div>
</div> 
  <button class = "button is-primary actionButton" @click="addToCompletedWorkouts()">Workouts Completed</button>
</template>

<style lang="scss">
  h1{
    text-align:center;
  }

  ul {
      display: flex;

      li {
          width: 200px;
          padding: 5px;
          margin: 5px;
      }
  }
</style>
