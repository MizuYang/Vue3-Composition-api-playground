<template>
  <div class="container pt-3 px-0">
    <section class="p-3 pb-0">
      <h2 class="text-20 mb-1" :data-theme="theme">父層</h2>

      <p class="my-2" :data-theme="theme">
        先用 <code>ref()</code>
        抓取子層元素，再抓取子層 <code>defineExpose({})</code> 暴露的變數
      </p>
    </section>

    <!-- 1. 用變數去接子層的暴露的變數, 並不會響應式更新 -->
    <section class="p-3 pb-0">
      <h3 :data-theme="theme">1. 用變數去接子層的暴露的變數， 並不會響應式更新</h3>
      <p class="mb-2" :data-theme="theme">
        <code v-pre>{{ data }}</code>：{{ data }}
      </p>
    </section>

    <!-- 2. 透過 ref() 讀取子元件的變數，才會響應式更新 -->
    <section class="p-3 pb-0">
      <h3 :data-theme="theme">2. 透過 <code>ref()</code> 讀取子元件的變數，才會響應式更新</h3>
      <p class="mb-2" :data-theme="theme">
        <code v-pre>{{ child?.childData }}</code>：{{ child?.childData }}
      </p>
    </section>

    <!-- 程式碼區塊 -->
    <section class="p-3 pb-0">
      <pre class="bg-dark text-light p-2">
{{ '<DefineExposeChild ref="child" />' }}</pre>
      <pre class="bg-dark text-light p-2"><span class="text-danger">// 子元件的 ref 元素</span>
const child = ref(null)
<span class="text-danger">
// 若父層用變數去接子層暴露的變數
// 此變數無法隨著子層該變數改變而響應式更新</span>
const data = ref(null)
watchEffect(() => {
  nextTick(() => {
    data.value = child.value.childData
  })
})</pre>
    </section>
    <DefineExposeChild ref="child" />
  </div>
</template>

<script setup>
import { ref, toRef, watchEffect, nextTick } from 'vue'
import { useStore } from 'vuex'
import DefineExposeChild from '@/components/scriptSetup/DefineExposeChild.vue'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const child = ref(null)
const data = ref(null)

watchEffect(() => {
  nextTick(() => {
    data.value = child.value.childData
  })
})

</script>

<style lang='scss'>

</style>
