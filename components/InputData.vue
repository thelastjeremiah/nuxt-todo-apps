<template>
  <div class="accept-input-parent">
    <input type="text" v-model="newTask" placeholder="New task" @keypress.enter="addTask" class="accept-input-child"/>
    <font-awesome-icon icon="circle-plus" @click="addTask" class="submit-button"/>
  </div>
</template>

<script>
export default {
  data (){
    return {
      newTask: ''
    }
  },
  methods:{
    addTask() {
      console.log('hello')
    },
  }
}
</script>

