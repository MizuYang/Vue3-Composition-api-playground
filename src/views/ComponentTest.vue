<template>
  <div class="container my-3 px-0 py-3">
    <!-- 匯入元件 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">1. 匯入元件</h2>
      <p :data-theme="themeStore.theme">子元件：</p>
      <MyComponents ref="myComponent" />
    </section>

    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">2. 取出子元件中的變數 (<code>ref</code>)</h2>
      <p class="my-1" :data-theme="themeStore.theme">
        內、外層都必須要 return 並且在 onMounted 才有辦法取得到變數 <br />
        <span class="d-inline-block my-2">子層的變數： "{{ componentVariable }}"</span>
        <span class="d-inline-block my-2">子層的函式： "{{ componentFn }}"</span>
      </p>
      <div class="my-3">
        <!-- 父層 -->
        <p class="mb-2" :data-theme="themeStore.theme">父層：</p>
        <pre class="bg-dark text-light test-start p-2">
{{ `<MyComponents ref="myComponent" />` }}</pre>
        <pre class="bg-dark text-light p-2">
const myComponent = ref(null)
const componentVariable = ref('')
const componentFn = ref('')
const componentBtn = ref(null)

onMounted(() => {
  componentVariable.value = myComponent.value.variable
  componentFn.value = myComponent.value.fn()
  componentBtn.value = myComponent.value.componentBtn
})

return {
  themeStore,
  myComponent,
  componentVariable,
  componentFn,
  componentBtn
}</pre>

        <!-- 子層 -->
        <p class="mb-2" :data-theme="themeStore.theme">子層：</p>
        <pre class="bg-dark text-light test-start p-2">
{{ `<p class="my-1" :data-theme="themeStore.theme">"
  子元件的文字"
</p>
<button type="button" class="btn btn-primary"
        ref="componentBtn"
        :data-theme="themeStore.theme">
  子元件的按鈕
</button>` }}></pre>
        <pre class="bg-dark text-light test-start p-2">
const variable = ref('子元件的變數')
const componentBtn = ref(null)
function fn () {
  return '我是子元件函式回傳的文字'
}

return {
  themeStore,
  variable,
  componentBtn,
  fn
}</pre>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import MyComponents from '@/components/MyComponents.vue'
export default {
  components: {
    MyComponents
  },
  setup () {
    const store = useStore()
    const themeStore = store.state.theme
    const myComponent = ref(null)
    const componentVariable = ref('')
    const componentFn = ref('')
    const componentBtn = ref(null)

    onMounted(() => {
      componentVariable.value = myComponent.value.variable
      componentFn.value = myComponent.value.fn()
      componentBtn.value = myComponent.value.componentBtn
    })

    return {
      themeStore,
      myComponent,
      componentVariable,
      componentFn,
      componentBtn
    }
  }

}
</script><style lang='scss' scope></style>
