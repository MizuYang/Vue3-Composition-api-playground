<template>
  <div class="container mt-3 px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">輪播</h2>
    </header>

    <!-- 單一輪播 -->
    <section class="mb-3 p-3 pb-0">
      <h3 class="text-18">單一輪播</h3>
      <Demo1 />
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
import Demo1 from '@/components/demo/carousel/Demo1.vue'
// import CarouselImgae from '@/components/demo/carousel/items/CarouselImgae.vue'

// import { ref, toRefs, onMounted } from 'vue' // eslint-disable-line
// import { useStore } from 'vuex'

// import { useCarouselA } from '@/composables/carousel/useCarouselA.js'

// const store = useStore()
// const { dispatch, commit } = store // eslint-disable-line
// const { carouselA, carouselImages, isOverflowHiddenShow } = toRefs(store.state.carouselA)
// const { showIndex, delay, direction, translateX, hasTransition  } = toRefs(carouselA.value) // eslint-disable-line

// const { carouselElementA, label } = useCarouselA()

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
