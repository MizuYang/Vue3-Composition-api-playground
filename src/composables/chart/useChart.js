import { reactive, toRefs } from 'vue'
import Bar from '@/components/demo/chart/Bar.vue'

export function useChart () {
  const states = reactive({
    curChartName: Bar,
    chartBtn: [
      {
        name: 'bar',
        component: Bar
      }
    ]
  })

  const { curChartName } = toRefs(states)

  function changeChart (chartName) {
    if (chartName === 'bar') {
      curChartName.value = Bar
    }
  }

  return {
    ...toRefs(states),
    changeChart
  }
}
