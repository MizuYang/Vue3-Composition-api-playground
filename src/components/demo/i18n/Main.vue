<template>
  <ul class="row row-cols-3 g-2">
    <li class="col"
        v-for="item in 6" :key="item">
      <Card />
    </li>
  </ul>
</template>

<script setup>
import Card from '@/components/demo/i18n/items/Card.vue'

</script>

<style lang='scss' scope>

</style>
