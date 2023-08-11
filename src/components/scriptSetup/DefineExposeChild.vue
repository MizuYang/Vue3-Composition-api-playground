<template>
  <div class="container pt-3 px-0">
    <section class="p-3 pb-0">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">子層</h2>

      <input type="text" class="form-control" v-model="childData">

      <h2 class="mt-2" :data-theme="themeStore.theme"><code v-pre>{{childData}}</code>：{{childData}}</h2>

      <p class="my-2" :data-theme="themeStore.theme">使用 <code>defineExpose({})</code> 將子層的變數暴露，父層才抓取的到</p>

      <pre class="bg-dark text-light p-2">const childData = ref('子層的data')
defineExpose({
  childData
})</pre>
    </section>
  </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const childData = ref('子層的data')
defineExpose({
  childData
})

</script>

<style lang='scss'>

</style>
