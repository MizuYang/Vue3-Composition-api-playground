import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/views/WatchTest.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('@/views/ComputedTest.vue')
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: () => import('@/views/WatchEffect.vue')
  },
  {
    path: '/component',
    name: 'component',
    component: () => import('@/views/ComponentTest.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('@/views/PropsFather.vue')
  },
  {
    path: '/emits',
    name: 'emits',
    component: () => import('@/views/EmitFather.vue')
  },
  {
    path: '/defineExpose',
    name: 'defineExpose',
    component: () => import('@/views/DefineExposeFather.vue')
  },
  {
    path: '/scriptSetup',
    name: 'scriptSetup',
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
