<template>
  <nav class="position-fixed top-0 w-100"
       style="height: 45px;line-height:1.5;">
       <NavbarList />
  </nav>
  <router-view class="mt-5" style="width:100vw;" />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import NavbarList from '@/components/layout/NavbarList.vue'

const store = useStore()
const getTheme = () => store.dispatch('theme/getTheme')
const getBodyBgColor = () => store.dispatch('theme/getBodyBgColor')

getTheme()

onMounted(() => {
  getBodyBgColor()
})
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
