import { ref, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import {
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent
} from 'vue-chartjs'

export function usePieConfig () {
  const store = useStore()
  const { dispatch } = store
  const states = reactive({
    data: {
      labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: getRandomData(), // [40, 20, 80, 10],
          datalabels: {
            labels: {
              title: {
                color: '#fff',
                font: { size: 20 }
              },
              value: {
                color: '#fff',
                font: { size: 21 }
              }
            },
            listeners: {
              click: function (context, e) {
                if (!context.active) return
                console.log('context', context)
                console.log('e', e)

                const index = context.dataIndex
                const name = states.data.labels[index]
                const value = context.dataset.data[index]
                const content = `您點擊了 ${name} ${value} `

                dispatch('chart/getChartContent', content)
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
        // 圖表標題樣式
        legend: {
          labels: {
            font: {
              size: 18
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
      data.push(Math.round(Math.random() * 10) + 1)
    }

    return data
  }

  function datasetAtEvent (dataset) {
    if (!dataset.length) return

    const datasetIndex = dataset[0].datasetIndex

    console.log('dataset', states.data.datasets[datasetIndex].label)
  }
  function elementAtEvent (element) {
    if (!element.length) return

    const { datasetIndex, index } = element[0]

    console.log(
      'element',
      states.data.labels[index],
      states.data.datasets[datasetIndex].data[index]
    )
  }
  function elementsAtEvent (elements) {
    if (!elements.length) return

    console.log('elements', elements)
  }

  const pie = ref(null)
  function onClick (e) {
    const {
      value: { chart }
    } = pie

    if (!chart) {
      return
    }

    datasetAtEvent(getDatasetAtEvent(chart, e))
    elementAtEvent(getElementAtEvent(chart, e))
    elementsAtEvent(getElementsAtEvent(chart, e))
  }

  return {
    ...toRefs(states),
    pie,
    onClick
  }
}
