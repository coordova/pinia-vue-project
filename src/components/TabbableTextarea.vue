<script setup>
// definicion de props
defineProps({
  modelValue: String
});

// definicio del emit
let emit = defineEmits(['update:modelValue']);

/**
 * Funcion para manejar el evento cuando se presiona la tecla TAB
 * @param e
 */
function onTabPress(e) {
  let textarea = e.target;

  let val = textarea.value,
      start = textarea.slectionStart,
      end = textarea.selectionEnd;

  textarea.value = val.substring(0, start) + "\t" + val.substring(end);

  textarea.slectionStart = textarea.selectionEnd = start + 1;
}

/* function update(e) {
  emit('update:modelValue', e.target.value);
} */
</script>

<template>
  <textarea
      @keydown.tab.prevent="onTabPress"
      @keyup="emit('update:modelValue', e.target.value)"
      v-text="modelValue"
      class="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300" />
</template>



<style scoped>

</style>