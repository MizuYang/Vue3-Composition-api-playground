import { reactive, toRefs } from 'vue'

export function useGetScrollTop () {
  const states = reactive({ scrollTop: 0 })

  function getScrollTop (e) { states.scrollTop = e.target.scrollTop }

  return {
    ...toRefs(states),
    getScrollTop
  }
}
