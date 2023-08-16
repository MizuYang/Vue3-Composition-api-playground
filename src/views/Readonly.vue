<template>
  <div class="container d-flex flex-column mt-3 px-0 pt-3" :data-theme="theme">
     <section class="my-3 px-3">
       <h2 class="text-20">Readonly</h2>
     </section>

     <!-- 原始 data -->
     <section class="area my-3 p-3">
       <h3>原始data</h3>
       <p>data：<code>{{ data }}</code></p>
       <pre class="bg-dark text-light mt-1 mb-0 p-2">const data = reactive({
  name: 'mizu',
  age: 18
})</pre>
     </section>

     <!-- 修改未使用 readonly 的 newData 原始 data 也會被修改到(響應式) -->
     <section class="area my-3 p-3">
       <h3>修改未使用 readonly 的 newData 原始 data 也會被修改到(響應式)</h3>
       <p>newData：<code>{{ newData }}</code></p>
       <pre class="bg-dark text-light my-2 p-2">const newData = data</pre>
       <label for="newData">
        綁定 newData：
        <input type="text" v-model="newData.name" id="newData">
       </label>
     </section>

     <!-- 修改 readonly 的變數，無法改變其值 -->
     <section class="area my-3 p-3">
       <h3>修改 readonly 的變數，無法改變其值</h3>
       <p>readonlyData：<code>{{ readonlyData }}</code></p>
       <pre class="bg-dark text-light my-2 p-2">const readonlyData = readonly(data)</pre>
       <label for="readonlyData" class="mb-2">
        綁定 readonlyData：
        <input type="text" v-model="readonlyData.name" id="readonlyData">
       </label>
       <p>
        若不小心改到 data 則會跳出警告： <br />
        <span class="text-danger">[Vue warn] Set operation on key "name" failed: target is readonly.</span>
       </p>
     </section>
  </div>
</template>

<script setup>
import { reactive, toRefs, readonly } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const { theme } = toRefs(themeStore)

const data = reactive({
  name: 'mizu',
  age: 18
})
const newData = data
const readonlyData = readonly(data)

</script>

<style lang='scss'>

</style>
