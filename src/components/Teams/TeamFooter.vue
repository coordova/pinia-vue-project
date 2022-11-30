<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>

<script setup>
/* defineProps({
  team: Object
}); */

// importamos el store para el state handler
import {useTeamStore} from "@/stores/TeamStore";
let team = useTeamStore();

/* setTimeout(() => {
  team.grow(26);
}, 5000); */
</script>

<style scoped>

</style>