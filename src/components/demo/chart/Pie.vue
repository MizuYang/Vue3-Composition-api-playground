<template>
 <Pie :data="data" :options="options" ref="pie" @click="onClick" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { usePieConfig } from '@/composables/chart/items/usePieConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)
// 顯示項目的數據在圖表上
ChartJS.register(ChartDataLabels)

const { data, options, pie, onClick } = usePieConfig()
</script>

<style lang='scss' scope>

</style>
