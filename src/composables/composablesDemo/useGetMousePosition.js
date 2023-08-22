import { reactive, onUnmounted } from 'vue'
import throttle from 'lodash/throttle.js'

export function useGetMousePosition () {
  const states = reactive({})
  const newFn = throttle(getMousePosition, 200)
  document.documentElement.addEventListener('mousemove', newFn)

  // 離開頁面 移除事件
  onUnmounted(() => document.documentElement.removeEventListener('mousemove', newFn))

  function getMousePosition (e) {
    states.x = e.pageX
    states.y = e.pageY
  }
  return { states }
}
