import { createI18n } from 'vue-i18n'
// 自定义国际化文件
import zh from './lang/zh.json'
import en from './lang/en.json'
import ja from './lang/ja.json'

// 将i18n暴露出去，在main.js中引入挂载
export const i18n = createI18n({
  // composition api 需設定為 false
  legacy: false,

  // 默认语言
  locale: 'zh',

  // 所選擇的語言不可用時，改用的預設語言
  // fallbackLocale: 'en',

  // 全局注册 $t
  globalInjection: true,

  // 语言库
  messages: {
    zh,
    en,
    ja
  }
})
