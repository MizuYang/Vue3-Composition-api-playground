// import axios from 'axios'

import { throttle } from 'lodash'

const carousel = {
  namespaced: true,
  state: {
    isOverflowHiddenShow: true,
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
      showIndex: 0,
      delay: 500,
      direction: 'left',
      translateX: 0,
      hasTransition: true,
      autoPlay: true,
      isPlay: true
    }
  },
  actions: {
    imgMove: throttle(function ({ state, commit }, direction) {
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

      function checkImgHeaderReset () {
        // 若播放到第一張圖
        if (carouselA.translateX - 200 === 0) {
          // 1. 暫時移除 transition 漸變效果
          state.carouselA.hasTransition = false

          // 2. 將輪播圖顯示設為最後一張圖 (最後一張圖也就是複製的第一張圖)
          commit('GOTO_TARGET_IMAGE', -1200)

          setTimeout(() => {
            // 3. 開啟漸變效果
            state.carouselA.hasTransition = true
            // 4.將輪播圖顯示設為倒數第二張 (原本的最後一張圖)
            commit('GOTO_TARGET_IMAGE', -1000)
          }, 50)
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
          }, 50)
        } else {
          commit('UPDATE_TRANSLATE_X', -200)
        }
      }
    }, 200),
    // 複製第一張、最後一張圖放到第一個和最後一個
    // 輪播結構：[最後一張圖] [第一張圖] [第二張圖] [第三張圖] [最後一張圖] [第一張圖]
    copyImgHeadAndFoot ({ state, commit }) {
      const newData = [state.carouselImages.at(-1), ...state.carouselImages, state.carouselImages[0]]
      commit('COPY_IMG_ONE', newData)
    }
  },
  mutations: {
    COPY_IMG_ONE (state, data) {
      state.carouselImages = data
    },
    OVERFLOW_HIDDEN_TOGGLE (state) {
      state.isOverflowHiddenShow = !state.isOverflowHiddenShow
    },
    UPDATE_TRANSLATE_X (state, translateX) {
      state.carouselA.translateX += translateX
    },
    GOTO_TARGET_IMAGE (state, targetTranslateX) {
      state.carouselA.translateX = targetTranslateX
    }
  },
  getters: {
  }
}

export default carousel
