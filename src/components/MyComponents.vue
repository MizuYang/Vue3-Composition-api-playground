<template>
  <p class="my-1" :data-theme="themeStore.theme">"子元件的文字"</p>
  <button type="button" class="btn btn-primary"
          ref="componentBtn" :data-theme="themeStore.theme">子元件的按鈕</button>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const themeStore = store.state.theme
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
    }
  }

}
</script><style lang='scss' scope></style>
