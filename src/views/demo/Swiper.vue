<template>
  <div class="container mt-3 mb-5 px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Swiper</h2>
    </header>

    <section class="my-5 mb-3 p-3 pb-0">
      <Demo1 />
    </section>

    <section class="p-3 pb-0">
      <Demo2 />
    </section>

    <section class="p-3 pb-0">
      <Demo3 />
    </section>

    <section class="p-3 pb-0">
      <Demo4 />
    </section>
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'

import Demo1 from '@/components/demo/swiper/Demo1.vue'
import Demo2 from '@/components/demo/swiper/Demo2.vue'
import Demo3 from '@/components/demo/swiper/Demo3.vue'
import Demo4 from '@/components/demo/swiper/Demo4.vue'

// 註冊 Swiper 自定義元素
register()

</script>

<style lang='scss'>

</style>
