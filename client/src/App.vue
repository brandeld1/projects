<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import NavVue from './components/NavBar.vue';
    import Home from './components/Home.vue'

    
</script>

<template>
    
  <header>
    <NavVue />
  </header>

  <div class="container">
    <RouterView />
  </div>

</template>

<style scoped>

</style>