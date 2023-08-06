<template>
  <div class="accept-input-parent">
    <input type="text" v-model="newTask" placeholder="New task" @keypress.enter="addTask" class="accept-input-child"/>
    <font-awesome-icon icon="circle-plus" @click="addTask" class="submit-button"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
export default {
  data (){
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapState(['tasks']),
    ...mapGetters(['COMPLETED_TASKS_COUNT']),
    countAllTask(){
      return this.tasks.length
    },
    listofAllTask() {
      return this.tasks
    }
  },
  methods: {
    ...mapMutations(['ADD_TASK','DELETE_COMPLETED_TASKS','DELETE_ALL_TASKS']),
    ...mapActions(['ON_LOAD_DATA']),
    addTask() {
      const taskAdded = this.ADD_TASK
      if (this.newTask) {
        taskAdded(this.newTask);
        this.newTask = ''
      }
    },
    deleteAllCompleted() {
      return this.DELETE_COMPLETED_TASKS();
    },
    deleteAllTask(){
      return this.DELETE_ALL_TASKS();
    }
  },
  mounted() {
    return this.ON_LOAD_DATA()
  },
}
</script>
