import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ja, en } from '@/constants/languages'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: {
    ja,
    en
  }
})

export default i18n
