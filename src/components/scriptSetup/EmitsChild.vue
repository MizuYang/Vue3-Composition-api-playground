<template>
  <div class="container px-0 pb-5">
    <section class="p-3">
      <h2 class="text-20 mb-3" :data-theme="themeStore.theme">子層</h2>
      <button type="button" class="btn btn-secondary mb-1 p-1" @click="emits('addNum')">寫法一：點我將父層的 num++</button>

      <pre class="bg-dark text-light mt-2 p-2">
{{ `<button type="button" @click="emits('addNum')"><button>` }}</pre>
      <pre class="bg-dark text-light p-2">const emits = defineEmits('addNum')</pre>

      <br />

      <button type="button" class="btn btn-secondary p-1" @click="addNum">寫法二：點我將父層的 num++</button>
      <pre class="bg-dark text-light mt-2 p-2">
{{ `<button type="button" @click="addNum"><button>` }}</pre>
      <pre class="bg-dark text-light p-2">const emits = defineEmits('addNum')
const addNum = () => emits('addNum')</pre>
    </section>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const themeStore = store.state.theme
const emits = defineEmits('addNum')
const addNum = () => emits('addNum')

</script>

<style lang='scss' scope></style>
