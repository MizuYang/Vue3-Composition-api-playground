<template>
  <div class="container mt-4 ps-4">
    <h3 class="text-20" :data-theme="theme">子層</h3>

    <!-- 渲染 props 資料 -->
    <section class="p-3 ps-0 pb-0">
      <h4 class="mb-2" :data-theme="theme">父層 props 進來的變數</h4>
      <p :data-theme="theme"><code v-pre>{{ props }}</code>："<code>{{ props }}</code>"</p>
      <p :data-theme="theme"><code v-pre>{{ props.t1 }}</code>："<code>{{ props.t1 }}</code>"</p>
      <p :data-theme="theme"><code v-pre>{{ props.t2 }}</code>："<code>{{ props.t2 }}</code>"</p>
    </section>

    <section class="p-3 ps-0 pb-0">
      <pre class="bg-dark text-light p-2">const props = defineProps(['t1', 't2'])</pre>
    </section>

    <!-- toRef、toRefs -->
    <section class="pe-3">
      <div class="mb-2">
        <p class="text-20" :data-theme="theme">
          <code>toRef()</code>：<code v-pre>{{ myT1 }}</code> => {{ myT1 }}
        </p>
        <pre class="bg-dark text-light mb-1 p-2">const props = defineProps(['t1', 't2'])
  const myT1 = toRef(props, 't1')</pre>
      </div>

      <div>
        <p class="text-20" :data-theme="theme">
          <code>toRefs()</code>：<code v-pre>{{ myT2 }}</code> => {{ myT2 }}
          <pre class="bg-dark text-16 text-light mb-1 p-2">const props = defineProps(['t1', 't2'])
  const { t2: myT2 } = toRefs(props, 't2')</pre>
        </p>
      </div>
    </section>
  </div>

</template>

<script setup>
import { toRef, toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const props = defineProps(['t1', 't2'])
const myT1 = toRef(props, 't1')
const { t2: myT2 } = toRefs(props, 't2')

</script>

<style lang='scss'>
</style>
