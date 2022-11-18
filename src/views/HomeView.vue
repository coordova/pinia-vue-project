<script setup>
// import TheWelcome from "../components/TheWelcome.vue";
import { UseFlash } from "@/composables/UseFlash";

import { UseStorage } from "@/composables/UseStorage";

let { flash } = UseFlash();

let food = UseStorage('food', 'salad');
let age = UseStorage('age', '11');

// Refactor to defineProps and defineEmits
/*import { onMounted, ref} from "vue";


let textarea = ref(null);

onMounted(() => {

})
*/

import TabbableTextarea from "@/components/TabbableTextarea.vue";
import {ref} from "vue";

let comment = ref('test value...');

setTimeout(() => {
  comment.value = 'It works fuck you bitch!';
}, 2000);

</script>

<template>
  <main>
    <p>
      What is your favourite food? <input type="text" v-model="food">
    </p>
    <p>
      What is your age? <input type="text" v-model="age">
    </p>

    <div class="text-3xl">
      <p>
        <button @click="flash('Test', 'It works from about page')">Click me</button>
      </p>
    </div>

    <!--Textarea example-->
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;"></TabbableTextarea>
      <!--<textarea name="txtarea" id="txtarea" cols="30" rows="10" style="width: 100%; height: 300px;" class="border">Hi there</textarea>-->
    </form>

    <!--<TheWelcome />-->
  </main>
</template>
