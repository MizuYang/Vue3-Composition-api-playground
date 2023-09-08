import { reactive, toRefs } from 'vue'

export function useLine () {
  const states = reactive({
    // 圖表數據設定
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 39, 10, 40, 39, 80, 40],
          datalabels: {
            labels: {
              title: {
                color: '#fff',
                font: { size: 15 },
                anchor: 'start',
                align: 'top'
              }
            }
          }
        }
      ]
    },
    // 圖表全域設定
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })

  return {
    ...toRefs(states)
  }
}
