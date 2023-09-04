<template>
  <div class="d-flex align-items-center my-2">
    在文字輸入框 focus 狀態時按
    <code class="mx-2">
      <span class="code-text me-2 p-1 px-2">↑</span>
      <span class="code-text me-2 p-1 px-2">↓</span>
      <span class="code-text me-2 p-1 px-2">←</span>
      <span class="code-text p-1 px-2">→</span>
    </code>
  </div>
  <!-- 輪播設定 -->
  <div class="d-flex">
    <!-- translateX -->
    <label for="demo1" ref="label" class="d-block mb-2">
      translateX：
      <input type="text" class="form-control w-50 my-2" id="demo1" v-model.number="translateX"
             @keydown.up="dispatch('carouselStoreA/imgMove', ['top'])"
             @keydown.down="dispatch('carouselStoreA/imgMove', ['bottom'])"
             @keydown.left="dispatch('carouselStoreA/imgMove', ['left'])"
             @keydown.right="dispatch('carouselStoreA/imgMove', ['right'])">
    </label>
    <!-- transition -->
    <label for="transition" ref="label" class="d-block mb-2">
      transition：
      <input type="text" class="form-control w-50 my-2" id="transition" v-model.number="transition"
             @keydown.up="dispatch('carouselStoreA/imgMove', ['top'])"
             @keydown.down="dispatch('carouselStoreA/imgMove', ['bottom'])"
             @keydown.left="dispatch('carouselStoreA/imgMove', ['left'])"
             @keydown.right="dispatch('carouselStoreA/imgMove', ['right'])">
    </label>
    <!-- autoPlay-speed -->
    <label for="speed" ref="label" class="d-block mb-2">
      autoPlay-speed：
      <input type="text" class="form-control w-50 my-2" id="speed"
             v-model.number="speed"
             @input="dispatch('carouselStoreA/changeSpeed')"
             @keydown.up="dispatch('carouselStoreA/imgMove', ['top'])"
             @keydown.down="dispatch('carouselStoreA/imgMove', ['bottom'])"
             @keydown.left="dispatch('carouselStoreA/imgMove', ['left'])"
             @keydown.right="dispatch('carouselStoreA/imgMove', ['right'])">
    </label>
  </div>
  <!-- 功能區塊 -->
  <div class="d-flex align-items-center mb-2">
    <!-- overflow -->
    <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
            @click="dispatch('carouselStoreA/overflowToggle')">
        {{ isOverflowHiddenShow?'隱藏溢出圖片':'顯示溢出圖片' }}
    </button>
    <!-- autoPlay -->
    <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
            @click="dispatch('carouselStoreA/autoPlayToggle')">
        {{ isAutoPlay==='true'?'關閉自動播放':'開啟自動播放' }}
    </button>
    <!-- isPlay -->
    <div>
      <template v-if="!isPlay">
        <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
                @click="play">
          播放
        </button>
      </template>
      <template v-else-if="isPlay">
        <button type="button" class="btn btn-sm btn-secondary text-14 me-2 p-1"
                @click="commit('carouselStoreA/STOP_PLAY')">
          暫停
        </button>
      </template>
    </div>
    <!-- direction -->
    <div class="d-flex align-items-center area text-14 px-1">
      <label for="flexSwitchCheckDefault" class="me-2 p-1">
          播放圖片方向：
      左
      </label>
      <div class="form-check form-switch my-auto mb-0">
        <input class="form-check-input rounded-pill" type="checkbox" role="switch" id="flexSwitchCheckDefault" @change="dispatch('carouselStoreA/changeDirection')">
        <label class="form-check-label ms-1" for="flexSwitchCheckDefault">右</label>
      </div>
    </div>
  </div>
  <!-- 輪播大容器 -->
  <label for="demo1" class="position-relative d-block"
        :class="{'overflow-hidden':!isOverflowHiddenShow}"
        @mousewheel.prevent="scroll($event,'carouselStoreA')"
        style="width:200px;height:200px;">
    <div class="position-relative" style="transform:translateX(-200px);">
      <ul class="position-absolute d-flex align-items-center"
          ref="carouselElementA"
          :style="`transform: translateX(${translateX}px);
                   transition: transform ${hasTransition&&transition}ms;`">
        <li class="position-relative" v-for="item in carouselImages" :key="item.id">
          <!-- 輪播圖 -->
          <CarouselImgae :imgName="item.imgName" />
          <div class="dask">
            <p class="position-absolute-center text-light" style="font-size:50px;">{{ item.id }}</p>
          </div>
          <p class="text-center">{{ item.translateX }}</p>
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
                @click="gotoTargetImage(-(idx)*200)"
                @keydown.up="dispatch('carouselStoreA/imgMove', ['top'])"
                @keydown.down="dispatch('carouselStoreA/imgMove', ['bottom'])"
                @keydown.left="dispatch('carouselStoreA/imgMove', ['left'])"
                @keydown.right="dispatch('carouselStoreA/imgMove', ['right'])">
        </button>
      </li>
    </ul>
    <!-- 展示的輪播 提示邊框 -->
    <span class="position-absolute top-0 bottom-0 start-0 end-0 p-5" style="border:2px solid red"></span>
  </label>
</template>

<script setup>
import CarouselImgae from '@/components/demo/carousel/items/CarouselImgae.vue'

import { toRefs } from 'vue'
import { useStore } from 'vuex'

import { useCarouselA } from '@/composables/carousel/demoA/useCarouselA.js'
import { useScroll } from '@/composables/carousel/methods/useScroll.js'

const store = useStore()
const { dispatch, commit } = store
const { carouselA, carouselImages } = toRefs(store.state.carouselStoreA)
const {
  transition,
  translateX,
  speed,
  hasTransition,
  isOverflowHiddenShow,
  isAutoPlay,
  isPlay
} = toRefs(carouselA.value)

const { carouselElementA, label, gotoTargetImage, play } = useCarouselA()
const { scroll } = useScroll()
</script>

<style lang='scss'>
</style>
