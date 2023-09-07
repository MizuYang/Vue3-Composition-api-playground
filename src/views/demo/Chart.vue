<template>
  <div class="container px-0 p-3">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">Chart</h2>
    </header>

    <!-- 切換圖表按紐 -->
    <section class="area m-3 p-3">
      <button type="button"
              v-for="btn in chartBtn" :key="`btn-${btn.name}`"
              class="btn me-1 p-2"
              :class="currentChart===btn.currentChart?'btn-primary':'btn-success'"
              @click="changeChart(btn)">
              {{ btn.name }}
      </button>
    </section>

    <!-- 圖表顯示區 -->
    <section class="area m-3 p-3">
      <Component :is="currntChartComponent" />
    </section>
    <!-- 顯示圖表資訊 -->
    <section class="area text-center m-3 p-3">
      <!-- 有圖表資料 (判斷數字的值 .value) -->
      <template v-if="activeChartContent.value">
        <!-- bar -->
        <template v-if="currentChart==='bar'">
          <h3 class="text-20"> - {{ activeChartContent.label }} -</h3>
          <p class="text-18">
            您點擊了 {{ activeChartContent.index+1 }} 月
            ({{ activeChartContent.month }})  {{ activeChartContent.value }}
          </p>
        </template>
        <!-- doughnut -->
        <template v-if="currentChart==='doughnut'">
          <p class="text-18">
            您點擊了 {{ activeChartContent.name }}: {{ activeChartContent.value }}
          </p>
        </template>
      </template>
      <!-- 沒圖表資料 -->
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
const { activeChartContent, currentChart } = toRefs(store.state.chart)

</script>

<style lang='scss' scope>
</style>
