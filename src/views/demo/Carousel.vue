<template>
  <div class="container mt-3 px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">輪播</h2>
    </header>

    <!-- 單一輪播 -->
    <section class="p-3 pb-0">
      <h3 class="text-18">單一輪播</h3>
      <label for="demo1" class="d-flex align-items-center my-2">
        在文字輸入框 focus 狀態時按
        <code class="mx-2">
          <span class="code-text me-2 p-1 px-2">↑</span>
          <span class="code-text me-2 p-1 px-2">↓</span>
          <span class="code-text me-2 p-1 px-2">←</span>
          <span class="code-text p-1 px-2">→</span>
        </code>
        translateX：
        <input type="text" class="form-control w-25 my-2" id="demo1" v-model.number="translateX"
                @keydown.up="dispatch('carouselA/imgMove', 'top')"
                @keydown.down="dispatch('carouselA/imgMove', 'bottom')"
                @keydown.left="dispatch('carouselA/imgMove', 'left')"
                @keydown.right="dispatch('carouselA/imgMove', 'right')">
      </label>
      <div class="d-flex align-items-center mb-2">
        <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
                @click="commit('carouselA/OVERFLOW_HIDDEN_TOGGLE')">
          {{ isOverflowHiddenShow?'隱藏溢出圖片':'顯示溢出圖片' }}
        </button>
        <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
                @click="commit('carouselA/OVERFLOW_HIDDEN_TOGGLE')">
          關閉自動播放
        </button>
        <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
                @click="commit('carouselA/OVERFLOW_HIDDEN_TOGGLE')">
          暫停
        </button>

      </div>
      <div class="position-relative"
           :class="{'overflow-hidden':!isOverflowHiddenShow}"
           style="width:200px;height:200px;">
        <div class="position-relative" style="transform:translateX(-200px);">
          <ul class="position-absolute d-flex align-items-center"
              ref="carouselElementA"
              :style="`transform: translateX(${translateX}px);
                       transition: all ${hasTransition&&delay/1000}s;`">
            <li class="position-relative" v-for="item in carouselImages" :key="item.id">
              <!-- 輪播圖 -->
              <CarouselImgae :imgName="item.imgName" />
              <div class="dask">
                <p class="position-absolute-center text-light" style="font-size:50px;">{{ item.id }}</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 切換按鈕 -->
        <ul class="position-absolute start-50 bottom-0 z110 d-flex mb-2"
            style="transform:translateX(-50%);">
          <li class="me-2" v-for="(item,idx) in carouselImages.slice(1, 8)" :key="item.id">
            <button type="button"
                    class="btn rounded-pill btn-hover p-1"
                    :class="translateX===item.translateX?'btn-danger':'btn-light'"
                    @click="commit('carouselA/GOTO_TARGET_IMAGE', -(idx)*200)"
                    @keydown.up="dispatch('carouselA/imgMove', 'top')"
                    @keydown.down="dispatch('carouselA/imgMove', 'bottom')"
                    @keydown.left="dispatch('carouselA/imgMove', 'left')"
                    @keydown.right="dispatch('carouselA/imgMove', 'right')">
            </button>
          </li>
        </ul>
      </div>
    </section>

    <!-- 三個卡片式輪播 -->
    <section class="p-3 pb-0">
      <h3>三個卡片式輪播</h3>
      <!-- 輪播 - 1 -->
      <!-- <template v-if="data[0]"></template> -->
      <!-- 輪播 - 2 -->
      <!-- <template v-if="data[1]"></template> -->
      <!-- 輪播 - 3 -->
      <!-- <template v-if="data[2]"></template> -->
    </section>
  </div>
</template>

<script setup>
import CarouselImgae from '@/components/demo/carousel/CarouselImgae.vue'

import { ref, toRefs, onMounted } from 'vue' // eslint-disable-line
import { useStore } from 'vuex'

import { useCarouselA } from '@/composables/carousel/useCarouselA.js'

const store = useStore()
const { dispatch, commit } = store // eslint-disable-line
const { carouselA, carouselImages, isOverflowHiddenShow } = toRefs(store.state.carouselA)
const { showIndex, delay, direction, translateX, hasTransition  } = toRefs(carouselA.value) // eslint-disable-line

const { carouselElementA } = useCarouselA()

</script>

<style lang='scss' scope>
.dask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000073;
  display: block;
}
.btn-hover:hover {
  background-color: #dc3545;
}
</style>
