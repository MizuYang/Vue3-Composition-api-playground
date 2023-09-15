import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useChangeChartTypeBtn () {
  const store = useStore()
  const { dispatch } = store
  const changeChartType = (type) => dispatch('c3Chart/changeChartType', type)
  const { chartTypeList } = toRefs(store.state.c3Chart)
  const states = reactive({
    chartTypeList
  })
  return {
    ...toRefs(states),
    changeChartType
  }
}
