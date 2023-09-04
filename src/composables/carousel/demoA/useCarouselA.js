import { ref, reactive, toRefs, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'

export function useCarouselA () {
  const store = useStore()
  const { dispatch, commit } = store
  const { timer, isAutoPlay, direction, speed } = toRefs(store.state.carouselStoreA.carouselA)

  const carouselElementA = ref(null)
  const label = ref(null)
  const states = reactive({
    carouselElementA
  })

  onMounted(() => {
    getAutoPlay()
    label.value.click()
    if (isAutoPlay.value === 'true') dispatch('carouselStoreA/autoPlay')
    dispatch('carouselStoreA/copyImgHeadAndFoot')
  })
  onUnmounted(() => {
    if (timer.value) commit('carouselStoreA/CLEAR_TIMER')
  })

  function gotoTargetImage (translateX) {
    if (timer.value) commit('carouselStoreA/CLEAR_TIMER')
    commit('carouselStoreA/GOTO_TARGET_IMAGE', translateX)
    commit('carouselStoreA/STOP_PLAY')
  }
  function play () {
    commit('carouselStoreA/START_PLAY')
    dispatch('carouselStoreA/startCarousel', [direction.value, speed.value])
  }
  function getAutoPlay () {
    if (isAutoPlay.value === null) {
      commit('carouselStoreA/UPDATE_AUTO_PLAY', 'true')
      commit('carouselStoreA/START_PLAY')
    } else if (isAutoPlay.value === 'false') {
      commit('carouselStoreA/STOP_PLAY')
    }
  }

  return {
    ...toRefs(states),
    label,
    gotoTargetImage,
    play
  }
}
