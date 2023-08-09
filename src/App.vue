<template>
  <nav class="position-fixed top-0 w-100 d-flex align-items-center bg-dark text-light ps-3 py-2"
       style="max-height: 45px;">
    <router-link to="/" class="text-light mx-2">Home</router-link> |
    <router-link to="/watch" class="text-light mx-2">watch</router-link> |
    <router-link to="/computed" class="text-light mx-2">computed</router-link> |
    <!-- <button type="button" class="btn text-light ms-auto me-3" @click="changeTheme">
      {{ themeStore.theme==='dark'?'白天':'黑暗' }}
    </button> -->
    <ChangeThemeSwitch />
    <!-- <ChangeThemeSwitch class="position-absolute" /> -->
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
    // const changeTheme = () => store.dispatch('theme/changeTheme')
    const getBodyBgColor = () => store.dispatch('theme/getBodyBgColor')

    getTheme()

    onMounted(() => {
      getBodyBgColor()
    })

    return {
      themeStore,
      getTheme
      // changeTheme
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
