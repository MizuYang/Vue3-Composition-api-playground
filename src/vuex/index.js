import { createStore } from 'vuex'
// import axios from 'axios'
import modules from '@/vuex/store/modules.js'

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
    ...modules
  }
})
