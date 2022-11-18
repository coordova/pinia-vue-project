<script setup>
import GitUserProfileCard from "./GitUserProfileCard.vue";
import {onMounted} from "vue";
import axios from "axios";

const usernames = ['coordova', 'danielkellyio', 'hootlex', 'rahaug', 'akryum'];


// lifecycle hooks
/* onMounted(() => {
  // console.log(`The initial count is `)
  axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .get('https://api.github.com/users/danielkellyio')
      .then( response => console.log(response.data))
}) */
/* export default {
  name: "GitUserProfile",
  components: {}

}
*/
</script>

<template>
  <h1 class="text-2xl font-semibold my-4">
    GitHub Profiles
  </h1>
  <div v-for="username in usernames">
    <!--{{ username }}-->
    <!--<git-user-profile-card :username="username"></git-user-profile-card>-->
    <GitUserProfileCard :username="username"/>
  </div>
</template>

<style scoped>

</style>