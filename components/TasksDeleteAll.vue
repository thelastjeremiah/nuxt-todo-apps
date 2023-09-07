<template>
  <v-card class="grid-container-trash" @click="deleteAllTask">
    <font-awesome-icon icon="trash" class="font-awesome-trash-icon" />
    <span class="delete-task-word">Tasks</span>
  </v-card>
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
