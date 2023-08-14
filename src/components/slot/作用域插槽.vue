<template>
  <div class="container d-flex flex-column px-0">
    <!-- 作用域插槽 -->
    <section class="mb-3 p-3">
      <h3 class="mb-1" :data-theme="themeStore.theme">子層</h3>

      <pre class="bg-dark text-light mt-1 p-2">{{ `<slot name="text2" :text2="'我是子層的資料'"></slot>` }}</pre>
      <!-- slot prop 給父層的資料 -->
      <slot name="text2" :text2="'我是子層的text2'"></slot>
      <slot name="text3" :text3="'我是子層的text3'"></slot>
    </section>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
</script>

<style lang='scss'>

</style>
