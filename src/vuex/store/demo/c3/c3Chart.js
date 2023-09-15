import c3 from 'c3/c3.js'
import 'c3/c3.css'

const c3Chart = {
  namespaced: true,
  state: {
    chartElement: '',
    chartType: 'line',
    isRotated: false,
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
    async createChart ({ state, dispatch, commit }) {
      const getRandomData = () => dispatch('getRandomData')
      const data1 = await getRandomData()
      const data2 = await getRandomData()
      const data = {
        columns: [
          ['data1', ...data1],
          ['data2', ...data2]
          // ['data1', 30, 200, 100, 400, 150, 250],
          // ['data2', 50, 20, 10, 40, 15, 25]
        ],
        type: state.chartType, // type: 'line',
        // types: { // 同時呈現不同類型的圖表
        //   data1: 'bar',
        //   data2: 'spline'
        // },
        colors: { // 圖表數據的顏色
          data1: 'red',
          data2: 'green'
        },
        labels: true, // 在圖表上顯示該數據的數字
        classes: { // 為數據加上 class 方便調整樣式
          data1: 'data1-class', // (c3-target-樣式名稱, 例:. c3-target-data1-class)
          data2: 'data2-class'
        }
      }

      const chart = c3.generate({
        bindto: '#chart',
        data,
        size: { // 圖表尺寸
          height: 600
          // width: 480
        },
        zoom: { // 滑鼠滾輪縮放圖表
          enabled: true
        },
        subchart: { // 顯示縮放和選擇範圍的子圖表
          show: true
        },
        axis: { // 圖表翻轉為縱向
          rotated: state.isRotated
          // rotated: true
        }
        // legend: {
        // position: 'right' // 圖例的位置
        // show: false // 是否顯示圖例
        // }
        // padding: { // 圖表外圍的 padding
        //   top: 40,
        //   right: 100,
        //   bottom: 40,
        //   left: 100
        // }
      })

      commit('GET_CHART_ELEMENT', chart)

      return chart
    },
    changeChartType ({ state, commit }, type) {
      const { chartElement } = state
      chartElement.transform(type)

      commit('CHANGE_CHART_TYPE', type)

      // 若是圓餅圖 || 甜甜圈: 隱藏縮放、選擇範圍功能
      if (type === 'pie' || type === 'donut') {
        chartElement.enabled = false
        chartElement.show = false
      } else {
        chartElement.enabled = true
        chartElement.show = true
      }
    },
    getRandomData () {
      const data = []
      for (let i = 0; i < 20; i++) {
        data.push(Math.round(Math.random() * 100) + 1)
      }

      return data
    }
  },
  mutations: {
    GET_CHART_ELEMENT (state, el) {
      state.chartElement = el
    },
    CHANGE_ROTATED (state) {
      state.isRotated = !state.isRotated
    },
    CHANGE_CHART_TYPE (state, type) {
      state.chartType = type
    }
  },
  getters: {
  }
}

export default c3Chart
