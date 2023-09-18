import { reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'

export function useMyI18n () {
  const { locale } = useI18n()
  const states = reactive({
    locale,
    lang: [
      {
        name: 'zh'
      },
      {
        name: 'en'
      },
      {
        name: 'ja'
      }
    ]
  })
  console.log('當前語系', locale.value) // zh

  function changeLanguage (lang) {
    locale.value = lang
  }

  return {
    ...toRefs(states),
    changeLanguage
  }
}
