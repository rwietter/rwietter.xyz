import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'public/locales/en/en.json'
import pt from 'public/locales/pt/pt.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
  },
  fallbackLng: 'pt',
  cache: {
    enabled: true,
  },
  interpolation: {
    escapeValue: false,
  },
})
