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
