<template>
  <ul class="d-flex">
    <li class="text-center" v-for="tab in data.tabsData" :key="tab.tabName">
      <button type="button" class="btn btn-hover px-2"
              @click="router.push(tab.path)"
              :style="tab.style"
              :data-theme="themeStore.theme">
        {{ tab.tabName }}
      </button>
    </li>
  </ul>
  {{ tabStyle }}
</template>

<script setup>
import { reactive, watch, watchEffect, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const themeStore = store.state.theme
const router = useRouter()
const route = useRoute()
const data = reactive({
  tabsData: [
    {
      tabName: 'common',
      style: '',
      path: '/scriptSetup/common'
    },
    {
      tabName: 'props',
      style: '',
      path: '/scriptSetup/props'
    },
    {
      tabName: 'emits',
      style: '',
      path: '/scriptSetup/emits'
    }
  ],
  currentTab: 'common',
  tabStyle: ''
})

watchEffect(() => {
  const { theme } = themeStore // dark, light
  const currentTab = data.currentTab
  const styleData = {
    dark: {
      isCurrentTab: 'border:1px solid #fff;background-color:#fff;color:#000;',
      default: 'border:1px solid #fff;'
    },
    light: {
      isCurrentTab: 'border:1px solid #000;background-color:#000;color:#fff;',
      default: 'border:1px solid #000;'
    }
  }
  updateCurrentTabBorder()

  function updateCurrentTabBorder () {
    data.tabsData.forEach(item => {
      const isCurrentTab = item.tabName === currentTab
      if (isCurrentTab) {
        item.style = styleData[theme].isCurrentTab
      } else {
        item.style = styleData[theme].default
      }
    })
  }
})

watch(route, () => {
  getCurrentTab()
})

onMounted(() => {
  getCurrentTab()
})

function getCurrentTab () {
  const tabName = route.path.split('/').at(-1)
  data.currentTab = tabName
}
</script>

<style lang='scss'>
</style>
