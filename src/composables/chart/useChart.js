import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import Bar from '@/components/demo/chart/Bar.vue'
import Doughnut from '@/components/demo/chart/Doughnut.vue'
import Line from '@/components/demo/chart/Line.vue'
import Pie from '@/components/demo/chart/Pie.vue'

export function useChart () {
  const store = useStore()
  const { commit } = store
  const states = reactive({
    currntChartComponent: Pie,
    chartBtn: [
      {
        title: '長條圖(bar)',
        component: Bar,
        name: 'bar'
      },
      {
        title: '甜甜圖(doughnut)',
        component: Doughnut,
        name: 'doughnut'
      },
      {
        title: '折線圖(line)',
        component: Line,
        name: 'line'
      },
      {
        title: '圓餅圖(pie)',
        component: Pie,
        name: 'pie'
      }
    ]
  })

  const { currntChartComponent } = toRefs(states)

  function changeChart (data) {
    currntChartComponent.value = data.component
    commit('chart/GET_CURRENT_CHART', data.name)
  }

  return {
    ...toRefs(states),
    changeChart
  }
}
