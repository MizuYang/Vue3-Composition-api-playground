<template>
  <section class="px-3">
    <h2 class="text-20 mb-1" :data-theme="themeStore.theme">子層</h2>
    <p class="mb-1" :data-theme="themeStore.theme">
      myFatherVariable：<code>{{ myFatherVariable }}</code> <br />
      <pre class="bg-dark text-16 text-light p-2">
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

  <!-- toRef、toRefs -->
  <section class="px-3">
    <div>
      <p class="text-20" :data-theme="themeStore.theme">
        <code>toRef()</code>：<code v-pre>{{ myToRef }}</code> => {{ myToRef }}
      </p>
      <pre class="bg-dark text-light mb-1 p-2">const myToRef = toRef(props, 'fatherVariable')
return { myToRef }</pre>
    </div>

    <div>
      <p class="text-20" :data-theme="themeStore.theme">
        <code>toRefs()</code>：<code v-pre>{{ myToRefs }}</code> => {{ myToRefs }}
        <pre class="bg-dark text-16 text-light mb-1 p-2">const { fatherVariable: myToRefs } = toRefs(props)
return { myToRefs }</pre>
      </p>
    </div>
  </section>
</template>

<script>
import { ref, toRef, toRefs, watchEffect } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['fatherVariable'],

  setup (props) {
    const store = useStore()
    const themeStore = store.state.theme
    const myFatherVariable = ref(props.fatherVariable)
    const myToRef = toRef(props, 'fatherVariable')
    const { fatherVariable: myToRefs } = toRefs(props)

    // props 更新 就自動賦予上去 達到響應式更新
    watchEffect(() => {
      myFatherVariable.value = props.fatherVariable
    })

    return {
      themeStore,
      myFatherVariable,
      props,
      myToRef,
      myToRefs
    }
  }
}
</script><style lang='scss' scope></style>
