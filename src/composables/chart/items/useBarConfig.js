import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useBarConfig () {
  const store = useStore()
  const { dispatch } = store
  const { theme } = toRefs(store.state.theme) // eslint-disable-line

  const states = reactive({
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: '第一筆資料',
          backgroundColor: '#7CA3D5',
          // backgroundColor: [  // 為每一個數據使用不同背景色
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          hoverBackgroundColor: '#5F8AC1',
          data: getRandomData(),
          // 設定 圖表數據文字樣式
          datalabels: {
            labels: {
              title: {
                color: 'blue',
                font: { size: 20 }
                // 數據文字定位
                // anchor: 'end',
                // align: 'top'
              },
              value: {
                color: '#00B4FF',
                font: { size: 21 }
                // 數據文字定位
                // anchor: 'end',
                // align: 'top'
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

                dispatch('chart/getChartContent', {
                  index,
                  label,
                  month,
                  value
                })
              }
            }
          }
        },
        {
          label: '第二筆資料',
          backgroundColor: '#DA9B9B',
          hoverBackgroundColor: '#CF8B8B',
          data: getRandomData(),
          // 設定 圖表數據文字樣式
          datalabels: {
            labels: {
              title: {
                color: 'red',
                font: { size: 20 }
              },
              value: {
                color: 'pink',
                font: { size: 21 }
              }
            },
            listeners: {
              click: function (context, e) {
                if (!context.active) return
                console.log('context', context)
                console.log('e', e)

                const index = context.dataIndex
                const { label } = context.dataset
                const month = states.data.labels[index]
                const value = context.dataset.data[index]

                dispatch('chart/getChartContent', {
                  index,
                  label,
                  month,
                  value
                })
              }
            }
          }
        }
      ]
    },
    options: {
      // indexAxis: 'y', // 將圖表變成橫的
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        // 設定全部 圖表數據文字樣式
        datalabels: {
          labels: {
            value: {
              color: '#fff'
            },
            title: {
              color: '#fff'
            }
          }
        },
        // 圖表標題樣式
        legend: {
          labels: {
            font: {
              size: 20
            },
            color: 'gray'
          }
        }
      }
    }
  })

  function getRandomData () {
    const data = []
    for (let i = 0; i <= 12; i++) {
      data.push(Math.round(Math.random() * 100) + 1)
    }

    return data
  }

  return {
    ...toRefs(states)
  }
}
