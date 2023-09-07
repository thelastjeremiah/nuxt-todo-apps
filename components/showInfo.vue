<template>
  <div class="lower-left"> 
    <div v-if="showInfo" class="show-info-container" @click="showMessage">
      <span class="show-info-text">Show info</span>
    </div>
    <div v-if="!showInfo" class="hide-info-contianer no-overflow">
      <span class="animate__animated animate__fadeInRight text-span-color">This application uses the browser's local storage to store data</span>
      <font-awesome-icon icon="circle-xmark" class="x-mark" @click="closeMessage" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: true
    }
  },
  methods: {
    showMessage() {
      this.showInfo = false
    },
    closeMessage() {
      this.showInfo = true
    }
  }
} 
</script>
<style>
  .no-overflow {
    overflow: hidden;
  }
  .text-span-color{
    color:white;
  }
  .show-info-text{
    color:white;
  }
</style>