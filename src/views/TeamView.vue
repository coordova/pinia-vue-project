<script setup>

  import team from "@/team.json";
  import TeamHeader from "@/components/Teams/TeamHeader.vue";
  import TeamMembers from "@/components/Teams/TeamMembers.vue";
  import TeamFooter from "@/components/Teams/TeamFooter.vue";

  // console.log(team)
</script>

<template>
  <div class="container mx-auto p-4">

    <TeamHeader :team="team" />

    <div class="place-self-center flex flex-col gap-y-3 mx-auto" style="width: 725px">

      <TeamMembers :team="team" />

    </div>

    <TeamFooter :team="team" />

  </div>

</template>

<style scoped>

</style>