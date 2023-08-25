import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

export function useCarouselA () {
  const store = useStore()
  const { dispatch, commit } = store
  const { timer } = toRefs(store.state.carouselStoreA.carouselA)

  const carouselElementA = ref(null)
  const label = ref(null)
  const states = reactive({
    carouselElementA
  })

  onMounted(() => {
    label.value.click()
    dispatch('carouselStoreA/autoPlay')
    dispatch('carouselStoreA/copyImgHeadAndFoot')
  })
  onUnmounted(() => {
    if (timer.value) commit('carouselStoreA/CLEAR_TIMER')
  })

  return {
    ...toRefs(states),
    label
  }
}
