<script setup>

  // import team from "@/team.json";
  import TeamHeader from "@/components/Teams/TeamHeader.vue";
  import TeamMembers from "@/components/Teams/TeamMembers.vue";
  import TeamFooter from "@/components/Teams/TeamFooter.vue";

  // import el dedicated Pinia store (TeamStore) for managing the state for a team
  import {useTeamStore} from "@/stores/TeamStore";
  import Modal from "@/components/Teams/Modal.vue";
  import {ref} from "vue";

  // lo asignamos a una variable
  let team = useTeamStore();

  // llamamos al metodo fill de useTeamsStore
  team.fill();

  // como tenemos un 'store' dedicado de 'pinia' para nuestro TEAM, se puede manipular este al vuelo.
  // ej.
  setTimeout(() => {
    team.grow(20);
  }, 1000);

  let showModal = ref(false);
  // console.log(team)
</script>

<template>
  <div class="container mx-auto p-4">

    <!--<TeamHeader :team="team" />-->
    <TeamHeader @add="showModal = true" />

    <div class="place-self-center flex flex-col gap-y-3 mx-auto" style="width: 725px">

      <!--<TeamMembers :team="team" />-->
      <TeamMembers />

    </div>

    <!--<TeamFooter :team="team" />-->
    <TeamFooter />

    <Modal :show="showModal" @close="showModal=false">
      <template #header>
        <h3 class="font-semibold text-xl">Add member</h3>
      </template>

      <template #default>
        <p>Need to add a new member to your team?</p>
        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email address..." class="flex-1 py-3">
            <button class="btn btn-secondary">Add</button>
          </div>
        </form>
      </template>

      <!--<template #footer>
        Override the footer
      </template>-->
    </Modal>

  </div>

</template>

<style scoped>

</style>