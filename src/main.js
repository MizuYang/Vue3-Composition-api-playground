import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuex from 'vuex'
import store from './vuex/index'

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import { i18n } from '@/i18n/i18n.js'

import App from './App.vue'
import router from './router'

// axios.defaults.baseURL = 'http://xxx.com' // 共用網址頭
// axios.defaults.headers.common.Authorization = 'Bearer your-auth-token' // 自定義請求頭
axios.defaults.timeout = 5000

const app = createApp(App)

app.component('IsLoading', VueLoading)

app.use(router)
app.use(VueAxios, axios)
app.use(i18n)
app.use(Vuex)
app.use(store)
app.mount('#app')
