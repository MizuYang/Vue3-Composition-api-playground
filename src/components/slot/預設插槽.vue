<template>
  <div class="container d-flex flex-column px-0">
    <!-- 預設插槽 (默認插槽) -->
    <section class="mb-3 p-3">
      <h3 class="mb-1" :data-theme="themeStore.theme">子層</h3>

      <pre class="bg-dark text-light mt-1 p-2">{{ `<slot></slot>` }}</pre>
      <p :data-theme="themeStore.theme">
        <code>slot</code>
        渲染父層的資料：
        "<slot></slot>"
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
console.log('slots.default() 獲取默認插槽的虛擬 DOM 對象', slots.default()) // 获取到默认插槽的虚拟dom对象
</script>

<style lang='scss'>

</style>
