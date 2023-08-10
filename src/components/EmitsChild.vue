<template>
  <div class="container px-0 pb-5">
    <section class="p-3">
      <h2 class="text-20 mb-3" :data-theme="theme">子層</h2>
      <!-- <p class="text-20 my-2" :data-theme="theme">{{ theme }}</p> -->
      <button type="button" class="btn btn-secondary mb-1 p-1" @click="emit('addNum')">寫法一：點我將父層的 num++</button>

      <pre class="bg-dark text-light mt-2 p-2">
{{ `<button type="button"  @click="emit('addNum')"><button>` }}</pre>
      <pre class="bg-dark text-light p-2">
emits: ['addNum'],
setup (props, { emit }) {
  return { emit }
}</pre>

      <br />

      <button type="button" class="btn btn-secondary p-1" @click="addNum">寫法二：點我將父層的 num++</button>
      <pre class="bg-dark text-light mt-2 p-2">
{{ `<button type="button" @click="addNum"><button>` }}</pre>
      <pre class="bg-dark text-light p-2">
emits: ['addNum'],
setup (props, { emit }) {
  const addNum = () => emit('addNum')
  return { addNum }
}</pre>
    </section>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
export default {
  emits: ['addNum'],
  setup (props, { emit }) {
    const store = useStore()
    const themeStore = store.state.theme
    const theme = ref(themeStore.theme)
    const addNum = () => emit('addNum')

    // 響應式更新 store
    watchEffect(() => {
      theme.value = themeStore.theme
    })

    return {
      theme,
      emit,
      addNum
    }
  }

}
</script>

<style lang='scss' scope></style>
