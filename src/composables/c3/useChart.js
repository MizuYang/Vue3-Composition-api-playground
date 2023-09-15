
import { onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

export async function useChart () {
  const store = useStore()
  const { dispatch } = store
  let timer = null

  onMounted(async () => {
    await dispatch('c3Chart/createChart')
    updateData()
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  async function updateData () {
    timer = setInterval(async () => {
      const getRandomData = () => dispatch('c3Chart/getRandomData')
      const data1 = await getRandomData()
      const data2 = await getRandomData()
      const chart = store.state.c3Chart.chartElement

      chart.load({
        columns: [
          ['data1', ...data1],
          ['data2', ...data2]
        ]
      })
    }, 1500)
  }
}
