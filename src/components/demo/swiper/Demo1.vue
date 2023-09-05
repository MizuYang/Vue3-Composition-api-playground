<template>
  <Swiper-container class="text-center"
                    navigation="true"
                    pagination="true"
                    init="false"
                    style="max-height:200px;"
                    @slidechange="slidechange">
    <Swiper-slide v-for="num in 10" :key="`swiper-${num}`">
      <img src='https://picsum.photos/166/100' class="w-100 h-100" alt=''>
      <span class="position-absolute-center num" style="font-size:50px;">{{ num }}</span>
      <span class="position-absolute top-0 bottom-0 start-0 end-0" style="background-color:rgba(0,0,0,30%);"></span>
    </Swiper-slide>
  </Swiper-container>

  <div class="d-flex justify-content-center align-items-center mt-2">
    <button type="button" class="btn btn-light border p-1" @click="move('left')">左邊</button>
    <input type="input" class="form-control text-center mx-1"
           v-model.number="realIndex"
           @change="slideTo"
           @keydown.up="move('left')"
           @keydown.down="move('right')"
           @keydown.right="move('right')"
           @keydown.left="move('left')"
           style="width:50px;height:34.5px;">
    <button type="button" class="btn btn-light border p-1" @click="move('right')">右邊</button>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import 'swiper/css'

let swiperEl = null
const swiperConfig = ref(null)
const realIndex = ref(0)

onMounted(() => {
  swiperEl = document.querySelector('Swiper-container')

  // 配置
  swiperConfig.value = {
    slidesPerView: 1,
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: -20
      },
      450: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      767: {
        slidesPerView: 4
      },
      990: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      }
    },

    loop: true, // 無限循環
    // rewind: true, // 第一張圖往左控制,會往右移動到最後一張(最後一張圖往右則是往左移動到第一張圖) "不能與loop模式一起使用"

    // resizeObserver: true, // 啟用後，它將在 swiper 容器上使用 ResizeObserver（如果瀏覽器支持）來檢測容器大小調整（而不是監視窗口大小調整）
    // keyboard: { // 鍵盤控制輪播
    //   enabled: true,
    //   onlyInViewport: false
    // },
    // mousewheel: { // 滑鼠滾輪控制輪播
    //   invert: true
    // },
    // slideToClickedSlide: true, // 設置為true並單擊任何幻燈片都會過渡到該幻燈片
    // updateOnWindowResize: false, // 在窗口調整大小時重新計算幻燈片位置（預設true）
    // grabCursor: true, // 光標拖動時變成手
    // enabled: false, // 輪播的 disabled
    // direction: 'vertical', // 水平、垂直 'horizontal' | 'vertical
    // speed: 500,
    // allowTouchMove: false, // 允許觸控
    // autoplay: { // 自動播放
    //   delay: 1500
    // },
    // noSwipingSelector: 'span', // 指定要禁用滑動的元素
    // preventClicks: true // 設置為true以防止在滑動期間意外點擊鏈接
    // preventClicksPropagation: true // 設置為true在滑動期間停止鏈接上的點擊事件傳播

    injectStyles: [`
        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 15px;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.5);
        }

        .swiper-pagination-bullet-active {
          color: #fff;
          background: #fff;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff;
         }
        `],
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        console.log(className) // swiper-pagination-bullet
        return `<span class="${className}"></span>`
        // return '<span class="' + className + '">' + (index + 1) + '</span>'
      }
    },

    // 輪播圖翻轉效果
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 30,
    //   slideShadows: true
    // },

    on: {
      init () {
        console.log('init')
      },
      beforeDestroy () {
        console.log('swiper銷毀前')
      }
    }
  }

  // 現在我們需要將所有參數分配給 Swiper 元素
  Object.assign(swiperEl, swiperConfig.value)

  // 現在初始化它
  swiperEl.initialize()
  console.log(swiperEl.swiper)

  realIndex.value = swiperEl.swiper.realIndex
})
function slidechange (e) {
  console.log('輪播圖改變', e)
  console.log(swiperEl.swiper)
  realIndex.value = swiperEl.swiper.realIndex
}
function move (direction) {
  if (direction === 'left') {
    swiperEl.swiper.slidePrev(500, false)
  } else if (direction === 'right') {
    swiperEl.swiper.slideNext(500, false)
  }
}

</script>

<style lang='scss' scope>
</style>
