<template>
  <div class="container pt-3 px-0">
    <section class="p-3 pb-0">
      <h2 class="text-20 mb-1" :data-theme="theme">父層</h2>

      <p class="text-20 my-2" :data-theme="theme"><code>num：</code>{{ num }}</p>

      <pre class="bg-dark text-light p-2">
{{ '<EmitsChild @addNum="addNum" />' }}</pre>
      <pre class="bg-dark text-light p-2">
const num = ref(0)
function addNum () {
  num.value++
}
return {
  num,
  addNum
}</pre>
    </section>
    <EmitsChild @addNum="addNum" />
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import EmitsChild from '@/components/EmitsChild.vue'
export default {
  components: {
    EmitsChild
  },
  setup () {
    const store = useStore()
    const themeStore = store.state.theme
    const theme = ref(themeStore.theme)
    const num = ref(0)

    watchEffect(() => {
      theme.value = themeStore.theme
    })

    function addNum () {
      num.value++
    }

    return {
      num,
      theme,
      themeStore,
      addNum
    }
  }

}
</script>

<style lang='scss' scope></style>
