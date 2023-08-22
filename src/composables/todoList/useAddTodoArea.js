import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useAddTodoArea () {
  let isComposing = false

  const store = useStore()
  const { commit } = store

  const states = reactive({
    handleCompositionStart,
    handleCompositionEnd,
    handleInput,
    vModelContent
  })

  function handleCompositionStart () {
    isComposing = true
  }
  function handleCompositionEnd (event) {
    const inputText = event.target.value
    isComposing = false
    vModelContent(inputText)
  }
  function handleInput (event) {
    if (!isComposing) {
      const inputText = event.target.value
      vModelContent(inputText)
    }
  }
  // 中、英文輸入完後，得到的字串
  function vModelContent (text) {
    commit('todoList/UPDATE_CONTENT', text)
  }

  return {
    ...toRefs(states)
  }
}
