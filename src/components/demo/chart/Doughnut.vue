<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { useDoughnutConfig } from '@/composables/chart/items/useDoughnutConfig.js'
// 註冊圖表標示
import ChartDataLabels from 'chartjs-plugin-datalabels'

const { data, options } = useDoughnutConfig()

ChartJS.register(ArcElement, Tooltip, Legend)
// 顯示項目的數據在圖表上
ChartJS.register(ChartDataLabels)
</script>

<style lang='scss' scope>

</style>
