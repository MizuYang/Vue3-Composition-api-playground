<template>
  <div class="container px-0 py-5">
    <nav>
      <ScriptSetupTabs />
    </nav>

    <!-- common, props, emits -->
    <RouterView />
  </div>
</template>

<script setup>
import ScriptSetupTabs from '@/components/ScriptSetupTabs.vue'

</script>

<style lang='scss'>
</style>
