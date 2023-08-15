<template>
  <div class="container mt-3 px-0 p-3">
    <section class="p-3 pb-0">
      <h2 class="text-20 mb-2" :data-theme="theme">父層</h2>

      <input type="text" class="form-control" ref="input" v-model="fatherVariable">
      <p class="my-2" :data-theme="theme">fatherVariable：<code>{{ fatherVariable }}</code></p>

      <pre class="bg-dark text-light mb-1 p-2">
{{ '<PropsChild :fatherVariable="fatherVariable" />' }}</pre>
      <pre class="bg-dark text-light p-2">
const fatherVariable = ref('父層的文字')</pre>
    </section>
    <PropsChild :fatherVariable="fatherVariable" />
  </div>
</template>

<script setup>
import { ref, toRef, onMounted } from 'vue'
import { useStore } from 'vuex'
import PropsChild from '@/components/PropsChild.vue'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const fatherVariable = ref('父層的文字')
const input = ref(null)

onMounted(() => {
  input.value.focus()
})

</script>

<style lang='scss' scope></style>
