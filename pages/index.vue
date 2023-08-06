<template>
  <main class="parent-container">
    <p>Vue ToDo List</p>
    <div class="todo-parent-container">
      <div class="todo-child-continer">
        <div class="task-details-parent">
          <div class="tasks-details-child">
            <tasks/>
            <tasks-done/>
            <delete-task-done v-if="completedTaskIndexPage > 0" />
            <tasks-delete-all/>
          </div>
        </div>
        <div class="scrollable-wrapper">
          <list-Of-Tasks v-for="(task, id) in listofAllTask" :key="id" :task="task" class="animate__animated animate__fadeInUp"/>
        </div>
        <input-data />
      </div>
    </div>
    <show-info/>
  </main>
</template>

<script>
import { mapState , mapGetters} from 'vuex'
export default {
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['COMPLETED_TASKS_COUNT']),
    listofAllTask() {
      return this.tasks
    },
    completedTaskIndexPage(){
      return this.COMPLETED_TASKS_COUNT
    },
  },
}
</script>