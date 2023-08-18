import { reactive, toRefs } from 'vue'

export function useAddNum () {
  const states = reactive({ num: 0 })

  function addNum () { states.num++ }

  return {
    ...toRefs(states),
    addNum
  }
}
