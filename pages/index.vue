<template>
  <main class="parent-container">
    <p>Vue ToDo List</p>
    <div class="todo-parent-container">
      <div class="todo-child-continer">
        <div class="task-details-parent">
          <div class="tasks-details-child">
            <tasks/>
            <tasks-done/>
            <tasks-delete-all/>
          </div>
        </div>
        <list-Of-Tasks/>
        <input-data />
      </div>
    </div>
  </main>
</template>

<script>
export default {
 
}
</script>

