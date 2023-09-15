<template>
  <div id="chart"></div>
</template>

<script setup>
import { useChart } from '@/composables/c3/useChart.js'

useChart()
</script>

<style lang='scss' scope>
.c3-target-data1-class {
  font-size: 20px;
}
</style>
