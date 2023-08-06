<template>
  <div class="tasks">
    <p>Tasks Done</p>
    <p class="circle-number">{{ completedTask }}</p>
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

<style>

</style>