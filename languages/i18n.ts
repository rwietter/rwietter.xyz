import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from 'public/locales/en/common.json'
import commonPt from 'public/locales/pt/common.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: commonEn,
    },
    pt: {
      translation: commonPt,
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  debug: process.env.NODE_ENV === 'development',
  cache: {
    enabled: true,
  },
  interpolation: {
    escapeValue: false,
  },
})
