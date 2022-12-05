<script setup lang="ts">

    import workoutSession from '../stores/workouts'

    import session from '../stores/session'
    import workoutsList from '../stores/workouts';

</script>

<template>
    <div  v-if="session.user != null" v-for="item in workoutsList">
        <div v-if="item.completed == true && item.owningUser == session.user.firstName">
            <label class="panel-block">
                <div>Name: {{ item.name }},</div>
                <div>Reps: {{ item.reps }},</div>
                <div>Sets: {{ item.sets }},</div>
                <div>Time: {{ item.time }},</div>
                <div><div><img :src="item.image" width="112" height="28"></div></div>
            </label>
        </div>
    </div>
</template>

    
<style lang="scss">
</style>
    