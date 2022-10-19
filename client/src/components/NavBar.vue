<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './LoginBadge.vue';

    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
          </a>
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-start">
            <router-link to="/home" class="navbar-item">
              Home
            </router-link>
      
            <router-link class="navbar-item" to="/friends">
              Friends
            </router-link>
      
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
      
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/addedit">
                  Add/Edit
                </router-link>
                <router-link class="navbar-item" to="/history">
                  History
                </router-link>
                <router-link class="navbar-item" to="/admin">
                  Admin
                </router-link>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">

              <login-badge></login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }
</style>