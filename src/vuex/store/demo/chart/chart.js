// import axios from 'axios'

const chart = {
  namespaced: true,
  state: {
    activeChartContent: {},
    currentChart: 'doughnut'
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
    }
  },
  getters: {
  }
}

export default chart
