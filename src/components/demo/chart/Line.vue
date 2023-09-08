<template>
  <Line :data="data" :options="options" />
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { useLine } from '@/composables/chart/items/useLineConfig.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
// 顯示項目的數據在圖表上
ChartJS.register(ChartDataLabels)

const { data, options } = useLine()
</script>

<style lang='scss' scope>

</style>
