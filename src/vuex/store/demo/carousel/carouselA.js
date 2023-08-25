// import axios from 'axios'

import { throttle } from 'lodash'
import debounce from 'lodash.debounce'

const carouselStoreA = {
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
    carouselA: {
      // 單一輪播
      // position: 0,
      // timer: null,
      isOverflowHiddenShow: JSON.parse(localStorage.getItem('isOverflowHiddenShow_A')),
      transition: 500,
      direction: 'left',
      translateX: 0,
      hasTransition: true,
      isAutoPlay: 'true',
      isPlay: false,
      timer: null,
      speed: 500
    }
  },
  actions: {
    imgMove: throttle(function ({ state, commit }, [direction = 'left', isAutoPlay]) {
      const { carouselA } = state

      if (direction === 'left') {
        checkImgHeaderReset()
      } else if (direction === 'right') {
        checkImgFooterReset()
      } else if (direction === 'top') {
        checkImgHeaderReset()
      } else if (direction === 'bottom') {
        checkImgFooterReset()
      }

      console.log(isAutoPlay)
      if (isAutoPlay !== 'isAutoPlay') {
        console.log('停止播放')
        commit('CLEAR_TIMER')
      }

      function checkImgHeaderReset () {
        // 若播放到第一張圖
        // if (carouselA.translateX - 200 === 0) {
        if (carouselA.translateX - 200 === -200) {
          // 1. 暫時移除 transition 漸變效果
          state.carouselA.hasTransition = false

          // 2. 將輪播圖顯示設為最後一張圖 (最後一張圖也就是複製的第一張圖)
          commit('GOTO_TARGET_IMAGE', -1400)

          setTimeout(() => {
            // 3. 開啟漸變效果
            state.carouselA.hasTransition = true
            // 4.將輪播圖顯示設為倒數第二張 (原本的最後一張圖)
            commit('GOTO_TARGET_IMAGE', -1200)
          }, 40)
        } else {
          commit('UPDATE_TRANSLATE_X', 200)
        }
      }
      function checkImgFooterReset () {
        // 若播放到最後一張圖
        if (carouselA.translateX - 200 === -1400) {
          // 1. 暫時移除 transition 漸變效果
          state.carouselA.hasTransition = false

          // 2. 將輪播圖顯示設為第一張 (第一張圖也就是複製的最後一張圖)
          commit('GOTO_TARGET_IMAGE', 200)

          setTimeout(() => {
            // 3. 開啟漸變效果
            state.carouselA.hasTransition = true
            // 4.將輪播圖顯示設為第二張 (原本的第一張圖)
            commit('GOTO_TARGET_IMAGE', 0)
          }, 40)
        } else {
          commit('UPDATE_TRANSLATE_X', -200)
        }
      }
    }, 200),
    // 複製第一張、最後一張圖放到第一個和最後一個
    // 輪播結構：[最後一張圖] [第一張圖] [第二張圖] [第三張圖] [最後一張圖] [第一張圖]
    copyImgHeadAndFoot ({ state, commit }) {
      const data = JSON.parse(JSON.stringify(state.carouselImages))

      // 更改 頭尾圖片 translateX
      const firestData = JSON.parse(JSON.stringify(data[0]))
      firestData.translateX = -1400
      const lastData = JSON.parse(JSON.stringify(data.at(-1)))
      lastData.translateX = 200
      const newData = [lastData, ...data, firestData]

      commit('COPY_IMG_ONE', newData)
    },
    overflowToggle ({ state, commit }) {
      const { isOverflowHiddenShow } = state.carouselA

      localStorage.setItem('isOverflowHiddenShow_A', JSON.stringify(!isOverflowHiddenShow))

      commit('OVERFLOW_HIDDEN_TOGGLE', !isOverflowHiddenShow)
    },
    autoPlayToggle ({ state, commit }) {
      const { isAutoPlay } = state

      localStorage.setItem('isAutoPlay_A', JSON.stringify(!isAutoPlay))

      commit('AUTO_PLAY_TOGGLE', !isAutoPlay)
    },
    autoPlay ({ state, commit, dispatch }) {
      const { isAutoPlay, direction, speed, isPlay } = state.carouselA
      if (!isPlay) {
        commit('CLEAR_TIMER')
        return
      }

      if (isAutoPlay === 'true') {
        console.log('自動播放')
        const timer = setInterval(() => {
          dispatch('imgMove', [direction, 'isAutoPlay'])
        }, speed || 0)
        commit('GET_TIMER', timer)
      }
    },
    changeSpeed: debounce(function ({ state, dispatch, commit }) {
      const { timer, direction, speed } = state.carouselA
      if (timer) {
        commit('CLEAR_TIMER')

        const newTimer = setInterval(() => {
          dispatch('imgMove', [direction, 'isAutoPlay'])
        }, speed || 0)
        commit('GET_TIMER', newTimer)
      }
    }, 200)
  },
  mutations: {
    COPY_IMG_ONE (state, data) {
      state.carouselImages = data
    },
    OVERFLOW_HIDDEN_TOGGLE (state, value) {
      state.carouselA.isOverflowHiddenShow = value
    },
    AUTO_PLAY_TOGGLE (state, value) {
      state.carouselA.isOverflowHiddenShow = value
    },
    UPDATE_TRANSLATE_X (state, translateX) {
      state.carouselA.translateX += translateX
    },
    GOTO_TARGET_IMAGE (state, targetTranslateX) {
      state.carouselA.translateX = targetTranslateX
    },
    GET_TIMER (state, timer) {
      state.carouselA.timer = timer
    },
    CLEAR_TIMER (state) {
      if (state.carouselA.timer) clearInterval(state.carouselA.timer)
    },
    STOP_PLAY (state) {
      state.carouselA.isPlay = false
    }
  },
  getters: {
  }
}

export default carouselStoreA
