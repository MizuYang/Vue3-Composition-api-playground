import { useStore } from 'vuex'

export function useRotateChartBtn () {
  const store = useStore()
  const { dispatch, commit } = store
  function rotateChart () {
    commit('c3Chart/CHANGE_ROTATED')
    dispatch('c3Chart/createChart')
  }

  return {
    rotateChart
  }
}
