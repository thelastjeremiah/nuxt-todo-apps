<template>
  <main class="parent-container">
    <p>Vue ToDo List</p>
    <div class="todo-parent-container">
      <div class="todo-child-continer">
        <div class="task-details-parent">
          <div class="tasks-details-child">
            <tasks/>
            <tasks-done/>
            <delete-task-done/>
            <tasks-delete-all/>
          </div>
        </div>
        <div class="scrollable-wrapper">
          <list-Of-Tasks v-for="(task, id) in listofAllTask" :key="id" :task="task"/>
        </div>
        <input-data />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['tasks']),
    listofAllTask() {
      return this.tasks
    }
  },
}
</script>

