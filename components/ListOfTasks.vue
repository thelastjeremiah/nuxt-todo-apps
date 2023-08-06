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
import { mapState, mapMutations } from 'vuex'
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

<style scoped>
.grid-text-and-icon{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-content: center;
  align-items: center;
}
.list-of-task-container-parent {
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 0.3rem;
  margin-top: 0.3rem;
}

.block{
  display: block;
}
.font-awesome-trash-icon-red:hover {
  color: #ff5c46 !important;
  cursor: pointer !important;
}

.list-of-task-container-child {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  display: flex;
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

.list-of-taks-false{
  color:black
}

.list-status-false{
  font-weight: bold;
}
.list-of-taks-false:hover{
  cursor: pointer;
}

.list-of-taks-true{
  color:gray
}

.list-of-taks-true:hover{
  cursor: pointer;
}


.check-color-false{
  color:#469c7d;
  font-size: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.check-color-false{
  cursor: pointer;
}

.check-color-true{
  color:grey;
  font-size: 1.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top:0.2rem;
  padding-bottom: 0.2rem;
}

.check-color-true:hover{
  cursor: pointer;
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
