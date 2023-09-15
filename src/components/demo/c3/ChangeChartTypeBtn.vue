<template>
  <ul class="d-flex align-items-center flex-wrap mb-2">
    <li class="m-1" v-for="btn in chartTypeList" :key="btn">
      <button type="button" class="btn btn-primary p-1 px-2"
              @click="changeChartType(btn)">
        {{ btn }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useChangeChartTypeBtn } from '@/composables/c3/useChangeChartTypeBtn.js'

const { chartTypeList, changeChartType } = useChangeChartTypeBtn()
</script>

<style lang='scss' scope>

</style>
