<template>
  <Doughnut :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { useDoughnutConfig } from '@/composables/chart/items/useDoughnutConfig.js'

const { data, options } = useDoughnutConfig()

ChartJS.register(ArcElement, Tooltip, Legend)
</script>

<style lang='scss' scope>

</style>
