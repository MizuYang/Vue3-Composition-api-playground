import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

export function useCarouselB () {
  const store = useStore()
  const { dispatch, commit } = store
  const { timer, isAutoPlay, direction, speed } = toRefs(store.state.carouselStoreB.carouselB)

  const carouselElementB = ref(null)
  const label = ref(null)
  const states = reactive({
    carouselElementB
  })

  onMounted(() => {
    getAutoPlay()
    label.value.click()
    if (isAutoPlay.value === 'true') dispatch('carouselStoreB/autoPlay')
    dispatch('carouselStoreB/copyImgHeadAndFoot')
  })
  onUnmounted(() => {
    if (timer.value) commit('carouselStoreB/CLEAR_TIMER')
  })

  function gotoTargetImage (translateX) {
    if (timer.value) commit('carouselStoreB/CLEAR_TIMER')
    commit('carouselStoreB/GOTO_TARGET_IMAGE', translateX)
    commit('carouselStoreB/STOP_PLAY')
  }
  function play () {
    commit('carouselStoreB/START_PLAY')
    dispatch('carouselStoreB/startCarousel', [direction.value, speed.value])
  }
  function getAutoPlay () {
    if (isAutoPlay.value === null) {
      commit('carouselStoreB/UPDATE_AUTO_PLAY', 'true')
      commit('carouselStoreB/START_PLAY')
    } else if (isAutoPlay.value === 'false') {
      commit('carouselStoreB/STOP_PLAY')
    }
  }

  return {
    ...toRefs(states),
    label,
    gotoTargetImage,
    play
  }
}
