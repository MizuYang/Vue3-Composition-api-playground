import { ref, reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'

export function useCarouselA () {
  const store = useStore()
  const { dispatch } = store

  const carouselElementA = ref(null)
  const states = reactive({
    carouselElementA
  })

  onMounted(() => {
    dispatch('carouselA/copyImgHeadAndFoot')
  })

  return {
    ...toRefs(states)
  }
}
