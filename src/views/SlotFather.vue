<template>
  <div class="container d-flex flex-column my-3 px-0 py-3">
    <section class="my-3 px-3">
      <h2 class="text-20 mb-1" :data-theme="theme">Slot 插槽</h2>
    </section>

    <!-- 預設插槽 (默認插槽) -->
    <section class="px-3">
      <h3 class="text-18 mb-3" :data-theme="theme">1. 預設插槽</h3>
      <!-- 父 -->
      <div class="ms-3">
        <h4 class="mb-1" :data-theme="theme">父層</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">{{ `<SlotChild1>
  <span>預設插槽的文字</span>
</SlotChild1>` }}</pre>
      </div>

      <!-- 子 -->
      <SlotChild1>
        <span :data-theme="theme">預設插槽的文字</span>
      </SlotChild1>
    </section>

    <!-- 具名插槽 -->
    <section class="px-3">
      <h3 class="text-18 mb-3" :data-theme="theme">2. 具名插槽</h3>
      <!-- 父 -->
      <div class="ms-3">
        <h4 class="mb-1" :data-theme="theme">父層</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">{{ `<SlotChild2>
  <template #text>
    <span>具名插槽</span>
  </template>
</SlotChild2>` }}</pre>
      </div>

      <!-- 子 -->
      <SlotChild2>
        <template #text>
          <span :data-theme="theme">具名插槽</span>
        </template>
      </SlotChild2>
    </section>

    <!-- 作用域插槽 -->
    <section class="px-3">
      <h3 class="text-18 mb-3" :data-theme="theme">3. 作用域插槽 <span class="text-14"> ( 把子層的資料取出來給父層用 )</span></h3>
      <!-- 父 -->
      <div class="ms-3 mb-3">
        <h4 class="mb-1" :data-theme="theme">父層</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">{{ 作用域插槽template }}</pre>
      </div>

      <!-- 子 -->
      <SlotChild3>
        <template #text2="slotProps">
          <p :data-theme="theme">1. 普通寫法：{{ slotProps }}"</p>
          <pre class="bg-dark text-light mt-1 ms-3 mb-4 p-2">{{ slotExample1 }}</pre>
        </template>
        <!-- 解構 -->
        <template #text3="{text3}">
          <p :data-theme="theme">2. 解構寫法：{{ text3 }}"</p>
          <pre class="bg-dark text-light mt-1 ms-3 mb-4 p-2">{{ slotExample2 }}</pre>
        </template>
      </SlotChild3>
    </section>

    <!-- 動態插槽 -->
    <section class="px-3">
      <h3 class="text-18 mb-3" :data-theme="theme">4. 動態插槽</h3>
      <!-- 父 -->
      <div class="ms-3">
        <h4 class="mb-1" :data-theme="theme">父層</h4>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">{{ 動態插槽template }}</pre>
        <pre class="bg-dark text-light mt-1 mb-0 p-2">const dynamicSlot = ref('插槽1')</pre>

        <label for="插槽1" class="me-3" :data-theme="theme" >
          <input type="radio" name="dynamic" value="插槽1" id="插槽1"  v-model="dynamicSlot">
          插槽1
        </label>
        <label for="插槽2" class="me-3" :data-theme="theme" >
          <input type="radio" name="dynamic" value="插槽2" id="插槽2"  v-model="dynamicSlot">
          插槽2
        </label>
        <label for="插槽3" class="me-3" :data-theme="theme" >
          <input type="radio" name="dynamic" value="插槽3" id="插槽3"  v-model="dynamicSlot">
          插槽3
        </label>
        <p :data-theme="theme">當前插槽：<code>{{ dynamicSlot }}</code></p>
      </div>

      <!-- 子 -->
      <SlotChild4>
        <template v-slot:[dynamicSlot]>
          <span :data-theme="theme">動態插槽的變數：<code>{{ dynamicSlot }}</code></span>
        </template>
      </SlotChild4>
    </section>
  </div>
</template>

<script setup>
import { ref, toRef, computed } from 'vue'
import { useStore } from 'vuex'
import SlotChild1 from '@/components/slot/預設插槽.vue'
import SlotChild2 from '@/components/slot/具名插槽.vue'
import SlotChild3 from '@/components/slot/作用域插槽.vue'
import SlotChild4 from '@/components/slot/動態插槽.vue'

const store = useStore()
const themeStore = store.state.theme
const theme = toRef(themeStore, 'theme')
const 作用域插槽template = computed(() => {
  return `<SlotChild3>
  <template #text2="slotProps">
    <span>
      作用域插槽 - 子層的資料："{{ slotProps }}"
    </span>
  </template>
</SlotChild3>`
})
const slotExample1 = computed(() => {
  return `<SlotChild3>
  <template #text2="slotProps">
    <p>普通寫法：{{ slotProps }}"</p>
  </template>
</SlotChild3>`
})
const slotExample2 = computed(() => {
  return `<SlotChild3>
  <!-- 解構 -->
  <template #text3="{ text3 }">
    <p>解構寫法：{{ text3 }}"</p>
  </template>
</SlotChild3>`
})
const 動態插槽template = computed(() => {
  return `<SlotChild4>
  <template v-slot:[dynamicSlot]>
    <span>動態插槽的變數：{{ dynamicSlot }}</span>
  </template>
</SlotChild4>`
})

const dynamicSlot = ref('插槽1')
</script>

<style lang='scss'>

</style>
