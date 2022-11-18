<script setup>
/* import swal from 'sweetalert';
export default {
  methods: {
    flash(message) {
      swal('Success!', message, 'success');
    }
  },
  name: "ContactView"
} */

import { UseFlash } from "@/composables/UseFlash";

let { flash } = UseFlash();
</script>

<template>
  <div class="about">
    <h1>This is an contact page</h1>
    <div>
      <p>
        <button @click="flash('Arg!', 'It works from contact page', 'error')">Click me</button>
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>