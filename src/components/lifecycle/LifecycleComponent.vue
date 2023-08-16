<template>
  <section>
    <h3 class="mb-1">子元件</h3>

    <label for="lifecycle" class="form-label">
      改變文字欄位，觸發 <code>onUpdated</code> 生命週期
      <input type="text" class="form-control mt-1" id="lifecycle" v-model="text">
    </label>
  </section>

  <section>
      <pre class="bg-dark text-light mt-1 mb-0 p-2">{{ `<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate,
         onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

console.log('setup created')
onBeforeMount(() => console.log('onBeforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onUnmounted(() => console.log('onUnmounted'))
</script>` }}</pre>
  </section>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const text = ref('')

console.log('setup created')
onBeforeMount(() => console.log('onBeforeMount'))
onMounted(() => console.log('onMounted'))
onBeforeUpdate(() => console.log('onBeforeUpdate'))
onUpdated(() => console.log('onUpdated'))
onBeforeUnmount(() => console.log('onBeforeUnmount'))
onUnmounted(() => console.log('onUnmounted'))

</script>

<style lang='scss'>

</style>
