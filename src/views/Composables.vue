<template>
  <div class="container d-flex flex-column mt-3 px-0 pt-3" :data-theme="theme">
    <section class="my-3 px-3">
      <h2 class="text-20">Composables 拆分模組</h2>
    </section>

    <!-- 起始結構預想 -->
    <section class="area my-3 p-3">
      <h3 class="mb-2">起始結構預想</h3>
      <pre class="bg-dark text-light mt-1 mb-0 p-2">
// 練習拆分三個應用
// 1. 取得滑鼠座標位置
getMousePosition()
// 2. 點按鈕 => 數字++
addNum()
// 3. 滾動條 取得 scrollTop
getScrollTop()

function getMousePosition () { ... }
function addNum () { ... }
function getScrollTop () { ... }</pre>
    </section>

    <!-- 1. 取得滑鼠座標位置 -->
    <section class="area my-3 p-3">
      <h3 class="mb-2">1. 取得滑鼠座標位置</h3>
      <p>{{ getMousePositionStates }}</p>

      <!-- 未拆模組的寫法 -->
      <div>
        <h4 class="mt-3 mb-2">未拆模組的寫法</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">// 1. 取得滑鼠座標位置
const { states: getMousePositionStates } = useGetMousePosition()

function useGetMousePosition () {
  const states = reactive({})
  const newFn = throttle(getMousePosition, 200)
  document.documentElement.addEventListener('mousemove', newFn)

  // 離開頁面 移除事件
  onUnmounted(() => document.documentElement.removeEventListener('mousemove', newFn))

  function getMousePosition (e) {
    states.x = e.pageX
    states.y = e.pageY
  }
  return { states }
}</pre>
      </div>

      <!-- 拆成模組 -->
      <div>
        <h4 class="mt-3 mb-2">拆模組的寫法</h4>
        <!-- 原檔案 -->
        <div>
          <p class="mt-3 mb-2">原檔案</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">import { useGetMousePosition } from '@/composables/useGetMousePosition.js'

// 1. 取得滑鼠座標位置
const { states: getMousePositionStates } = useGetMousePosition()</pre>
        </div>
        <!-- composables/useGetMousePosition.js -->
        <div>
          <p class="mt-3 mb-2">composables/useGetMousePosition.js</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">export function useGetMousePosition () {
  const states = reactive({})
  const newFn = throttle(getMousePosition, 200)
  document.documentElement.addEventListener('mousemove', newFn)

  // 離開頁面 移除事件
  onUnmounted(() => document.documentElement.removeEventListener('mousemove', newFn))

  function getMousePosition (e) {
    states.x = e.pageX
    states.y = e.pageY
  }
  return { states }
}</pre>
        </div>
      </div>
    </section>

    <!-- 2. 點按鈕 => 數字++ -->
    <section class="area my-3 p-3">
      <h3 class="mb-2">2. 點按鈕 => 數字++</h3>
      <div class="d-flex mb-3">
        <button type="button" class="btn btn-sm btn-secondary me-3 p-1" @click="addNum">num++</button>
        <p>num：{{ num }}</p>
      </div>

      <!-- 未拆模組的寫法 -->
      <div>
        <h4 class="mt-3 mb-2">未拆模組的寫法</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const { num, addNum } = useAddNum()

function useAddNum () {
  const states = reactive({ num: 0 })

  function addNum () { states.num++ }

  return {
    ...toRefs(states),
    addNum
  }
}</pre>
      </div>

      <!-- 拆成模組 -->
      <div>
        <h4 class="mt-3 mb-2">拆模組的寫法</h4>
        <!-- 原檔案 -->
        <div>
          <p class="mt-3 mb-2">原檔案</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">import { useAddNum } from '@/composables/useAddNum.js'

// 2. 點按鈕 => 數字++
const { num, addNum } = useAddNum()</pre>
        </div>
        <!-- composables/useGetMousePosition.js -->
        <div>
          <p class="mt-3 mb-2">composables/useGetMousePosition.js</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">export function useAddNum () {
  const states = reactive({ num: 0 })

  function addNum () { states.num++ }

  return {
    ...toRefs(states),
    addNum
  }
}
</pre>
        </div>
      </div>
    </section>

    <!-- 3. 滾動條 取得 scrollTop -->
    <section class="area my-3 p-3">
      <h3 class="mb-2">3. 滾動條 取得 scrollTop</h3>
      <div class="d-flex mb-3">
        <p class="me-5" style="min-width:150px">scrollTop：{{ scrollTop }}</p>
        <!-- 滾動可容器 -->
        <div class="w-100 bg-dark" @scroll="getScrollTop"
             style="max-height:100px;overflowY:scroll">
          <div style="height:5500px;"></div>
        </div>
      </div>

      <!-- 未拆模組的寫法 -->
      <div>
        <h4 class="mt-3 mb-2">未拆模組的寫法</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">// 3. 滾動條 取得 scrollTop
const { scrollTop, getScrollTop } = useGetScrollTop()

function useGetScrollTop () {
  const states = reactive({ scrollTop: 0 })

  function getScrollTop (e) { states.scrollTop = e.target.scrollTop }

  return {
    ...toRefs(states),
    getScrollTop
  }
}</pre>
      </div>

      <!-- 拆成模組 -->
      <div>
        <h4 class="mt-3 mb-2">拆模組的寫法</h4>
        <!-- 原檔案 -->
        <div>
          <p class="mt-3 mb-2">原檔案</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">import { useGetScrollTop } from '@/composables/useGetScrollTop.js'

// 3. 滾動條 取得 scrollTop
const { scrollTop, getScrollTop } = useGetScrollTop()</pre>
        </div>
        <!-- composables/useGetMousePosition.js -->
        <div>
          <p class="mt-3 mb-2">composables/useGetMousePosition.js</p>
          <pre class="bg-dark text-light mt-1 mb-0 p-2">export function useGetScrollTop () {
  const states = reactive({ scrollTop: 0 })

  function getScrollTop (e) { states.scrollTop = e.target.scrollTop }

  return {
    ...toRefs(states),
    getScrollTop
  }
}
</pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onUnmounted, onMounted } from 'vue' // eslint-disable-line
import { useStore } from 'vuex'
import { useGetMousePosition } from '@/composables/composablesDemo/useGetMousePosition.js'
import { useAddNum } from '@/composables/composablesDemo/useAddNum.js'
import { useGetScrollTop } from '@/composables/composablesDemo/useGetScrollTop.js'
// import throttle from 'lodash/throttle.js'

const store = useStore()
const themeStore = store.state.theme
const { theme } = toRefs(themeStore)
// 練習拆分三個應用
// 1. 取得滑鼠座標位置
const { states: getMousePositionStates } = useGetMousePosition()
// 2. 點按鈕 => 數字++
const { num, addNum } = useAddNum()
// 3. 滾動條 取得 scrollTop
const { scrollTop, getScrollTop } = useGetScrollTop()

// ? 抽出模組之前寫法 (保留做個紀錄)
// function useGetMousePosition () {
//   const states = reactive({})
//   const newFn = throttle(getMousePosition, 200)
//   document.documentElement.addEventListener('mousemove', newFn)

//   // 離開頁面 移除事件
//   onUnmounted(() => document.documentElement.removeEventListener('mousemove', newFn))

//   function getMousePosition (e) {
//     states.x = e.pageX
//     states.y = e.pageY
//   }
//   return { states }
// }
// function useAddNum () {
//   const states = reactive({ num: 0 })

//   function addNum () { states.num++ }

//   return {
//     ...toRefs(states),
//     addNum
//   }
// }
// function useGetScrollTop () {
//   const states = reactive({ scrollTop: 0 })

//   function getScrollTop (e) { states.scrollTop = e.target.scrollTop }

//   return {
//     ...toRefs(states),
//     getScrollTop
//   }
// }
</script>

<style lang='scss'>

</style>
