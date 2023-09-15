// import axios from 'axios'

const c3Chart = {
  namespaced: true,
  state: {
    chartElement: '',
    chartTypeList: [
      'line',
      'spline',
      'step',
      'area',
      'area-spline',
      'area-step',
      'bar',
      'pie',
      'donut'
    ]
  },
  actions: {
    changeChartType ({ state }, type) {
      const { chartElement } = state
      chartElement.transform(type)
    }
  },
  mutations: {
    GET_CHART_ELEMENT (state, el) {
      state.chartElement = el
    }
  },
  getters: {
  }
}

export default c3Chart
