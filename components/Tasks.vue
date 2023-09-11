<template>
  <v-card class="tasks">
    <span class="task-text">Tasks</span>
    <span class="circle-number">{{ countAllTask }}</span>
  </v-card>
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


<style scoped>
  .task-text {
    margin-left: 0.75rem; 
    margin-right: 0.5625rem;
  }

  .circle-number {
    margin-left: 0.25rem;
    margin-right: 0.5rem;
  }

</style>