import { createStore } from 'vuex'
// import axios from 'axios'

// 其它store
import theme from '@/vuex/store/theme.js'
import todoList from '@/vuex/store/demo/todolist/todoList.js'
import delModal from '@/vuex/store/demo/todolist/modal/delModal.js'
import carouselStoreA from '@/vuex/store/demo/carousel/carouselStoreA.js'
import carouselStoreB from '@/vuex/store/demo/carousel/carouselStoreB.js'
import chart from '@/vuex/store/demo/chart/chart.js'
import c3Chart from '@/vuex/store/demo/c3/c3Chart.js'

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
    carouselStoreA,
    carouselStoreB,
    chart,
    c3Chart
  }
})
