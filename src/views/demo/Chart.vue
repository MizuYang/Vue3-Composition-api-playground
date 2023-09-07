<template>
  <div class="container px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Chart</h2>
    </header>

    <!-- 切換圖表按紐 -->
    <section class="area m-3 p-3">
      <button type="button"
              v-for="btn in chartBtn" :key="`btn-${btn.name}`"
              class="btn btn-success me-1 p-2"
              @click="changeChart(btn.component)">
              {{ btn.name }}
      </button>
    </section>

    <!-- 圖表顯示區 -->
    <section class="area m-3 p-3">
      <Component :is="currntChartComponent" />
    </section>

    <!-- 顯示圖表資訊 -->
    <section class="area text-center m-3 p-3">
      <template v-if="activeChartContent.label">
        <h3 class="text-20"> - {{ activeChartContent.label }} -</h3>
        <p class="text-18">
          您點擊了 {{ activeChartContent.index+1 }} 月
          ({{ activeChartContent.month }})  {{ activeChartContent.value }}
        </p>
      </template>
      <tempalte v-else>
        <p class="text-gray text-20 mb-2">{ 點擊圖表顯示其內容 ... }</p>
      </tempalte>
    </section>

  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import { useChart } from '@/composables/chart/useChart.js'

const { currntChartComponent, chartBtn, changeChart } = useChart()

const store = useStore()
const { activeChartContent } = toRefs(store.state.chart)

</script>

<style lang='scss' scope>
</style>
