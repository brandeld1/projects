<script setup lang="ts">

import { reactive } from 'vue';

import session from '../stores/session'
  var newFirstName: any;
  var newLastName: any;
  var newFriends: any;

  function addToUsers(newFirstName: string, newLastName: string, newFriends: string) {
    const friendsArr = newFriends.split(" ");
    const user= {
        firstName: newFirstName,
        lastName: newLastName,
        friends: friendsArr,
    }
    session.users.push(user);
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
        </tr>
        </table>
    </ul>

    <ul><li><button class = "button is-primary actionButton" @click="popUser()">Remove user</button></li></ul>

</template>