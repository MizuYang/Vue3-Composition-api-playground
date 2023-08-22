
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'
import Modal from 'bootstrap/js/dist/modal.js'

export function useDelModal () {
  const delModal = ref(null)
  const store = useStore()
  const { commit } = store
  const states = reactive({
    delModal
  })

  onMounted(() => {
    const el = new Modal(delModal.value)
    commit('delModal/GET_MODAL_ELEMENT', el)
  })

  return {
    ...toRefs(states)
  }
}
