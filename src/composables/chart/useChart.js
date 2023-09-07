import { reactive, toRefs } from 'vue'
import Bar from '@/components/demo/chart/Bar.vue'
import Doughnut from '@/components/demo/chart/Doughnut.vue'

export function useChart () {
  const states = reactive({
    currntChartComponent: Doughnut,
    chartBtn: [
      {
        name: '長條圖(bar)',
        component: Bar
      },
      {
        name: '甜甜圖(doughnut)',
        component: Doughnut
      }
    ]
  })

  const { currntChartComponent } = toRefs(states)

  function changeChart (component) {
    currntChartComponent.value = component
  }

  return {
    ...toRefs(states),
    changeChart
  }
}
