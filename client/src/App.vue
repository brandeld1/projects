<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
  import HelloWorld from './components/RecentWorkouts.vue'
</script>

<template>
  
  <header>
    <NavBar />
  </header>

  <div class="container">
    <RouterView />
  </div>
  <div>
    <HelloWorld />
  </div>

</template>

<style scoped>

</style>
