<script setup lang="ts">

import session from '../stores/session'
  
  var newFirstName: string;
  var newLastName: string;
  var newFriends: string;
  var newImage: string;

  function addToUsers(newFirstName2: string, newLastName2: string, newFriends2: string, newImage2: string) {
    const friendsArr = newFriends2.split(" ");
    const user= {
        firstName: newFirstName2,
        lastName: newLastName2,
        friends: friendsArr,
        image: newImage2,
    }
    session.users.push(user);
    console.log(newImage);
  }

  function popUser(){
    session.users.pop();
  }

</script>

<template>
  <ul>
        <li><input class="input is-primary" v-model="newFirstName" placeholder="Enter First Name"></li>
        <li><input class="input is-primary" v-model="newLastName" placeholder="Enter Last Name"></li>
        <li><input class="input is-primary" v-model="newFriends" placeholder="Enter Friends"></li>
        <li><input class="input is-primary" v-model="newImage" placeholder="Enter Image"></li>
        <li><button class="button is-primary actionButton" @click="addToUsers(newFirstName,newLastName,newFriends,newImage)">Add new user</button></li>
    </ul>

    <ul><table class=" table is-bordered">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Friends</th>
            <th>Profile Picture</th>
        </tr>
        <tr v-for="item in session.users">
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>     
                    <td><tr v-for="item2 in item.friends">{{ item2 }}</tr></td>
                    <td><img :src="item.image" width="112" height="28"></td>
        </tr>
        </table>
    </ul>

    <ul><li><button class = "button is-primary actionButton" @click="popUser()">Remove user</button></li></ul>

</template>

<style scoped>
    input[type="file"] {
      display: none;
    }
</style>