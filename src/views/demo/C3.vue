<template>
  <div class="container px-0 p-3"
       style="overflow-x:hidden;">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">C3</h2>
    </header>

    <section class="position-relative mb-3 mx-3">
      <h3 class="text-20 p-4 pb-0">圖表</h3>

      <div class="area">
        <Chart />
      </div>
    </section>
  </div>
</template>

<script setup>
import Chart from '@/components/demo/c3/Chart.vue'
</script>

<style lang='scss' scope>

</style>
