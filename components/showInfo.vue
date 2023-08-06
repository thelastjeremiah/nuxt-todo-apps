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

<style>
.lower-left {
  position: absolute;
  bottom: 20px; 
  right: 20px;
}

.show-info-container{
  background-color: #3584C5;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 1px;
  padding-bottom: 3px;
}

.show-info-container:hover{
  cursor: pointer;
}

.show-info-container > p {
  color:white;
  font-size: 1rem;
}

.hide-info-contianer > p{
  color:white;
  font-weight: bold;
}

.hide-info-contianer{
  display: flex;
  background-color: #00244D;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.4rem;
  padding-bottom:0.4rem;
  border-radius: 1rem;
}


.x-mark{
  color:black;
  font-size: 1.5rem;
  margin-left: 7px;
}

.x-mark:hover{
  color:white;
  cursor: pointer;
}
</style>