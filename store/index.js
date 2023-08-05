export const state = () => ({
  tasks: []
})

export const mutations = {
  ADD_TASK(state, task) {
    const id = state.tasks.length > 0 ? state.tasks[0].id + 1 : 1
    const newTask = { id, name: task, status: false }
    state.tasks = [newTask, ...state.tasks]
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  TOGGLE_TASK(state, task) {
    task.status = !task.status
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  DELETE_COMPLETED_TASKS(state) {
    state.tasks = state.tasks.filter((task) => !task.status)
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  DELETE_ALL_TASKS(state) {
    state.tasks = [];
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  },
  SET_TASKS(state, tasks) {
    state.tasks = tasks
  }
}

export const getters = {
  COMPLETED_TASKS_COUNT: (state) => {
    return state.tasks.filter((task) => task.status === true).length
  }
}


export const actions = {
  ON_LOAD_DATA({ commit }) {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      commit('SET_TASKS', JSON.parse(storedTasks))
    }
  }
}