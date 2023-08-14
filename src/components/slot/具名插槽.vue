<template>
  <div class="container d-flex flex-column px-0">
    <!-- 具名插槽 -->
    <section class="mb-3 p-3">
      <h3 class="mb-1" :data-theme="themeStore.theme">子層</h3>

      <pre class="bg-dark text-light mt-1 p-2">{{ `<slot name="text"></slot>` }}</pre>
      <p :data-theme="themeStore.theme">
        <code>slot</code>
        渲染父層的資料：
        "<slot name="text"></slot>"
      </p>
    </section>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const slots = useSlots()
console.log(slots)
console.log('slots.text() 獲得父層 v-slot:text 的"具名插槽"對象(#text)', slots.text())
</script>

<style lang='scss'>

</style>
