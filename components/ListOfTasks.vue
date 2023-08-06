<template>
  <div class="list-of-task-container-parent">
    <div class="list-of-task-container-child">
      <font-awesome-icon icon="circle-check"   :class="{'check-color-true': task.status, 'check-color-false': !task.status}" @click="toggleDone"/>
      <div class="grid-text-and-icon">
        <div class="block">
          <p :class="{'list-of-taks-true': task.status, 'list-of-taks-false': !task.status}" @click="toggleDone">
            <s v-if="task.status">{{ task.name }}</s>
            <span v-else class="list-status-false">{{ task.name }}</span>
          </p>
        </div>
        <div class="block">
          <font-awesome-icon icon="trash" class="font-awesome-trash-icon-red"  @click="removeTask"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['task'],
  methods: {
    ...mapMutations(['REMOVE_TASK','TOGGLE_TASK']),
    toggleDone() {
      this.TOGGLE_TASK(this.task)
    },
    removeTask() {
      const removeTask = this.REMOVE_TASK;
      removeTask(this.task);
    },
  },
};
</script>
