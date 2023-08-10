<template>
  <div class="container px-0 pb-5">
    <section class="p-3 pb-0">
      <h2 :data-theme="themeStore.theme">
        <!-- {{ themeStore.theme }} -->
      </h2>
    </section>

    <nav>
      <ScriptSetupTabs />
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import ScriptSetupTabs from '@/components/ScriptSetupTabs.vue'

const store = useStore()
const themeStore = store.state.theme

</script>

<style lang='scss'>

</style>
