<script setup>

  // import team from "@/team.json";
  import TeamHeader from "@/components/Teams/TeamHeader.vue";
  import TeamMembers from "@/components/Teams/TeamMembers.vue";
  import TeamFooter from "@/components/Teams/TeamFooter.vue";

  // import el dedicated Pinia store (TeamStore) for managing the state for a team
  import {useTeamStore} from "@/stores/TeamStore";
  // lo asignamos a una variable
  let team = useTeamStore();

  // llamamos al metodo fill de useTeamsStore
  team.fill();

  // como tenemos un 'store' dedicado de 'pinia' para nuestro TEAM, se puede manipular este al vuelo.
  // ej.
  setTimeout(() => {
    team.grow(20);
  }, 2000);

  // console.log(team)
</script>

<template>
  <div class="container mx-auto p-4">

    <!--<TeamHeader :team="team" />-->
    <TeamHeader />

    <div class="place-self-center flex flex-col gap-y-3 mx-auto" style="width: 725px">

      <!--<TeamMembers :team="team" />-->
      <TeamMembers />

    </div>

    <!--<TeamFooter :team="team" />-->
    <TeamFooter />

  </div>

</template>

<style scoped>

</style>