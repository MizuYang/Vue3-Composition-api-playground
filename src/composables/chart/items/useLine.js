import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useLine () {
  const store = useStore()
  const { dispatch } = store
  const states = reactive({
    // 圖表數據設定
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: '第一筆資料',
          backgroundColor: '#8F9FF3',
          data: getRandomData(), // [40, 39, 10, 40, 30, 80, 40],
          datalabels: {
            labels: {
              title: {
                color: '#fff',
                font: { size: 15 },
                anchor: 'start',
                align: 'top'
              }
            },
            // 事件註冊
            listeners: {
              click: function (context, e) {
                if (!context.active) return
                console.log('context', context)
                console.log('e', e)

                const index = context.dataIndex
                const { label } = context.dataset
                const month = states.data.labels[index]
                const value = context.dataset.data[index]
                const content = `
                您點擊了 ${label} 的 ${index + 1}  月
                ( ${month} )   ${value} 
                `

                dispatch('chart/getChartContent', content)
              }
            }
          }
        },
        {
          label: '第二筆資料',
          backgroundColor: '#F59393',
          data: getRandomData(), // [40, 39, 10, 40, 30, 80, 40],
          datalabels: {
            labels: {
              title: {
                color: '#fff',
                font: { size: 15 },
                anchor: 'start',
                align: 'top'
              }
            },
            // 事件註冊
            listeners: {
              click: function (context, e) {
                if (!context.active) return
                console.log('context', context)
                console.log('e', e)

                const index = context.dataIndex
                const { label } = context.dataset
                const month = states.data.labels[index]
                const value = context.dataset.data[index]
                const content = `
                您點擊了 ${label} 的 ${index + 1}  月
                ( ${month} )   ${value} 
                `

                dispatch('chart/getChartContent', content)
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

  function getRandomData () {
    const data = []
    for (let i = 0; i <= 7; i++) {
      data.push(Math.round(Math.random() * 100) + 1)
    }

    return data
  }

  return {
    ...toRefs(states)
  }
}
