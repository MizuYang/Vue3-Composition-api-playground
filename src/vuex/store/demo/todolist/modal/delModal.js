// import axios from 'axios'

const delModal = {
  namespaced: true,
  state: {
    modal: null, // modal 實體
    delTodoInfo: {}
  },
  actions: {
    modalShow ({ state }) {
      state.modal.show()
      document.body.style['padding-right'] = '0px'
    },
    modalHide ({ state }) {
      state.modal.hide()
    }
  },
  mutations: {
    GET_MODAL_ELEMENT (state, el) {
      state.modal = el
    },
    GET_DEL_TODO_INFO (state, info) {
      state.delTodoInfo = info
    }
  },
  getters: {
  }
}

export default delModal
