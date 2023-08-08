// import axios from 'axios'

const theme = {
  namespaced: true,
  state: {
    theme: 'dark' // light, dark
  },
  actions: {
    changeTheme ({ commit }, theme) {
      console.log('切換主題')
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', JSON.stringify(newTheme))
      commit('UPDATE_THEME', newTheme)
    },
    getTheme ({ commit }) {
      console.log('取得主題')
      const newTheme = JSON.parse(localStorage.getItem('theme')) || 'dark'
      commit('UPDATE_THEME', newTheme)
    }
  },
  mutations: {
    UPDATE_THEME (state, theme) {
      state.theme = theme
    }
  },
  getters: {
  }
}

export default theme
