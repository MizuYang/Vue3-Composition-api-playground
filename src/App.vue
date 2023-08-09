<template>
  <nav class="position-fixed top-0 w-100 d-flex align-items-center bg-dark text-light ps-3 py-2"
       style="max-height: 45px;">
    <router-link to="/" class="text-light mx-2">Home</router-link> |
    <router-link to="/watch" class="text-light mx-2">watch</router-link> |
    <router-link to="/computed" class="text-light mx-2">computed</router-link> |
    <router-link to="/watchEffect" class="text-light mx-2">watchEffect</router-link> |
    <router-link to="/component" class="text-light mx-2">component</router-link>
    <div style="transform: scale(0.2);">
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
