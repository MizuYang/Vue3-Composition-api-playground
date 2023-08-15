<template>
  <div class="container d-flex flex-column mt-3 px-0 pt-3">
    <header class="mt-3">
      <h2 class="text-20 mb-1" :data-theme="theme"><code>v-bind:is&nbsp; (:is)</code></h2>
    </header>

    <!-- 匯入元件 -->
    <section class="p-3">
      <h3 class="text-18 mt-2" :data-theme="theme">
        匯入元件
      </h3>
      <pre class="bg-dark text-light mt-3 ms-3 p-2">import AComponent from '@/components/vBindIs/AComponent.vue'
import BComponent from '@/components/vBindIs/BComponent.vue'
import CComponent from '@/components/vBindIs/CComponent.vue'</pre>
    </section>

    <!-- 以往寫法：用 v-if、v-else-if 判斷當前顯是哪個頁面 -->
    <section class="p-3">
      <h3 class="text-18 mb-2" :data-theme="theme">
        以往寫法：用 v-if、v-else-if 判斷當前顯是哪個頁面
      </h3>

      <!-- 切換頁面的 Tabs -->
      <div class="p-3 pb-0">
        <h3 class="mb-3" :data-theme="theme">點下方按鈕切換元件</h3>
        <ul class="d-flex">
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent1('AComponent')">
              A 元件
            </button>
          </li>
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent1('BComponent')">
              B 元件
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent1('CComponent')">
              C 元件
            </button>
          </li>
        </ul>

        <pre class="bg-dark text-light mt-3 p-2">{{ `@click="changeComponent1('AComponent')"
@click="changeComponent1('BComponent')"
@click="changeComponent1('CComponent')"` }}</pre>
      </div>

      <div class="ms-3">
        <AComponent v-if="curComponent1==='AComponent'" />
        <BComponent v-else-if="curComponent1==='BComponent'" />
        <CComponent v-else-if="curComponent1==='CComponent'" />
        <pre class="bg-dark text-light mt-3 p-2"><span class="text-danger">// 函式參數帶的是元件名稱的"字串"</span>{{ `
<AComponent v-if="curComponent1==='AComponent'" />
<BComponent v-else-if="curComponent1==='BComponent'" />
<CComponent v-else-if="curComponent1==='CComponent'" />` }}</pre>
      </div>
    </section>

    <!-- 更好的寫法：用 :is 動態切換元件即可 -->
    <section class="mb-2 p-3">
      <h3 class="text-18 mb-2" :data-theme="theme">
        更好的寫法：用 :is 動態切換元件即可
      </h3>

      <!-- 切換頁面的 Tabs -->
      <div class="p-3 pb-0">
        <h3 class="mb-3" :data-theme="theme">點下方按鈕切換元件</h3>
        <ul class="d-flex">
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(AComponent)">
              A 元件
            </button>
          </li>
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(BComponent)">
              B 元件
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(CComponent)">
              C 元件
            </button>
          </li>
        </ul>

        <pre class="bg-dark text-light mt-3 p-2"><span class="text-danger">// 函式參數帶的是"變數"(import 進來的元件)</span>{{ `
@click="changeComponent2(AComponent)"
@click="changeComponent2(BComponent)"
@click="changeComponent2(CComponent)"` }}</pre>
      </div>

      <div class="ps-3">
        <Component :is="curComponent2"></Component>
        <pre class="bg-dark text-light mt-3 p-2">{{ `<Component :is="curComponent2"></Component>` }}</pre>
      </div>
    </section>

    <!-- Keep-Alive  -->
    <section class="mb-2 p-3">
      <h3 class="text-20 mb-2" :data-theme="theme">
        <code>{{ '<Keep-Alive>' }}</code>
      </h3>

      <!-- 切換頁面的 Tabs -->
      <div class="mb-3 p-3 pb-0">
        <h3 class="mb-3" :data-theme="theme">點下方按鈕切換元件，觀察文字欄位的字元是否還存在</h3>
        <ul class="d-flex">
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(AComponent)">
              A 元件
            </button>
          </li>
          <li class="me-3">
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(BComponent)">
              B 元件
            </button>
          </li>
          <li>
            <button type="button" class="btn btn-secondary btn-sm p-1" :data-theme="theme"
            @click="changeComponent2(CComponent)">
              C 元件
            </button>
          </li>
        </ul>
      </div>

      <div class="ps-3">
        <keep-alive>
          <Component :is="curComponent2"></Component>
        </keep-alive>
        <pre class="bg-dark text-light mt-3 p-2">{{ `<keep-alive>
  <Component :is="curComponent2"></Component>
</keep-alive>` }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, toRef, shallowRef } from 'vue'
import { useStore } from 'vuex'
import AComponent from '@/components/vBindIs/AComponent.vue'
import BComponent from '@/components/vBindIs/BComponent.vue'
import CComponent from '@/components/vBindIs/CComponent.vue'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
// 以往寫法範例
const curComponent1 = ref('AComponent')
// 更好寫法範例
const curComponent2 = shallowRef(AComponent)

function changeComponent1 (component) {
  curComponent1.value = component
}
function changeComponent2 (component) {
  curComponent2.value = component
}

</script>

<style lang='scss'>

</style>
