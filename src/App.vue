<template>
  <nav class="position-fixed top-0 w-100"
       style="height: 45px;line-height:1.5;">
       <NavbarList />
  </nav>
  <router-view class="mt-5" :data-theme="theme" style="width:100vw;" />
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import NavbarList from '@/components/layout/NavbarList.vue'

const store = useStore()
const { dispatch } = store
dispatch('theme/getTheme')
dispatch('theme/getBodyBgColor')

const { theme } = toRefs(store.state.theme)
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
