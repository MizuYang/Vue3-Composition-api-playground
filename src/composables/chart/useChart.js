import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Bar from '@/components/demo/chart/Bar.vue'
import Doughnut from '@/components/demo/chart/Doughnut.vue'

export function useChart () {
  const store = useStore()
  const { commit } = store
  const states = reactive({
    currntChartComponent: Doughnut,
    chartBtn: [
      {
        name: '長條圖(bar)',
        component: Bar,
        currentChart: 'bar'
      },
      {
        name: '甜甜圖(doughnut)',
        component: Doughnut,
        currentChart: 'doughnut'
      }
    ]
  })

  const { currntChartComponent } = toRefs(states)

  function changeChart (data) {
    currntChartComponent.value = data.component
    commit('chart/GET_CURRENT_CHART', data.currentChart)
  }

  return {
    ...toRefs(states),
    changeChart
  }
}
