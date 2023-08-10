<template>
  <section class="p-3 pb-0">
    <h2 class="text-20 mb-1" :data-theme="themeStore.theme">子層</h2>
    <p class="text-20 mb-1" :data-theme="themeStore.theme">
      myFatherVariable：<code>{{ myFatherVariable }}</code> <br />
      <pre class="bg-dark text-light p-2">
props: ['fatherVariable'],
setup (props) {
  const myFatherVariable = ref(props.fatherVariable)
  // props 更新 就自動賦予上去 達到響應式更新
  watchEffect(() => {
    myFatherVariable.value = props.fatherVariable
  })
  return {
    myFatherVariable,
    props
  }
}</pre>
      props: <code>{{ props }}</code> <br />
      props.fatherVariable: <code>{{ props.fatherVariable }}</code>
    </p>
  </section>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['fatherVariable'],

  setup (props) {
    const store = useStore()
    const themeStore = store.state.theme
    const myFatherVariable = ref(props.fatherVariable)

    // props 更新 就自動賦予上去 達到響應式更新
    watchEffect(() => {
      myFatherVariable.value = props.fatherVariable
    })

    return {
      themeStore,
      myFatherVariable,
      props
    }
  }
}
</script><style lang='scss' scope></style>
