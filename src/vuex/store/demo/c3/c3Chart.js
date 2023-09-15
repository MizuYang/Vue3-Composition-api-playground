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

      // 若是圓餅圖 || 甜甜圈: 隱藏縮放、選擇範圍功能
      if (type === 'pie' || type === 'donut') {
        chartElement.enabled = false
        chartElement.show = false
      } else {
        chartElement.enabled = true
        chartElement.show = true
      }
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
