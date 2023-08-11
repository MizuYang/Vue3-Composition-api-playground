<template>
  <nav class="position-fixed top-0 w-100"
       style="height: 45px;line-height:1.5;">
    <div class="container-lg position-relative d-flex flex-wrap align-items-center bg-dark text-light py-2">
      <router-link to="/" class="text-light mx-2">Home</router-link> |
      <router-link to="/watch" class="text-light mx-2">watch</router-link> |
      <router-link to="/computed" class="text-light mx-2">computed</router-link> |
      <router-link to="/watchEffect" class="text-light mx-2">watchEffect</router-link> |
      <router-link to="/component" class="text-light mx-2">component</router-link> |
      <router-link to="/props" class="text-light mx-2">props</router-link> |
      <router-link to="/emits" class="text-light mx-2">emits</router-link> |
      <router-link to="/scriptSetup" class="text-light mx-2">scriptSetup</router-link>
      <ChangeThemeSwitch />
    </div>
  </nav>
  <router-view class="mt-5" style="width:100vw;" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ChangeThemeSwitch from '@/components/theme/ChangeThemeSwitch.vue'
export default {
  components: {
    ChangeThemeSwitch
  },
  setup () {
    const store = useStore()
    const themeStore = computed(() => store.state.theme)
    const getTheme = () => store.dispatch('theme/getTheme')
    const getBodyBgColor = () => store.dispatch('theme/getBodyBgColor')

    getTheme()

    onMounted(() => {
      getBodyBgColor()
    })

    return {
      themeStore,
      getTheme
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
