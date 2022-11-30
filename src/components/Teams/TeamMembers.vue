<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
defineProps({
  team: Object
});
</script>

<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
    <th class="text-left px-6 py-2">Name</th>
    <th class="text-left px-6 py-2">Email</th>
    <th class="text-left px-6 py-2">Status</th>
    </thead>
    <tbody>
    <TeamMember v-for="member in team.members" :name="member.name" :email="member.email" :status="member.status" />
    <!--<tr class="bg-gray-100">
      <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
        <img src="https://i.pravatar.cc/50?u=james@doe.com" alt="" class="rounded-xl">
        James Doe
      </td>
      <td class="text-gray-500 px-6 py-4">james@doe.com</td>
      <td class="px-6 py-4">
        <button class="text-green-400 text-xl">Active</button>
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
        <img src="https://i.pravatar.cc/50?u=sarah@doe.com" alt="" class="rounded-xl">
        Sarah Doe
      </td>
      <td class="text-gray-500 px-6 py-4">sarah@doe.com</td>
      <td class="px-6 py-4">
        <button class="text-green-400 text-xl">Active</button>
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
        <img src="https://i.pravatar.cc/50?u=steven@doe.com" alt="" class="rounded-xl">
        Steven Doe
      </td>
      <td class="text-gray-500 px-6 py-4">steven@doe.com</td>
      <td class="px-6 py-4">
        <button class="text-green-400 text-xl">Active</button>
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
        <img src="https://i.pravatar.cc/50?u=jen@doe.com" alt="" class="rounded-xl">
        Jen Doe
      </td>
      <td class="text-gray-500 px-6 py-4">jen@doe.com</td>
      <td class="px-6 py-4">
        <button class="text-green-400 text-xl">Active</button>
      </td>
    </tr>

    <tr class="bg-gray-100">
      <td class="text-xl font-medium flex items-center gap-x-4 px-6 py-4">
        <img src="https://i.pravatar.cc/50?u=joe@doe.com" alt="" class="rounded-xl">
        Joe Doe
      </td>
      <td class="text-gray-500 px-6 py-4">joe@doe.com</td>
      <td class="px-6 py-4">
        <button class="text-green-400 text-xl">Active</button>
      </td>
    </tr>-->
    </tbody>
  </table>

  <p class="text-right text-gray-600 italic" v-show="team.spots === team.members.length">There are no remaining team spots. Upgrade to add more.</p>

</template>

<style scoped>

</style>