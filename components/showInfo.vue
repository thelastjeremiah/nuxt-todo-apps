<template>
  <div class="lower-left"> 
    <div v-if="showInfo" class="show-info-container" @click="showMessage">
      <p>Show info</p>
    </div>
    <div v-if="!showInfo" class="hide-info-contianer">
      <p>This application uses the browser's local storage to store data</p>
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