
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import c3 from 'c3/c3.js'
import 'c3/c3.css'

export function useChart () {
  const store = useStore()
  const { commit } = store

  const data = {
    columns: [
      ['data1', ...getRandomData()],
      ['data2', ...getRandomData()]
      // ['data1', 30, 200, 100, 400, 150, 250],
      // ['data2', 50, 20, 10, 40, 15, 25]
    ],
    type: 'line',
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
  let chart = null

  onMounted(() => {
  // 使用C3.js创建折线图
    chart = c3.generate({
      bindto: '#chart',
      data
    })

    commit('c3Chart/GET_CHART_ELEMENT', chart)

    updateData()
  })

  function getRandomData () {
    const data = []
    for (let i = 0; i < 6; i++) {
      data.push(Math.round(Math.random() * 100) + 1)
    }

    return data
  }
  function updateData () {
    setInterval(() => {
      chart.load({
        columns: [
          ['data1', ...getRandomData()],
          ['data2', ...getRandomData()]
        ]
      })
    }, 1500)
  }
}
