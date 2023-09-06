<template>
  <ul class="container-lg position-relative d-flex flex-wrap align-items-center bg-dark text-light py-2">
      <li v-for="item in data.navbar" :key="`nav-${item}`" class="ms-1">
        <RouterLink :to="`/${item}`" class="text-light px-1" :class="{'bg-fff text-dark':data.currentPageName===item}" style="transition: all .5s;">
          {{ item }}
        </RouterLink>
        |
      </li>

      <ChangeThemeSwitch />
    </ul>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import ChangeThemeSwitch from '@/components/theme/ChangeThemeSwitch.vue'

const route = useRoute()
const data = reactive({
  navbar: [
    'home',
    'watch',
    'computed',
    'watchEffect',
    'component',
    'props',
    'emits',
    'defineExpose',
    'scriptSetup',
    'vBindIs',
    'slot',
    'lifecycle',
    'teleport',
    'readonly',
    'toRaw',
    'composables',
    'todoList',
    'carousel',
    'swiper',
    'scrollingParallax',
    'aos'
  ],
  currentPageName: ''
})

watch(route, () => {
  getCurrentPageName()
})
function getCurrentPageName () {
  const pageName = route.meta.pageName
  if (pageName === 'scriptSetup') {
    data.currentPageName = 'scriptSetup'
  } else {
    data.currentPageName = pageName
  }
}
</script>

<style lang='scss'>
// 首字大寫
li > * {
  text-transform: capitalize;
}
</style>
