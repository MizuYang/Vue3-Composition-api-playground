<template>
  <div class="container my-3 px-0 py-3">
    <section class="p-3">
      <h2 class="text-20 mb-2" :data-theme="themeStore.theme">父層</h2>

      <input type="text" class="form-control" ref="input" v-model="fatherVariable">
      <p class="text-20  my-2" :data-theme="themeStore.theme"><code>fatherVariable：</code>{{ fatherVariable }}</p>

      <pre class="bg-dark text-light p-2">
{{ '<PropsChild :fatherVariable="fatherVariable" />' }}</pre>
      <pre class="bg-dark text-light p-2">
const fatherVariable = ref('父層的文字')</pre>
    </section>
    <PropsChild :fatherVariable="fatherVariable" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import PropsChild from '@/components/PropsChild.vue'
export default {
  components: {
    PropsChild
  },
  setup () {
    const store = useStore()
    const themeStore = store.state.theme
    const fatherVariable = ref('父層的文字')
    const input = ref(null)

    onMounted(() => {
      input.value.focus()
    })

    return {
      input,
      themeStore,
      fatherVariable
    }
  }

}
</script><style lang='scss' scope></style>
