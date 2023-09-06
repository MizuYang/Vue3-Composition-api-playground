<template>
  <div class="me-0 px-0 p-3"
       ref="scrollWrap"
       @scroll="getCurPosition"
       style="height:100vh;overflowY:scroll;margin-left:30.5px;padding-top:110px;">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Swiper</h2>
    </header>

    <template v-for="(item,idx) in data" :key="`scrollParallax-${item.id}`">
      <section class="position-relative area mb-3 px-3"
               :ref="(el) => refsData[`item-${idx+1}`] = el"
               style="margin-right: 30px;">
        <h2 class="text-20 animate__animated p-4 pb-0"
            :class="item.isShow.h2?'animate__backInRight':'animate__bounceOutRight'"
            :ref="(el) => refsData[`h2-${idx+1}`] = el">
          {{ item.title }} <span class="bg-gray ms-5 px-1">bottom: {{ item.h2Bottom }}</span>
        </h2>
        <p class="text-18 animate__animated p-4 pt-0"
           :class="item.isShow.p?'animate__backInRight':'animate__bounceOutRight'"
           :ref="(el) => refsData[`p-${idx+1}`] = el">
          {{ item.content }} <span class="bg-gray ms-5 px-1">bottom: {{ item.pBottom }}</span>
        </p>
      </section>
    </template>

    <div class="position-fixed end-0 m-5" style="bottom:70px;">
      <p class="bg-gray txt-20 p-1 px-2">螢幕底部座標: {{ curPostion }}</p>
    </div>
  </div>
</template>

<script setup>
import 'animate.css'
import { useScrollingParallax } from '@/composables/scrollingParallax/useScrollingParallax.js'

const { data, curPostion, scrollWrap, refsData, getCurPosition } = useScrollingParallax()

</script>

<style lang='scss' scope>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
