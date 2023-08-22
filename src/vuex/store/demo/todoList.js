// import axios from 'axios'

const todoList = {
  namespaced: true,
  state: {
    input: null,
    todoData: JSON.parse(localStorage.getItem('todoList')) || []
  },
  actions: {
    addTodo ({ dispatch, commit }, todo) {
      commit('ADD_TODO', todo)
      dispatch('setLocalStorage')
    },
    updateTodo ({ state, dispatch, commit }, todo) {
      const idx = state.todoData.findIndex(item => item.id === todo.id)
      console.log(idx)
      commit('UPDATE_TODO', [todo, idx])
      dispatch('setLocalStorage')
    },
    removeTodo ({ dispatch, commit }, todo) {
      commit('REMOVE_TODO', todo)
      dispatch('setLocalStorage')
    },
    setLocalStorage ({ state }, data) {
      const todoData = data || state.todoData
      localStorage.setItem('todoList', JSON.stringify(todoData))
    }
  },
  mutations: {
    GET_INPUT_ELEMENT (state, el) {
      state.input = el
    },
    ADD_TODO (state, todo) {
      if (!todo.name) return

      state.todoData.push(todo)
    },
    UPDATE_TODO (state, [todo, idx]) {
      if (!todo.name) return

      console.log(state.todoData[idx])
      state.todoData[idx] = JSON.parse(JSON.stringify(todo))
      // state.todoData[idx] = todo
      console.log(state.todoData[idx])
    },
    REMOVE_TODO (state, idx) {
      state.todoData.splice(idx, 1)
    }
  },
  getters: {
  }
}

export default todoList
