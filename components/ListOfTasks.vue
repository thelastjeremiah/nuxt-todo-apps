<template>
  <div class="list-of-task-container-parent">
    <div class="list-of-task-container-child">
      <font-awesome-icon icon="circle-check"  
      :class="{'check-color-true': toggleDone(), 'check-color-false': !toggleDone()}"
        @click="toggleDone"
      />
      <p class="list-of-taks">{{ task.name }}</p>
      <font-awesome-icon icon="trash" class="font-awesome-trash-icon-red"  @click="removeTask"/>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: ['task'],
  methods: {
    ...mapMutations(['TOGGLE_TASK', 'REMOVE_TASK']),
    toggleDone() {
      const toggleTask = this.TOGGLE_TASK;
      toggleTask(this.task);
      return this.task.status; 
    },
    removeTask() {
      const removeTask = this.REMOVE_TASK;
      removeTask(this.task);
    },
  },
};
</script>

<style scoped>
.list-of-task-container-parent {
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 0.3rem;
  margin-top: 0.3rem;
}

.font-awesome-trash-icon-red:hover {
  color: #ff5c46 !important;
  cursor: pointer !important;
}

.list-of-task-container-child {
  margin-top: 0.3rem; /* There was a typo in your code, ',' should be '.' */
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border: 1px solid #1a1d1c4b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 0.3125rem;
}

.list-of-task-container-child:hover {
  background-color: #ededed;
}

.list-of-task-container-child:hover .font-awesome-trash-icon-red{
  color: #ededed;
}

.check-color-false{
  color:#469c7d;
  font-size: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.check-color-true{
  color:grey;
  font-size: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.check-color-false:hover{
  color:#0d553b;
}

.font-awesome-trash-icon-red{
  padding-left: 18rem;
  padding-right: 1rem;
  color:white;
  font-size:1.9rem;
}

</style>
