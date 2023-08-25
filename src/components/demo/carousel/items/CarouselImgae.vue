<template>
  <img :src='require(`@/assets/images/demo/carousel/${imgName}.jpg`)'
       class="object-fit-cover"
       width="200"
       height="200"
       alt='這是柯基的圖片'>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['imgName'])
</script>

<style lang='scss'>

</style>
