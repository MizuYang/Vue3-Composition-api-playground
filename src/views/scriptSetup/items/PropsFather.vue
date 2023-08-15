<template>
  <div class="container mt-3 px-0 pt-3">
    <h2 class="text-20" :data-theme="theme">
      <code>defineProps</code> (不需要 <code>import</code> )
    </h2>

    <!-- v-model 綁定 props 的變數 -->
    <section class="p-3 ps-4 pb-0">
      <h3 class="text-20" :data-theme="theme">父層</h3>
      <input type="text" class="form-control my-2" v-model="t1" placeholder="t1">
      <input type="text" class="form-control" v-model="t2" placeholder="t2">
    </section>

    <section class="p-3 ps-4 pb-0">
      <pre class="bg-dark text-light mb-2 p-2">{{ '<PropsChild :t1="t1" :t2="t2" />' }}</pre>
      <pre class="bg-dark text-light mb-0 p-2">const t1 = ref('')
const t2 = ref('')</pre>
    </section>

    <PropsChild :t1="t1" :t2="t2" />
  </div>
</template>

<script setup>
import { ref, toRef } from 'vue'
import { useStore } from 'vuex'
import PropsChild from '@/components/scriptSetup/PropsChild.vue'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const t1 = ref('')
const t2 = ref('')
</script>

<style lang='scss'>
</style>
