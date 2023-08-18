<template>
  <div class="container d-flex flex-column mt-3 px-0 pt-3" :data-theme="theme">
    <section class="my-3 px-3">
      <h2 class="text-20">ToRaw、MarkRaw</h2>
    </section>

    <!-- toRaw: 將 reactive 轉為普通資料 -->
    <section class="area my-2 p-3">
      <h3 class="text-18 mb-4">toRaw: 將 reactive 轉為普通資料</h3>
      <!-- 將普通資料轉成響應式 -->
      <div class="mb-3">
        <h4 class="mb-2">將普通資料轉成響應式</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const a = reactive({ name: 'mizu' })
console.log(a) // Proxy(Object) {name: 'mizu'}</pre>
      </div>

      <!-- 將響應式的資料轉回普通的資料 -->
      <div class="mb-3">
        <h4 class="mb-2">將響應式的資料轉回普通的資料</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const b = toRaw(a)
console.log(b) // {name: 'mizu'}</pre>
      </div>

      <!-- 傳參考特性 (改變 b.name 後 a.name 也會跟著被修改) -->
      <div class="mb-3">
        <h5 class="mb-2">傳參考特性 (改變 <code>b.name</code> 後 <code>a.name</code> 也會跟著被修改)</h5>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">b.name = 'jack'
console.log(a)  // Proxy(Object) {name: 'jack'}
console.log(b)  // {name: 'jack'}</pre>
      </div>

      <!-- 要避免傳參考, 仍須使用 JSON 方法 -->
      <div>
        <h5 class="mb-2">要避免傳參考, 仍須使用 JSON 方法</h5>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const c = JSON.parse(JSON.stringify(a))
c.name = 'ray'
console.log(a)  // Proxy(Object) {name: 'jack'}
console.log(c)  // {name: 'ray'}</pre>
      </div>
    </section>

    <!-- markRaw: 使其丟失響應式 -->
    <section class="area my-3 p-3">
      <h3 class="text-18 mb-4">markRaw: 使其丟失響應式</h3>
      <!-- 將普通資料轉成響應式 -->
      <div>
        <h4 class="mb-2">將 <code>d.b</code> 使用 markRaw 使其失去響應式</h4>
        <p class="mb-2">{{ d }}</p>
        <label for="aa" class="mb-2">
          綁定 d.a.name：
          <input type="text" v-model="d.a.name" id="aa">
        </label>
        <label for="bb" class="mb-2">
          綁定 d.b.name：
          <input type="text" v-model="d.b.name" id="bb">
        </label>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const d = reactive({})

const kid = {
  name: 'rumi'
}

// d.a 使用 JSON 方法, 避免傳參考特性, 跟著被丟失響應式 (因 d.a、d.b 使用同個 kid 物件)
d.a = JSON.parse(JSON.stringify(kid))

// 使 d.b 賦予的值移除響應式
d.b = markRaw(kid)</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, toRefs, toRaw, markRaw } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const themeStore = store.state.theme
const { theme } = toRefs(themeStore)

// toRaw: reactive => 普通數據
toRawDemo()

// markRaw: 使其丟失響應式
const d = markRawDemo()

function toRawDemo () {
  const a = reactive({
    name: 'mizu'
  })
  console.log('a: ', a)
  const b = toRaw(a)
  console.log('b: ', b)

  console.log('%cb.name = "jack"', 'background-color: #7bff5a4b;padding:1px 2px;')
  b.name = 'jack'
  console.log('a: ', a)
  console.log('b: ', b)

  console.log(`%c${'JSON.parse(JSON.stringify())'}`, 'background-color: #7bff5a4b;padding:1px 2px;')
  const c = JSON.parse(JSON.stringify(a))
  console.log(c)
  c.name = 'ray'
  console.log(a)
  console.log(c)
}
function markRawDemo () {
  const d = reactive({})

  const kid = {
    name: 'rumi'
  }

  // d.a 使用 JSON 方法, 避免傳參考特性, 跟著被丟失響應式 (因 d.a、d.b 使用同個 kid 物件)
  d.a = JSON.parse(JSON.stringify(kid))

  // 使 d.b 賦予的值移除響應式
  d.b = markRaw(kid)

  return d
}

</script>

<style lang='scss'>

</style>
