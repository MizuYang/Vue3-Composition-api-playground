// import axios from 'axios'

const todoList = {
  namespaced: true,
  state: {
    inputEl: null,
    content: '', // input 文字
    todoData: JSON.parse(localStorage.getItem('todoList')) || []
  },
  actions: {
    addTodo ({ dispatch, commit }, todo) {
      commit('ADD_TODO', todo)
      dispatch('setLocalStorage')
    },
    updateTodo ({ state, dispatch, commit }, todo) {
      const idx = state.todoData.findIndex(item => item.id === todo.id)
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
      state.inputEl = el
    },
    ADD_TODO (state, todo) {
      if (!todo.name) return

      state.todoData.push(todo)
    },
    UPDATE_TODO (state, [todo, idx]) {
      if (!todo.name) return

      state.todoData[idx] = JSON.parse(JSON.stringify(todo))
    },
    REMOVE_TODO (state, idx) {
      state.todoData.splice(idx, 1)
    },
    UPDATE_CONTENT (state, newContent) {
      state.content = newContent
    },
    CLREA_CONTENT (state) {
      state.content = ''
    }
  },
  getters: {
  }
}

export default todoList
