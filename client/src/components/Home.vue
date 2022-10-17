<!-- eslint-disable prettier/prettier -->

<script setup lang="ts">
    import workoutSession from '../stores/workouts'

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
                  Check completed workouts
                </p>

                <div>
                  <label class=" checkbox panel-block" v-for="item in workoutSession.workouts">
                      <input type="checkbox">
                          Name: {{ item.name }},
                          Reps: {{ item.reps }},
                          Sets: {{ item.sets }}
                    </label>
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
