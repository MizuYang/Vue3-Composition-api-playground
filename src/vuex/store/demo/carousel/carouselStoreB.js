// import axios from 'axios'

import { throttle } from 'lodash'
import debounce from 'lodash.debounce'

const carouselStoreB = {
  namespaced: true,
  state: {
    carouselImages: [
      {
        imgName: '柯基',
        id: 1,
        translateX: 0
      },
      {
        imgName: '柯基1',
        id: 2,
        translateX: -200
      },
      {
        imgName: '柯基2',
        id: 3,
        translateX: -400
      },
      {
        imgName: '柯基3',
        id: 4,
        translateX: -600
      },
      {
        imgName: '柯基4',
        id: 5,
        translateX: -800
      },
      {
        imgName: '柯基5',
        id: 6,
        translateX: -1000
      },
      {
        imgName: '柯基6',
        id: 7,
        translateX: -1200
      }
    ],
    carouselB: {
      isOverflowHiddenShow: JSON.parse(localStorage.getItem('isOverflowHiddenShow_B')),
      transition: 500,
      direction: 'left', // left, right
      translateX: 0,
      hasTransition: true,
      isAutoPlay: JSON.parse(localStorage.getItem('isAutoPlay_B')),
      isPlay: true,
      timer: null,
      speed: 500
    }
  },
  actions: {
    imgMove: throttle(function ({ state, commit }, [direction = 'left', isAutoPlay]) {
      const { carouselB } = state
      const { isPlay } = carouselB

      if (isAutoPlay !== 'isAutoPlay' || !isPlay) {
        console.log('停止播放')
        commit('CLEAR_TIMER')
      }

      if (direction === 'left') {
        checkImgHeaderReset()
      } else if (direction === 'right') {
        checkImgFooterReset()
      } else if (direction === 'top') {
        checkImgHeaderReset()
      } else if (direction === 'bottom') {
        checkImgFooterReset()
      }

      function checkImgHeaderReset () {
        // 若播放到第一張圖
        if (carouselB.translateX - 200 === -200) {
          // 1. 暫時移除 transition 漸變效果
          state.carouselB.hasTransition = false

          // 2. 將輪播圖顯示設為最後一張圖 (最後一張圖也就是複製的第一張圖)
          commit('GOTO_TARGET_IMAGE', -1400)

          setTimeout(() => {
            // 3. 開啟漸變效果
            state.carouselB.hasTransition = true
            // 4.將輪播圖顯示設為倒數第二張 (原本的最後一張圖)
            commit('GOTO_TARGET_IMAGE', -1200)
          }, 40)
        } else {
          commit('UPDATE_TRANSLATE_X', 200)
        }
      }
      function checkImgFooterReset () {
        // 若播放到最後一張圖
        if (carouselB.translateX - 200 === -1400) {
          // 1. 暫時移除 transition 漸變效果
          state.carouselB.hasTransition = false

          // 2. 將輪播圖顯示設為第一張 (第一張圖也就是複製的最後一張圖)
          commit('GOTO_TARGET_IMAGE', 200)

          setTimeout(() => {
            // 3. 開啟漸變效果
            state.carouselB.hasTransition = true
            // 4.將輪播圖顯示設為第二張 (原本的第一張圖)
            commit('GOTO_TARGET_IMAGE', 0)
          }, 40)
        } else {
          commit('UPDATE_TRANSLATE_X', -200)
        }
      }
    }, 200),
    // 複製第一張、倒數兩張圖放到第一個和最後一個
    // 輪播結構：[最後一張圖] [第一張圖] [第二張圖] [第三張圖] [最後一張圖] [第一張圖] [第二張圖]
    copyImgHeadAndFoot ({ state, commit }) {
      const data = JSON.parse(JSON.stringify(state.carouselImages))

      // 更改 頭尾圖片 translateX
      const headerData = JSON.parse(JSON.stringify(data.slice(0, 3)))
      headerData[0].translateX = -1400
      headerData[1].translateX = -1600
      headerData[2].translateX = -1800

      const footerData = JSON.parse(JSON.stringify(data.slice(-1)))
      footerData.at(-1).translateX = 200

      const newData = [...footerData, ...data, ...headerData]

      commit('COPY_IMG_ONE', newData)
    },
    overflowToggle ({ state, commit }) {
      const { isOverflowHiddenShow } = state.carouselB

      localStorage.setItem('isOverflowHiddenShow_B', JSON.stringify(!isOverflowHiddenShow))

      commit('OVERFLOW_HIDDEN_TOGGLE', !isOverflowHiddenShow)
    },
    autoPlayToggle ({ state, commit }) {
      const { isAutoPlay } = state.carouselB

      let newValue = ''
      if (isAutoPlay === 'true') {
        newValue = 'false'
      } else if (isAutoPlay === 'false') {
        newValue = 'true'
      }

      localStorage.setItem('isAutoPlay_B', JSON.stringify(newValue))

      commit('AUTO_PLAY_TOGGLE', newValue)
    },
    changeDirection ({ state, dispatch, commit }) {
      const { direction, speed, timer } = state.carouselB
      let newDirection = ''
      if (direction === 'left') {
        newDirection = 'right'
      } else if (direction === 'right') {
        newDirection = 'left'
      }
      commit('CHANGE_DIRECTION', newDirection)

      if (timer) {
        commit('CLEAR_TIMER')
        dispatch('startCarousel', [newDirection, speed])
      }
    },
    autoPlay ({ state, commit, dispatch }) {
      const { isAutoPlay, direction, speed, isPlay } = state.carouselB
      if (!isPlay) {
        commit('CLEAR_TIMER')
        return
      }

      if (isAutoPlay === 'true') {
        console.log('自動播放')
        dispatch('startCarousel', [direction, speed])
      }
    },
    startCarousel ({ state, dispatch, commit }, [direction, speed]) {
      const timer = setInterval(() => {
        dispatch('imgMove', [direction, 'isAutoPlay'])
      }, speed || 0)

      commit('GET_TIMER', timer)
    },
    changeSpeed: debounce(function ({ state, dispatch, commit }) {
      const { timer, direction, speed } = state.carouselB
      if (timer) {
        commit('CLEAR_TIMER')

        dispatch('startCarousel', [direction, speed])
      }
    }, 200)
  },
  mutations: {
    COPY_IMG_ONE (state, data) {
      state.carouselImages = data
    },
    OVERFLOW_HIDDEN_TOGGLE (state, value) {
      state.carouselB.isOverflowHiddenShow = value
    },
    UPDATE_AUTO_PLAY (state, value) {
      state.carouselB.isAutoPlay = value
    },
    AUTO_PLAY_TOGGLE (state, value) {
      state.carouselB.isAutoPlay = value
    },
    UPDATE_TRANSLATE_X (state, translateX) {
      state.carouselB.translateX += translateX
    },
    GOTO_TARGET_IMAGE (state, targetTranslateX) {
      state.carouselB.translateX = targetTranslateX
    },
    GET_TIMER (state, timer) {
      state.carouselB.timer = timer
    },
    CLEAR_TIMER (state) {
      if (state.carouselB.timer) {
        clearInterval(state.carouselB.timer)
        state.carouselB.timer = null
      }
    },
    STOP_PLAY (state) {
      state.carouselB.isPlay = false
    },
    START_PLAY (state) {
      state.carouselB.isPlay = true
    },
    CHANGE_DIRECTION (state, direction) {
      state.carouselB.direction = direction
    }
  },
  getters: {
  }
}

export default carouselStoreB
