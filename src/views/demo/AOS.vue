<template>
  <div class="container px-0 p-3"
       style="overflow-x:hidden;">
    <header class="p-3 pb-0">
      <h2 class="text-20 mb-2">AOS</h2>
    </header>

    <template v-for="item in data" :key="`aos-${item.id}`">
      <section class="position-relative area mb-3 px-3">
        <h2 class="text-20 p-4 pb-0"
            data-aos="slide-left"
            data-aos-offset="100"
            data-aos-once="false">
          {{ item.title }} <span class="bg-gray ms-5 px-1">bottom: {{ item.h2Bottom }}</span>
        </h2>
        <p class="text-18 p-4 pt-0"
           data-aos="slide-left"
           data-aos-offset="100"
           data-aos-once="false">
          {{ item.content }} <span class="bg-gray ms-5 px-1">bottom: {{ item.pBottom }}</span>
        </p>
      </section>
    </template>

  </div>
</template>

<script setup>
import { useAos } from '@/composables/aos/Aos.js'

const { data } = useAos()
</script>

<style lang='scss' scope>
</style>
