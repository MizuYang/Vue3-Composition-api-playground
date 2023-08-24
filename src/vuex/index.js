import { createStore } from 'vuex'
// import axios from 'axios'

// 其它store
import theme from '@/vuex/store/theme.js'
import todoList from '@/vuex/store/demo/todolist/todoList.js'
import delModal from '@/vuex/store/demo/todolist/modal/delModal.js'
import carouselA from '@/vuex/store/demo/carousel/carouselA.js'

export default createStore({
  strict: false, // 嚴謹模式
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    theme,
    todoList,
    delModal,
    carouselA
  }
})
