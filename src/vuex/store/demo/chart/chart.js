// import axios from 'axios'

const chart = {
  namespaced: true,
  state: {
    activeChartContent: '',
    currentChart: 'bar'
  },
  actions: {
    getChartContent ({ commit }, data) {
      commit('GET_CHART_CONTENT', data)
    }
  },
  mutations: {
    GET_CHART_CONTENT (state, data) {
      state.activeChartContent = data
    },
    GET_CURRENT_CHART (state, data) {
      state.currentChart = data
      state.activeChartContent = '' // 初始化
    }
  },
  getters: {
  }
}

export default chart
