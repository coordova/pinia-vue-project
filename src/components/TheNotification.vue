<script>
import TheNotificationMessage from "./TheNotificationMessage.vue";
import swal from "sweetalert";
// import TheNotificationMessage from "./TheNotificationMessage";
export default {
  name: "TheNotification",

  components: {TheNotificationMessage},

  data() {
    return {
      showPanels: true,
    }
  },

  methods: {
    flash(title, message, type) {
      swal(title, message, type);
      // swal('Success!', message, 'success');
    }
  },
}
</script>

<template>
  <div class="my-8 space-y-3">
    <h1 class="text-xl mb-5">Notification Center</h1>

    <button @click="showPanels = !showPanels" v-show="! showPanels" class="my-8 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-300">Show Notification</button>
    <button @click="showPanels = !showPanels" class="my-8 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-300">Show Notification</button>

    <TheNotificationMessage
        type="danger"
        header="You are eligible for a reward"
        @toggle="flash('OK!', 'Esto viene del $emit', 'error')"
    >
      <p>
        Go to your special offers page to se now.
      </p>
    </TheNotificationMessage>

    <TheNotificationMessage>Mensaje por default...</TheNotificationMessage>
    <TheNotificationMessage title="Ummm" type="info">Que cosas no!</TheNotificationMessage>
    <TheNotificationMessage title="Ok" type="dark" @toggle="flash('OK!', 'Esto viene del $emit', 'info')">Que cosas no!</TheNotificationMessage>




  </div>
</template>


<style scoped>

</style>