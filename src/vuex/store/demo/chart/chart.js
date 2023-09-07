// import axios from 'axios'

const chart = {
  namespaced: true,
  state: {
    activeChartContent: {}
  },
  actions: {
    getChartContent ({ commit }, data) {
      commit('GET_CHART_CONTENT', data)
    }
  },
  mutations: {
    GET_CHART_CONTENT (state, data) {
      state.activeChartContent = data
    }
  },
  getters: {
  }
}

export default chart
