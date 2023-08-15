<template>
  <div class="container my-3 px-0 py-3">
    <!-- WatchEffect 監聽的任何依賴改變, 都會觸發執行 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="theme">1. watchEffect 的任何 "ref" 依賴改變, 都會觸發執行</h2>
      <div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <label for="t1" class="form-label" :data-theme="theme">
              t1
              <input type="text" class="form-control" id="t1" v-model="t1" placeholder="輸入文字">
            </label>
          </div>
          <div class="col">
            <label for="t2" class="form-label" :data-theme="theme">
              t2
              <input type="text" class="form-control" id="t2" v-model="t2" placeholder="輸入文字">
            </label>
          </div>
          <div class="col">
            <label for="t3" class="form-label" :data-theme="theme">
              t3
              <input type="text" class="form-control" id="t3" v-model="t3" placeholder="輸入文字">
            </label>
          </div>
        </div>
        <div>
          <label for="t4" class="form-label" :data-theme="theme">
            t4 ( 不是 ref 變數, 所以不會觸發 watchEffect)
            <input type="text" class="form-control" id="t4" v-model="t4" placeholder="輸入文字">
          </label>
        </div>
      </div>
      <p class="my-1" :data-theme="theme">
        觸發 watchEffect 就改變下面的文字 <br />
        "<code>{{ watchEddect1 }}</code>"
      </p>
      <pre class="bg-dark text-light p-2">
const t1 = ref('')
const t2 = ref('')
const t3 = ref('')
const t4 = ''
watchEffect(() => {
  // 因 t4 不是 ref 宣告變數, 故無法監聽到值的改變
  watchEddect1.value = `${t1.value}${t2.value}${t3.value}${t4}`
})</pre>
    </section>

    <!-- 移除 WatchEffect 監聽 -->
    <section class="mb-3 p-3">
      <h2 class="text-20 mb-1" :data-theme="theme">2. 移除 watchEffect 監聽</h2>
      <p class="my-1" :data-theme="theme">
        num === 3 就解除 watchEffect 監聽
      </p>
      <button type="button" class="btn btn-secondary me-2 p-1" @click="addNum">點我 num +1</button>

      <p class="my-1" :data-theme="theme">
        num: "<code>{{ num }}"</code> <br />
        watchEffect 狀態: <span :class="num==3?'text-secondary':'text-success'">"{{ num===3?'off':'on' }}"</span>
      </p>
      <pre class="bg-dark text-light p-2">
const num = ref(0)
const stopWatchEffect = watchEffect(() => {
  console.log('有執行, num:', num.value)
  if (num.value === 3) stopWatchEffect()
})
function addNum () {
  if (num.value === 3) return
  num.value++
}</pre>
    </section>
  </div>
</template>

<script setup>
import { ref, toRef, watchEffect } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const watchEddect1 = ref('')

// part 1
const t1 = ref('')
const t2 = ref('')
const t3 = ref('')
const t4 = ''
watchEffect(() => {
  // 因 t4 不是 ref 宣告變數, 故無法監聽到值的改變
  watchEddect1.value = `${t1.value}${t2.value}${t3.value}${t4}`
})

// part 2
const num = ref(0)
const stopWatchEffect = watchEffect(() => {
  console.log('有執行, num:', num.value)
  if (num.value === 3) stopWatchEffect()
})
function addNum () {
  if (num.value === 3) return
  num.value++
}

</script>

<style lang='scss' scope></style>
