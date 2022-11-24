<script>
export default {
  name: "TheNotificationMessage",
  emits: ["toggle"], // <--- add this line
  props: {
    type: {
      type: String,
      required: false,
      default: 'light'
    },
    header: {
      type: String,
      required: false,
      default: 'Mensaje'
    },
    /* hidden: {
      type: Boolean,
      required: false,
      default: false
    } */
  },

  data() {
    return {
      hidden: false
    }
  },

  methods: {
    closeNotification() {
      console.log('Cerrar!');
      this.hidden = true;
      // emmit
      this.$emit('toggle')
    }
  }

}
</script>

<template>
  <!--Container-->
  <div id="panel" class="container " v-show="! this.hidden">
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
        <!--<div @click="$emit('toggle', true)" class="p-2 cursor-pointer hover:scale-125">&times;</div>-->
        <div @click="closeNotification" class="p-2 cursor-pointer hover:scale-125">&times;</div>
      </div>
      <slot />
    </div>
  </div>
</template>


<style scoped>

</style>