<template>
<div class="container mt-3 px-0 py-3">
  <h2 class="text-20 mb-2" :data-theme="theme">
    <code>{{ '<script setup>' }}</code> 語法糖
  </h2>

  <!-- setup() 寫法 -->
  <section class="p-3 pb-0">
    <h3 class="text-20  my-2" :data-theme="theme"><code>{{ 'setup()' }}</code> 寫法</h3>
    <pre class="bg-dark text-light p-2">
{{ `<template></template>

<script>
export default {
  components: {},
  setup () {
    return {}
  }
}
</script>

<style lang='scss'></style>
` }}</pre>
  </section>

  <!-- <script setup> 寫法 -->
  <section class="ps-3">
    <h3 class="text-20  my-2" :data-theme="theme"><code>{{ '<script setup>' }}</code> 寫法</h3>
    <pre class="bg-dark text-light p-2">
{{ `<template></template>

<script setup></setup>

<style lang='scss'></style>` }}</pre>
  </section>

  <!-- 列出兩者差異 -->
  <section class="ps-3 pt-3">
    <h3 class="text-20 mb-2" :data-theme="theme">兩者差異</h3>
    <ol class="p-3 pt-1" :data-theme="theme">
      <li class="mb-1 ps-2">
        <div class="d-flex align-items-center">匯入元件後，不需要使用 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">components:{}</pre> 來定義匯入的元件</div>
      </li>
      <li class="mb-1 ps-2">
        可省略 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">export default {}</pre>
      </li>
      <li class="mb-1 ps-2">
        將 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">setup()</pre> 改為 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">{{ '<script setup>' }}</pre>
      </li>
      <li class="ps-2">
        要在 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">{{ '<template>' }}</pre> 使用的變數，不需要使用 <pre class="d-inline bg-dark text-light mx-1 mb-0 p-1">return {}</pre>
      </li>
    </ol>
  </section>
</div>
</template>

<script setup>
import { toRef } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
</script>

<style lang='scss'>

</style>
