<script setup lang="ts">

    import workoutSession from '../stores/workouts'

</script>

<template>
     <label class="panel-block" v-for="item in workoutSession.completedWorkouts">
        Name: {{ item.name }},
        Reps: {{ item.reps }},
        Sets: {{ item.sets }},
        Time: {{ item.time }}
    </label>

</template>

    
<style lang="scss">
</style>
    