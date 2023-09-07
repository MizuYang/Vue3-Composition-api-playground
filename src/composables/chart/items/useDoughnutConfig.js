import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useDoughnutConfig () {
  const store = useStore()
  const { dispatch } = store
  const states = reactive({
    data: {
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: ['#FA0000', '#2400FD', '#00FA3B', '#F7FA00'],
          data: getRandomData(), // [40, 20, 80, 10]
          datalabels: {
            labels: {
              title: {
                color: 'blue',
                font: { size: 20 }
              },
              value: {
                color: '#00B4FF',
                font: { size: 21 }
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
                const name = states.data.labels[index]
                const value = context.dataset.data[index]

                dispatch('chart/getChartContent', {
                  index,
                  label,
                  name,
                  value
                })
              }
            }
          }
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 14
            },
            color: 'gray'
          }
        }
      }
    }

  })

  function getRandomData () {
    const data = []
    for (let i = 0; i < 4; i++) {
      data.push(Math.round(Math.random() * 100) + 1)
    }

    return data
  }

  return {
    ...toRefs(states)
  }
}
