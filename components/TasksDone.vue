<template>
  <div class="tasks">
    <span class="task-done">Tasks Done</span>
    <span class="circle-number">{{ completedTask }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['COMPLETED_TASKS_COUNT']),
    completedTask(){
      return this.COMPLETED_TASKS_COUNT
    }
  },
}
</script>

<style scoped>
  .task-done {
    margin-left: 1rem;
    margin-right: 0.35rem;
    color:white;
  }

  .circle-number {
    margin: 0.25rem;
  }

</style>