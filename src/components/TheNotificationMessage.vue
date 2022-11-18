<script>
export default {
  name: "TheNotificationMessage",
  emits: ["toggle"], // <--- add this line
  props: {
    type: {
      type: String,
      required: false,
      default: 'info'
    },
    header: {
      type: String,
      required: false,
      default: 'Mensaje'
    }
  },


  /* methods: {
    closeNotification() {
      console.log('Cerrar!');

    }
  } */

}
</script>

<template>
  <!--Container-->
  <div id="panel" class="container ">
    <div :class="{
        'p-4 border rounded-lg': true,
        'bg-white border-gray-300 text-black' : type == 'light',
        'bg-gray-700 border-gray-600 text-white' : type == 'dark',
        'bg-blue-700 border-blue-600 text-white' : type == 'info',
        'bg-lime-700 border-lime-600 text-white' : type == 'success',
        'bg-pink-700 border-pink-600 text-white' : type == 'danger',
        'bg-yellow-700 border-yellow-600 text-white' : type == 'warning',
    }">
      <div class="flex justify-between items-start">
        <h2 class="font-bold text-lg mb-2">{{ header }}</h2>
        <div @click="$emit('toggle')" class="p-2 cursor-pointer hover:scale-125">&times;</div>
      </div>
      <slot />
    </div>
  </div>
</template>


<style scoped>

</style>