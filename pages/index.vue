<template>
  <main class="parent-container">
    <p>Vue ToDo List</p>
    <div class="todo-parent-container">
      <div class="todo-child-continer">
        <div class="tasks-details">
          <tasks/>
          <tasks-done/>
          <tasks-delete-all/>
        </div>
        <list-Of-Tasks/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
