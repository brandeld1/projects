<script setup lang="ts">

import session from '../stores/session'
  var newFirstName: string;
  var newLastName: string;
  var newFriends: string;
  var newImage: File;

  function addToUsers(newFirstName2: string, newLastName2: string, newFriends2: string) {
    const friendsArr = newFriends2.split(" ");
    const user= {
        firstName: newFirstName2,
        lastName: newLastName2,
        friends: friendsArr,
        image: newImage,
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
        <li>
          <label class="file-select">
    <!-- We can't use a normal button element here, as it would become the target of the label. -->
            <div class="button is-primary">
      <!-- Display the filename if a file has been selected. -->
              <span v-if="newImage">Selected File: {{newImage.name}}</span>
              <span v-else>Select File</span>
            </div>
    <!-- Now, the file input that we hide. -->
            <input type="file" @change="handleFileChange"/>
          </label>
        </li>
        <li><button class="button is-primary actionButton" @click="addToUsers(newFirstName,newLastName,newFriends)">Add new user</button></li>
    </ul>

    <ul><table class=" table is-bordered">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Friends</th>
        </tr>
        <tr v-for="item in session.users">
                    <td>{{ item.firstName }}</td>
                    <td>{{ item.lastName }}</td>     
                    <td><tr v-for="item2 in item.friends">{{ item2 }}</tr></td>
                    <td><img :src="item.image"></td>
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