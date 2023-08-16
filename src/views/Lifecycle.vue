<template>
  <div class="container d-flex flex-column my-3 px-0 py-3">
     <section class="my-3 px-3" :data-theme="theme">
       <h2 class="text-20">生命週期</h2>
     </section>

     <section class="mb-2 px-3" :data-theme="theme">
       <h3>父層</h3>
     </section>

    <section class="mb-2 px-3" :data-theme="theme">
      <h3 class="mb-2">顯示、隱藏子元件，觸發卸載生命週期</h3>
      <button type="button" class="btn btn-sm btn-secondary p-1"
              @click="isShowToggle">
        {{ btnName }}
      </button>
    </section>

    <section class="mb-2 px-3" :data-theme="theme">
      <pre class="bg-dark text-light mb-2 p-2">{{ preTemplate }}</pre>
      <pre class="bg-dark text-light p-2">const isShow = ref(true)
const btnName = computed(() => isShow.value ? '隱藏元件' : '顯示元件')
const isShowToggle = () => (isShow.value = !isShow.value)</pre>
    </section>

    <section class="px-3" :data-theme="theme">
      <LifecycleComponent v-if="isShow" />
    </section>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import LifecycleComponent from '@/components/lifecycle/LifecycleComponent.vue'

const store = useStore()
const themeStore = store.state.theme
const { theme } = toRefs(themeStore)

const isShow = ref(true)
const btnName = computed(() => isShow.value ? '隱藏元件' : '顯示元件')
const isShowToggle = () => (isShow.value = !isShow.value)

const preTemplate = computed(() => `<button type="button" class="btn btn-sm btn-secondary mt-2 p-1"
        @click="isShowToggle">
  {{ btnName }}
</button>
<LifecycleComponent v-if="isShow" />`)

</script>

<style lang='scss'>

</style>
