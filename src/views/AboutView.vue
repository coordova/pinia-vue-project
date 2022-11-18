<script setup>
  // import swal from "sweetalert";

  import { UseFlash } from "@/composables/UseFlash";

  let { flash } = UseFlash();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>
        <button @click="flash('Arg!', 'It works from about page', 'error')">Click me</button>
      </p>
    </div>
  </div>
</template>

<!--<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>-->
