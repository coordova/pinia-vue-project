<script setup>
import Modal from "@/components/Teams/Modal.vue";
import {ref} from "vue";
import {useTeamStore} from "@/stores/TeamStore";

let showModal = ref(false);

let team = useTeamStore();
</script>

<template>
  <button
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="! team.spotsRemaining"
      @click="showModal = true"
  >Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>

  <Teleport to="body">
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
  </Teleport>
</template>

<style scoped>

</style>