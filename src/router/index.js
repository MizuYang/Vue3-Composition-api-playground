import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      pageName: 'home'
    },
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    meta: {
      pageName: 'watch'
    },
    component: () => import('@/views/WatchTest.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    meta: {
      pageName: 'computed'
    },
    component: () => import('@/views/ComputedTest.vue')
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    meta: {
      pageName: 'watchEffect'
    },
    component: () => import('@/views/WatchEffect.vue')
  },
  {
    path: '/component',
    name: 'component',
    meta: {
      pageName: 'component'
    },
    component: () => import('@/views/ComponentTest.vue')
  },
  {
    path: '/props',
    name: 'props',
    meta: {
      pageName: 'props'
    },
    component: () => import('@/views/PropsFather.vue')
  },
  {
    path: '/emits',
    name: 'emits',
    meta: {
      pageName: 'emits'
    },
    component: () => import('@/views/EmitFather.vue')
  },
  {
    path: '/defineExpose',
    name: 'defineExpose',
    meta: {
      pageName: 'defineExpose'
    },
    component: () => import('@/views/DefineExposeFather.vue')
  },
  {
    path: '/scriptSetup',
    name: 'scriptSetup',
    meta: {
      pageName: 'scriptSetup'
    },
    component: () => import('@/views/scriptSetup/ScriptSetup.vue'),
    children: [
      {
        path: 'common',
        name: 'common-child',
        component: () => import('@/views/scriptSetup/items/CommonTest.vue')
      },
      {
        path: 'props',
        name: 'props-child',
        component: () => import('@/views/scriptSetup/items/PropsFather.vue')
      },
      {
        path: 'emits',
        name: 'emits-child',
        component: () => import('@/views/scriptSetup/items/EmitFather.vue')
      },
      {
        path: '/scriptSetup/:pathMatch(.*)*',
        redirect: '/scriptSetup/common'
      }
    ]
  },
  {
    path: '/vBindIs',
    name: 'vBindIs',
    meta: {
      pageName: 'vBindIs'
    },
    component: () => import('@/views/VbindIs.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    meta: {
      pageName: 'slot'
    },
    component: () => import('@/views/SlotFather.vue')
  },
  { // 生命週期
    path: '/lifecycle',
    name: 'lifecycle',
    meta: {
      pageName: 'lifecycle'
    },
    component: () => import('@/views/Lifecycle.vue')
  }
  // { //* 代表所有主頁面下的頁面，路由錯誤都會被導向
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/'
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})

export default router
