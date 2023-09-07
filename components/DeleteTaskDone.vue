<template>
  <v-card class="delete-all-done-container" @click="deletDoneTask">
    <font-awesome-icon icon="trash" class="font-awesome-trash-icon-delete"/>
    <span class="delete-task-word">Tasks Done</span>
  </v-card>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{
    ...mapMutations(['DELETE_COMPLETED_TASKS']),
    deletDoneTask() {
      return this.DELETE_COMPLETED_TASKS()
    },
  }
}
</script>

<style>
.delete-all-done-container{
  display: flex;
  align-content: center;
  align-items: center;
  background-color: #FF5C46 !important;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.delete-all-done-container:hover{
  cursor: pointer;
}

.font-awesome-trash-icon-delete{
  color:white;
  margin-right: 0.923rem;
}
</style>
