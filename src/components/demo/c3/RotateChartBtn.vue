<template>
  <button type="button" class="btn btn-secondary p-1 px-2"
          @click="rotateChart">
    旋轉圖表
  </button>
</template>

<script setup>
import { useRotateChartBtn } from '@/composables/c3/useRotateChartBtn.js'

const { rotateChart } = useRotateChartBtn()
</script>

<style lang='scss' scope>

</style>
