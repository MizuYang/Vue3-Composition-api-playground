<template>
  <div class="container mt-3 mb-5 px-0 p-3">
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
      <h3>三張圖輪播</h3>
      <Demo2 />
    </section>
  </div>
</template>

<script setup>
import Demo1 from '@/components/demo/carousel/Demo1.vue'
import Demo2 from '@/components/demo/carousel/Demo2.vue'

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
