<template>
  <div class="container pt-3 px-0">
    <section class="p-3 pb-0">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">父層</h2>

      <p class="text-20 my-2" :data-theme="themeStore.theme">num：<code>{{ num }}</code></p>

      <pre class="bg-dark text-light p-2">
{{ '<EmitsChild @addNum="addNum" />' }}</pre>
      <pre class="bg-dark text-light p-2">
const num = ref(0)
function addNum () {
  num.value++
}</pre>
    </section>
    <EmitsChild @addNum="addNum" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import EmitsChild from '@/components/scriptSetup/EmitsChild.vue'
const store = useStore()
const themeStore = store.state.theme
const num = ref(0)

function addNum () {
  num.value++
}

</script>

<style lang='scss' scope></style>
