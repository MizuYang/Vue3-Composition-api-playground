<template>
  <div class="container d-flex flex-column px-0">
    <!-- 作用域插槽 -->
    <section class="mb-3 p-3">
      <h3 class="mb-1" :data-theme="themeStore.theme">子層</h3>

      <p v-for="slot in slots" :key="slot">
        <slot :name="slot"></slot>
      </p>

<pre class="bg-dark text-light mt-1 p-2">{{ `<p v-for="slot in slots" :key="slot">
  <slot :name="slot"></slot>
</p>` }}</pre>
<pre class="bg-dark text-light mt-1 mb-0 p-2">const slots = ref(['插槽1', '插槽2', '插槽3'])</pre>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const slots = ref(['插槽1', '插槽2', '插槽3'])
</script>

<style lang='scss'>

</style>
