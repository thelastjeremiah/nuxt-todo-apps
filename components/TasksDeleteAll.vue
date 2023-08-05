<template>
  <div class="grid-container-trash" @click="deleteAllData">
    <font-awesome-icon icon="trash" class="font-awesome-trash-icon" />
    <p class="delete-task-word">Tasks</p>
  </div>
</template>

<script>
export default {

  methods: {
    deleteAllData() {
      console.log('Delete All Data')
    }
  }
}
</script>

<style>

</style>
