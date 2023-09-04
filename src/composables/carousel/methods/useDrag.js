import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useDrag () {
  const store = useStore()
  const { dispatch, commit } = store
  const states = reactive({
    downPosition: 0,
    upPosition: 0
  })

  function getDownPosition (e, storeName) {
    states.downPosition = e.pageX
    commit(`${storeName}/STOP_PLAY`)

    document.body.addEventListener('mouseup', getUpPosition)
    function getUpPosition (e) {
      states.upPosition = e.pageX

      const isDragRight = states.downPosition < states.upPosition

      if (isDragRight) {
        dispatch(`${storeName}/imgMove`, ['left'])
      } else {
        dispatch(`${storeName}/imgMove`, ['right'])
      }

      document.body.removeEventListener('mouseup', getUpPosition)
    }
  }
  return {
    ...toRefs(states),
    getDownPosition
  }
}
