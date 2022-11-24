<script setup>
import {computed, ref} from "vue";

/* export default {
  name: "CompositionVueSchool"
} */


const header = ref('Shopping List App');
const items = ref([
  {id:1, label: "10 Party Hats", purchased: false, highPriority: false},
  {id:2, label: "2 Board Games", purchased: false, highPriority: false},
  {id:3, label: "20 Cups", purchased: false, highPriority: false}
]);

const newItem = ref('');
const newItemHighPriority = ref(false);
const editing = ref(false);

/*-----------------------------*/
//          METHODS
/*-----------------------------*/
// funcion para agregar un item nuevo a la lista
function saveItem() {
  // en la seccion de <script> siempre se deb3e usar 'value' para hacer referencia al valor de la var ref, no asi en la seccion <template>
  // if (newItem.value != '') {
    items.value.push({
      id: items.value.length + 1,
      label: newItem.value,
      purchased: false,
      highPriority: newItemHighPriority.value
    });
    newItem.value = '';
    newItemHighPriority.value = false;
  // }

  // items.push({id: items.length + 1, label: newItem});
}

// funcion para activar/mostrar el formulario para agregar nuevo item a la lista
const doEdit = (e) => {
  editing.value = e;
  newItem.value = '';
}

// Funcion para tachar una opcion de la lista
const togglePurchased = (item) => {
  item.purchased = !item.purchased;
}

// computed property example - characters counter
const characterCounter = computed(() => {
  return newItem.value.length;
});

// computed property para mostrar la lista de items en orden recientes a antiguos
// Nota. Usamos 'spread operator' "..." para hacer un clon/copia del array ya que la funcion reverse() altera fisicamente el array y no queremos eso
const reversedItems = computed(() => [...items.value].reverse());

</script>

<template>
  <div class="space-y-4">
    <div class="flex justify-between">
      <h1 class="font-bold text-lg">{{ header }}</h1>
      <div class="flex space-x-4 mb-4">
        <button v-if="editing" @click="doEdit(false)" class="btn btn-secondary">Cancel</button>
        <button v-else @click="doEdit(true)" class="btn btn-primary">Add Item</button>
      </div>
    </div>
    <form
        class="add-item-form"
        @submit.prevent="saveItem"
        v-if="editing"
    >
      <div class="flex justify-between items-center">
        <input v-model.trim="newItem"  type="text" placeholder="Add an item" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300">
        <label class="ml-2">
          <input v-model="newItemHighPriority" type="checkbox" name="prioriry" id="prioriry" class="ml-2">High Priority
        </label>
        <!--<button @click="items.push({id: items.length + 1, label: newItem})" class="px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500">Save Item</button>-->
        <button :disabled="newItem.length < 5"  class="btn btn-primary">Save Item</button>
      </div>
      <p>
        {{ characterCounter }}/200
      </p>
    </form>
    <ul class="mt-4">
      <!--<li
          v-for="({id, label}, index) in items"
      >{{ label }}</li>-->
      <li
          v-for="(item, index) in reversedItems"
          @click="togglePurchased(item)"
          :key="item.id"
          class="text-lg"
          :class="{
            'line-through': item.purchased,
            'text-orange-500 font-semibold': item.highPriority
          }"
      >
        {{ item.label }}
      </li>
    </ul>
    <p v-if="! items.length">
      Nothing to show here
    </p>
  </div>
</template>

<style scoped>

</style>