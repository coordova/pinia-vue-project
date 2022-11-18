<script>
import TheNotificationMessage from "./TheNotificationMessage.vue";
// import TheNotificationMessage from "./TheNotificationMessage";
export default {
  name: "TheNotification",

  components: {TheNotificationMessage},

  data() {
    return {
      showPanel: true
    }
  },

  methods: {
    /* closePanel() {
      this.showPanel = !this.showPanel
    } */
  }
}
</script>

<template>
  <div class="my-8">
    <h1 class="text-xl mb-5">Notification Center</h1>
    <button @click="showPanel = !showPanel" v-show="! showPanel" class="my-8 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-300">Show Notification</button>
    <div v-show="showPanel">
      <TheNotificationMessage
          type="danger"
          header="You are eligible for a reward"
          @toggle="showPanel = !showPanel"
      >
        <p>
          Go to your special offers page to se now.
        </p>
      </TheNotificationMessage>
    </div>
  </div>
</template>


<style scoped>

</style>