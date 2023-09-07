<template>
  <Bar :data="data" :options="options" style="min-height:500px;" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import { useBarConfig } from '@/composables/chart/items/useBarConfig.js'

const { data, options } = useBarConfig()

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
// 顯示項目的數據在圖表上
ChartJS.register(ChartDataLabels)

// 設置文字樣式  (也可在 options.plugins 中做設置)
// ChartJS.defaults.set('plugins.datalabels', {
//   color: '#fff'
// })
// ChartJS.defaults.font.size = 20
ChartJS.defaults.color = '#9B9494' // 修改外圍文字顏色
// console.log(ChartJS.defaults)
</script>

<style lang='scss' scope>

</style>
