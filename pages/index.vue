<template>
  <v-app class="app-bg">
    <v-main>
      <v-container class="d-flex justify-center align-center container-height">
        <v-col cols="12" sm="6">
          <todo-title />
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
        </v-col>
      </v-container>
    </v-main>
    <show-info/>
  </v-app>
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

<style scoped>
  .app-bg{
    background:#12121200 !important
  }
  .container-height{
    height: 100vh;
  }
</style>