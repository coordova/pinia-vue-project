<script setup>
/* export default {
  name: "GitUserProfileCard"
} */
import axios from "axios";
import {onMounted, ref} from "vue"

const user = ref([])

// definicion de props
const props = defineProps({
  username: {type: String, required: true}
});

onMounted(async () => {
  await axios
      .get(`https://api.github.com/users/${props.username}`)
      .then(response => {
        user.value = response.data;
        // console.log(user);
      })
})



/*   const response = axios.get(`https://api.github.com/users/${props.username}`)
  user = response.data */

/* axios
    .get(`https://api.github.com/users/${props.username}`)
    .then( response => {
      const user = response.data;
      console.log(user);
    }); */

/* axios
    // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .get('https://api.github.com/users/danielkellyio')
    .then( response => console.log(response.data)) */
</script>

<template>
  <div class="container max-w-sm rounded-lg border p-0 mb-5 space-y-3 shadow-lg">
    <div>
      <a :href="user.html_url">
        <img :src="user.avatar_url" alt="{{ user.id }}" class="mb-3 object-cover rounded-t-lg">
      </a>
    </div>
    <div class="p-3">
      <a :href="user.html_url" class="font-semibold text-xl text-gray-500">{{ user.name }}</a>
      <p class="text-gray-500">Joined in {{ user.created_at }}</p>
      <div class="font-semibold">
        {{ user.bio }}
      </div>
    </div>
    <div class="flex gap-x-4 border-t-2 p-3 text-gray-500">
      <img src="public/person.svg" alt="person">
      {{ user.followers }} Friends
    </div>
    <!--User: {{ user.id }}-->
  </div>
</template>

<style scoped>

</style>