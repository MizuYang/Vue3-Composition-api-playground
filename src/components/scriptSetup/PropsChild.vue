<template>
  <div class="container mt-5 ps-4">
    <h3 class="text-20" :data-theme="themeStore.theme">子層</h3>
  </div>

  <!-- 渲染 props 資料 -->
  <section class="p-3 ps-4 pb-0">
    <h4 class="mb-2" :data-theme="themeStore.theme">父層 props 進來的變數</h4>
    <p :data-theme="themeStore.theme"><code v-pre>{{ props }}</code>："<code>{{ props }}</code>"</p>
    <p :data-theme="themeStore.theme"><code v-pre>{{ props.t1 }}</code>："<code>{{ props.t1 }}</code>"</p>
    <p :data-theme="themeStore.theme"><code v-pre>{{ props.t2 }}</code>："<code>{{ props.t2 }}</code>"</p>
  </section>

  <section class="p-3 ps-4 pb-0">
    <pre class="bg-dark text-light p-2">const props = defineProps(['t1', 't2'])</pre>
  </section>

</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const props = defineProps(['t1', 't2'])

</script>

<style lang='scss'>
</style>
