<template>
  <div class="container d-flex flex-column my-3 px-0 py-3">
    <!-- 變數宣告 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">1. 變數宣告</h2>
      <pre class="bg-dark text-light p-2">
const text = ref('')
const objRef = ref({})
const objReactive = reactive({})</pre>
    </section>

    <!-- Ref 練習 v-model 綁定單一變數 -->
    <section class="mb-3 p-3">
      <label for="test1" class="form-label">
        <h2 class="text-20 mb-1" :data-theme="themeStore.theme">2. v-model 綁定 ref 單一變數</h2>
        <input type="text" class="form-control" id="test1" v-model="text" placeholder="輸入文字">
      </label>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch1 }}"</p>
      <pre class="bg-dark text-light p-2">
watch(() => objRef.value.text, () => {
  console.log('"watch": text 的值改變了', text.value)
  watch1.value = `"watch": text 的值改變了', ${text.value}`
})</pre>
    </section>

    <!-- Ref 練習 v-model 綁定物件某屬性 -->
    <section class="mb-3 p-3">
      <label for="test2" class="form-label">
        <h2 class="text-20 mb-1" :data-theme="themeStore.theme">3. v-model 綁定 ref 物件中 text 變數</h2>
        <input type="text" class="form-control" id="test2" v-model="objRef.text" placeholder="輸入文字">
      </label>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch2 }}"</p>
      <pre class="bg-dark text-light p-2">
watch(() => objRef.value.text, () => {
  console.log('"watch": objRef.text改變了', objRef.value)
  watch2.value = `"watch": objRef.text改變了', ${objRef.value}`
}, { deep: true })</pre>
    </section>

    <!-- Ref 練習 v-model 綁定物件某屬性 -->
    <section class="mb-3 p-3">
      <label for="test3" class="form-label">
        <h2 class="text-20 mb-1" :data-theme="themeStore.theme">4. v-model 綁定 ref 物件中 name 變數</h2>
        <input type="text" class="form-control" id="test3" v-model="objRef.name" placeholder="輸入文字">
      </label>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch3 }}"</p>
      <pre class="bg-dark text-light p-2">
watch(objRef.value, () => {
  console.log('"watch": objRef 的某值改變了', objRef.value)
  watch3.value = `"watch": objRef 的某值改變了', ${objRef.value}`
}, { deep: true })</pre>
    </section>

    <!-- Reactive 練習 v-model 綁定物件 -->
    <section class="mb-3 p-3">
      <label for="test4" class="form-label">
        <h2 class="text-20 mb-1" :data-theme="themeStore.theme">5. v-model 綁定 reactive 物件中 text 變數</h2>
        <input type="text" class="form-control" id="test4" v-model="objReactive.text" placeholder="輸入文字">
      </label>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch4 }}"</p>
      <pre class="bg-dark text-light p-2">
watch(objReactive, () => {
  console.log('"watch": objReactive 的某值改變了', objReactive)
  watch4.value = `"watch": objReactive 的某值改變了', ${objReactive}`
})</pre>
    </section>

    <!-- 練習一次監聽多個值 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">6. 練習一次監聽多個值</h2>
      <div class="row justify-content-center">
        <div class="col-5">
          <label for="test5" class="form-label">
            <h2 class="text-20 mb-1" :data-theme="themeStore.theme">t1</h2>
            <input type="text" class="form-control" id="test5" v-model="t1" placeholder="輸入文字">
          </label>
        </div>
        <div class="col-5">
          <label for="test6" class="form-label">
            <h2 class="text-20 mb-1" :data-theme="themeStore.theme">t2</h2>
            <input type="text" class="form-control" id="test6" v-model="t2" placeholder="輸入文字">
          </label>
        </div>
      </div>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch5 }}"</p>
      <p class="my-1" :data-theme="themeStore.theme">watch 監聽: "{{ watch6 }}"</p>
      <pre class="bg-dark text-light p-2">
watch([t1, t2], ([newT1, newT2], [oldT1, oldT2]) => {
  watch5.value = `"watch": 新t1: ${newT1}, 新t2: ${newT2}`
  watch6.value = `"watch": 舊t1: ${oldT1}, 舊t2: ${oldT2}`
}, { deep: true })</pre>
    </section>

    <!-- 移除 Watch 監聽 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="themeStore.theme">7. 移除 Watch 監聽</h2>
      <p class="my-1" :data-theme="themeStore.theme">
        num === 3 就解除 Watch 監聽
      </p>
      <button type="button" class="btn btn-secondary me-2 p-1" @click="addNum">點我 num +1</button>

      <p class="my-1" :data-theme="themeStore.theme">
        num: "{{ num }}" <br />
        watch 狀態: <span :class="num==3?'text-secondary':'text-success'">"{{ num===3?'off':'on' }}"</span>
      </p>
      <pre class="bg-dark text-light p-2">
const stopNumWatch = watch(num, (nVal, oVal) => {
  console.log('Watch 有執行')
  if (nVal === 3) stopNumWatch()
})</pre>
    </section>
  </div>
</template>

<script>
import { ref, reactive, watch, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const themeStore = computed(() => store.state.theme)
    const text = ref('')
    const objRef = ref({})
    const objReactive = reactive({})
    const t1 = ref('')
    const t2 = ref('')
    const num = ref(0)
    const watch1 = ref('')
    const watch2 = ref('')
    const watch3 = ref('')
    const watch4 = ref('')
    const watch5 = ref('')
    const watch6 = ref('')

    // 取值
    // console.log(objRef.value)
    // console.log(objReactive)

    // watch 監聽
    watch(text, () => {
      console.log('"watch": text 的值改變了', text.value)
      watch1.value = `"watch": text 的值改變了', ${text.value}`
    })
    // 監聽物件中的單一個值(ref)
    watch(() => objRef.value.text, () => {
      console.log('"watch": objRef.text改變了', objRef.value)
      watch2.value = `"watch": objRef.text改變了', ${JSON.stringify(objRef.value)}`
    }, { deep: true })
    // 監聽整個物件(ref)
    watch(objRef.value, () => {
      console.log('"watch": objRef 的某值改變了', objRef.value)
      watch3.value = `"watch": objRef 的某值改變了', ${JSON.stringify(objRef.value)}`
    }, { deep: true })
    // 監聽 reactive
    watch(objReactive, () => {
      console.log('"watch": objReactive 的某值改變了', objReactive)
      watch4.value = `"watch": objReactive 的某值改變了', ${JSON.stringify(objReactive)}`
    })
    // 監聽多個值
    watch([t1, t2], ([newT1, newT2], [oldT1, oldT2]) => {
      watch5.value = `"watch": 新t1: ${newT1}, 新t2: ${newT2}`
      watch6.value = `"watch": 舊t1: ${oldT1}, 舊t2: ${oldT2}`
    }, { deep: true })
    // 監聽 num
    const stopNumWatch = watch(num, (nVal, oVal) => {
      console.log('Watch 有執行')
      if (nVal === 3) stopNumWatch()
    })

    function addNum () {
      if (num.value === 3) return
      num.value++
    }

    return {
      themeStore,
      text,
      objRef,
      objReactive,
      watch1,
      watch2,
      watch3,
      watch4,
      watch5,
      watch6,
      t1,
      t2,
      num,
      addNum
    }
  }
}
</script>

<style lang='scss' scope>
</style>
