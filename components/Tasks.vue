<template>
  <div class="tasks">
    <p>Tasks</p>
    <p class="circle-number">{{ countAllTask }}</p>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['tasks']),
    countAllTask(){
      return this.tasks.length
    },
  },
}
</script>

<style>

</style>