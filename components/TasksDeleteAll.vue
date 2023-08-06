<template>
  <div class="grid-container-trash" @click="deleteAllTask">
    <font-awesome-icon icon="trash" class="font-awesome-trash-icon" />
    <p class="delete-task-word">Tasks</p>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
export default {

  methods: {
    ...mapMutations(['DELETE_ALL_TASKS']),
    deleteAllTask() {
      return this.DELETE_ALL_TASKS();
    }
  }
}
</script>
