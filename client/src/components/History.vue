<script setup lang="ts">

    import workoutSession from '../stores/workouts'

    import session from '../stores/session'

</script>

<template>
    <div v-for="item in workoutSession.completedWorkouts">
     <label class="panel-block" v-if="item.owningUser.firstName==session.user.firstName">
        <div v-if="item.owningUser.firstName==session.user.firstName">Name: {{ item.name }},</div>
        <div v-if="item.owningUser.firstName==session.user.firstName">Reps: {{ item.reps }},</div>
        <div v-if="item.owningUser.firstName==session.user.firstName">Sets: {{ item.sets }},</div>
        <div v-if="item.owningUser.firstName==session.user.firstName">Time: {{ item.time }},</div>
        <div><div v-if="item.owningUser.firstName==session.user.firstName"><img :src="item.image" width="112" height="28"></div></div>
    </label>
</div>
</template>

    
<style lang="scss">
</style>
    