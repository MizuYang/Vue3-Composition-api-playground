<template>
  <div class="container px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">C3</h2>
    </header>

    <section class="position-relative mb-3 mx-3">
      <h3 class="text-20 mt-3 mb-2">圖表</h3>

      <div>
        <ChangeChartTypeBtn />
      </div>

      <div class="mb-2">
        <RotateChartBtn />
      </div>

      <div class="area p-3">
        <Chart />
      </div>
    </section>
  </div>
</template>

<script setup>
import ChangeChartTypeBtn from '@/components/demo/c3/ChangeChartTypeBtn.vue'
import Chart from '@/components/demo/c3/Chart.vue'
import RotateChartBtn from '@/components/demo/c3/RotateChartBtn.vue'
</script>

<style lang='scss' scope>
[data-theme="dark"] {
  // 修改 hover 圖表的標籤樣式
  // 標題
  & .c3-tooltip > tbody > tr > th {
    color: #fff;
  }
  // 數據名稱
  & .c3-tooltip-container .name {
    color: #000;
  }
  // 值
  & .c3-tooltip-container .value {
  color: #000;
  }
}
</style>
