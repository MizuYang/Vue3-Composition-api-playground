<template>
  <div class="container px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Chart</h2>
    </header>

    <!-- 切換圖表按紐 -->
    <section class="area m-3 p-3">
      <button type="button"
              v-for="btn in chartBtn" :key="`btn-${btn.name}`"
              class="btn btn-success p-2"
              @click="changeChart(btn.component)">
              {{ btn.name }}
      </button>
    </section>

    <!-- 圖表顯示區 -->
    <section class="area m-3 px-3">
      <Component :is="curChartName" />
    </section>

    <!-- 顯示圖表資訊 -->
    <section class="area m-3 p-3">
      <p class="text-gray text-20 text-center mb-2">{ 點擊圖表顯示其內容 ... }</p>
      <!-- <pre class="bg-dark text-light p-2">
const discount = ref(Math.random().toFixed(2))
const price = ref(100)
const discountPrice = computed({
  get () {
    return price.value * discount.value
  },
  set (newDiscount) {
    discount.value = newDiscount
  }
})
function getRandomDiscount () {
  discountPrice.value = Math.random().toFixed(2)
}</pre> -->
    </section>

  </div>
</template>

<script setup>
import { useChart } from '@/composables/chart/useChart.js'

const { curChartName, chartBtn, changeChart } = useChart()

</script>

<style lang='scss' scope>
</style>
