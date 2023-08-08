// import axios from 'axios'

const theme = {
  namespaced: true,
  state: {
    theme: '' // light, dark
  },
  actions: {
    changeTheme ({ state, dispatch, commit }) {
      const { theme } = state
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', JSON.stringify(newTheme))
      commit('UPDATE_THEME', newTheme)
      dispatch('getBodyBgColor')
      console.log('切換主題為:', newTheme)
    },
    getTheme ({ commit }) {
      const newTheme = JSON.parse(localStorage.getItem('theme')) || 'dark'
      commit('UPDATE_THEME', newTheme)
      console.log('取得主題', newTheme)
    },
    getBodyBgColor ({ state }) {
      const bgColor = state.theme === 'dark' ? '#000' : '#fff'
      console.log('bgColor', bgColor)
      document.body.style.backgroundColor = bgColor
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
