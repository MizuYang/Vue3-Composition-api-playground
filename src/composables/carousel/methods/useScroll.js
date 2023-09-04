import { useStore } from 'vuex'

export function useScroll () {
  const store = useStore()
  const { dispatch } = store

  function scroll (e, storeName) {
    const isPlayRight = e.wheelDeltaY === -120

    if (isPlayRight) {
      dispatch(`${storeName}/imgMove`, ['right'])
    } else {
      dispatch(`${storeName}/imgMove`, ['left'])
    }
  }

  return {
    scroll
  }
}
